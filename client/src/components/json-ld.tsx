/**
 * Renders a JSON-LD structured data script tag. Because it is rendered by
 * React it is included in the build-time prerendered HTML as well as during
 * client-side navigation. The "<" escape prevents script breakout when
 * content contains "</script>".
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
