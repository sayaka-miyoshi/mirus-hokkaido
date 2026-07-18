import Markdoc from "@markdoc/markdoc";

export function MarkdocRenderer({ content }: { content: { node: unknown } }) {
  const transformed = Markdoc.transform(content.node as never);
  const html = Markdoc.renderers.html(transformed);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
