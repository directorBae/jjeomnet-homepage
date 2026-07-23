// 빌드 캐시 삭제 (크로스 플랫폼)
// 산출물이 꼬여 "Cannot find module './xxx.js'" 류 오류가 날 때 초기화용.
// dev(.next-dev.nosync)와 prod(.next.nosync)는 next.config.mjs의 distDir로 분리.
// (.nosync = iCloud 동기화 제외 — Desktop 폴더 프로젝트의 산출물 유실 방지)
import { rmSync } from 'fs';
for (const dir of ['.next', '.next-dev', '.next.nosync', '.next-dev.nosync']) {
  rmSync(dir, { recursive: true, force: true });
}
console.log('빌드 캐시(.next*)를 삭제했습니다.');
