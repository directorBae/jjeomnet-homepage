/** JSON-LD 구조화 데이터를 안전하게 주입하는 헬퍼 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify 결과만 주입 — XSS 방지를 위해 '<' 이스케이프
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
