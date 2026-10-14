// Renders schema.org structured data as recommended by the Next.js JSON-LD
// guide. The payload is built from trusted local data and "<" is escaped so a
// value can never close the script tag.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
