/**
 * 아직 이미지가 없는 자리를 채우는 플레이스홀더 타일.
 * (원본 디자인의 image-slot — 사진/썸네일 추가 예정 위치)
 */
export default function ImageSlot({
  label,
  ratio = '4 / 3',
  radius = 14,
}: {
  label: string;
  ratio?: string;
  radius?: number;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{
        width: '100%',
        aspectRatio: ratio,
        borderRadius: radius,
        border: '1px dashed rgba(255,255,255,.16)',
        background: 'rgba(255,255,255,.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'rgba(240,242,246,.4)',
        fontSize: 14,
        fontWeight: 600,
        padding: 16,
      }}
    >
      {label}
    </div>
  );
}
