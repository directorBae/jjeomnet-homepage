/** 브랜드 모티프 — 작은 사각 점들의 행 (푸터 등 장식용) */
export default function DotRow({
  count = 8,
  size = 11,
  gap = 5,
}: {
  count?: number;
  size?: number;
  gap?: number;
}) {
  return (
    <div aria-hidden style={{ display: 'flex', gap, marginTop: 22 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: Math.round(size * 0.27),
            background: `rgba(240,242,246,${Math.max(0.16, 0.55 - i * 0.05)})`,
          }}
        />
      ))}
    </div>
  );
}
