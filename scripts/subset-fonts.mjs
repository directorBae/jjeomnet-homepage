/**
 * Freesentation 폰트 서브셋 재생성 스크립트.
 *
 * 동작:
 *  1) src 하위 .tsx 파일에 쓰인 모든 문자 + 안전 문자셋(ASCII·기호)을 수집
 *  2) 원본 번들 HTML(쩜넷 홈페이지.html)의 manifest에서 4개 weight 원본 TTF 추출
 *  3) 사용 글자만 남긴 woff2로 서브셋해 public/fonts/ 에 저장
 *     (OG 이미지용 800·500 weight는 src/app/_assets 에 TTF로도 저장)
 *
 * 사용:  node scripts/subset-fonts.mjs [원본HTML경로]
 *   기본 원본 경로: ../쩜넷 홈페이지.html
 *
 * 카피(텍스트)를 수정한 뒤 이 스크립트를 다시 돌리면 폰트가 최신 글자셋으로 갱신됩니다.
 */
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import subsetFont from 'subset-font';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const HTML = process.argv[2] || path.join(ROOT, '..', '쩜넷 홈페이지.html');
const OUT = path.join(ROOT, 'public', 'fonts');

// predev/prebuild에서 자동 실행되므로, 원본 폰트 소스(HTML)가 없는 환경(CI·배포 등)에서는
// 커밋된 public/fonts woff2를 그대로 쓰도록 조용히 건너뜁니다.
if (!fs.existsSync(HTML)) {
  console.warn(`[subset-fonts] 원본 폰트 소스가 없어 서브셋 생성을 건너뜁니다: ${HTML}`);
  process.exit(0);
}

const FONT_UUIDS = {
  400: '25519436-8706-4fc2-87c5-fe5dee3429cc',
  500: 'c170600e-66ab-4d98-aec7-aaf4b91d8a6f',
  700: 'a6cb8cc7-5a0b-46b6-8b64-aff529a5c9d9',
  800: 'f7d3897d-39cd-459e-98a7-f128beee65d4',
};

const SAFETY =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' +
  '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ' +
  '·…—–“”‘’₩€$%©®™°→←↑↓⊂⊃∈※•';

function collectGlyphs(dir, set) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) collectGlyphs(p, set);
    else if (/\.(tsx?|mdx?)$/.test(name)) {
      for (const ch of fs.readFileSync(p, 'utf8')) if (ch.codePointAt(0) > 32) set.add(ch);
    }
  }
}

function extractFonts() {
  const html = fs.readFileSync(HTML, 'utf8');
  const m = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
  if (!m) throw new Error('manifest를 찾을 수 없습니다: ' + HTML);
  const manifest = JSON.parse(m[1].trim());
  const out = {};
  for (const [weight, uuid] of Object.entries(FONT_UUIDS)) {
    const entry = manifest[uuid];
    if (!entry) throw new Error('폰트 없음: weight ' + weight);
    let buf = Buffer.from(entry.data, 'base64');
    if (entry.compressed) buf = zlib.gunzipSync(buf);
    out[weight] = buf;
  }
  return out;
}

// 폰트 서브셋은 편의 기능이므로, 어떤 이유로든 실패해도 빌드를 깨지 않습니다.
// (실패 시 이미 커밋된 public/fonts woff2를 그대로 사용)
try {
  const glyphs = new Set();
  collectGlyphs(path.join(ROOT, 'src'), glyphs);
  for (const ch of SAFETY) glyphs.add(ch);
  const text = [...glyphs].join('');
  console.log(`수집한 글자 수: ${glyphs.size}`);

  const fonts = extractFonts();
  fs.mkdirSync(OUT, { recursive: true });

  // OG 이미지(next/og)는 satori가 ttf/woff를 요구하므로 800·500 weight를 TTF로도 저장
  const OG_ASSETS = path.join(ROOT, 'src', 'app', '_assets');
  const OG_WEIGHTS = new Set(['800', '500']);
  fs.mkdirSync(OG_ASSETS, { recursive: true });

  for (const [weight, buf] of Object.entries(fonts)) {
    const woff2 = await subsetFont(buf, text, { targetFormat: 'woff2' });
    fs.writeFileSync(path.join(OUT, `Freesentation-${weight}.woff2`), woff2);
    console.log(`public/fonts/Freesentation-${weight}.woff2  ${(woff2.length / 1024).toFixed(1)}KB`);

    if (OG_WEIGHTS.has(weight)) {
      const ttf = await subsetFont(buf, text, { targetFormat: 'truetype' });
      fs.writeFileSync(path.join(OG_ASSETS, `Freesentation-${weight}.ttf`), ttf);
      console.log(`src/app/_assets/Freesentation-${weight}.ttf  ${(ttf.length / 1024).toFixed(1)}KB`);
    }
  }
  console.log('완료.');
} catch (err) {
  console.warn('[subset-fonts] 서브셋 생성 실패 — 기존 woff2를 사용합니다:', err?.message || err);
  process.exit(0);
}
