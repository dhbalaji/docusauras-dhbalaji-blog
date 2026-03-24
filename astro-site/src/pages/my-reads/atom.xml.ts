import { getPublishedReads, getReadUrl } from '../../lib/content';
import { SITE_URL } from '../../lib/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const reads = await getPublishedReads();
  const updated = reads[0]?.data.date ?? new Date();

  const entries = reads
    .map((read) => {
      const link = new URL(getReadUrl(read), SITE_URL).toString();
      const updatedAt = read.data.date ? new Date(read.data.date).toISOString() : new Date().toISOString();
      const title = escapeXml(read.data.title);
      const summary = escapeXml(read.data.description ?? '');

      return `<entry>
  <title>${title}</title>
  <id>${link}</id>
  <link href="${link}" />
  <updated>${updatedAt}</updated>
  <summary>${summary}</summary>
</entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${SITE_URL}/my-reads</id>
  <title>dhbalaji, lead design technologist at Sabre Atom Feed</title>
  <updated>${new Date(updated).toISOString()}</updated>
  <link href="${SITE_URL}/my-reads/atom.xml" rel="self" />
  <link href="${SITE_URL}/my-reads" />
  ${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/atom+xml; charset=utf-8',
    },
  });
}

