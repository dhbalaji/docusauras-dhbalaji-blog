import rss from '@astrojs/rss';
import { getPublishedReads, getReadUrl } from '../../lib/content';
import { READS_CONFIG, SITE_DESCRIPTION, SITE_TITLE } from '../../lib/site';

export async function GET(context: { site: URL }) {
  const reads = await getPublishedReads();

  return rss({
    title: READS_CONFIG.feedTitle,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: reads.map((read) => ({
      title: read.data.title,
      description: read.data.description ?? '',
      pubDate: read.data.date,
      link: getReadUrl(read),
    })),
    customData: `<language>en-us</language><managingEditor>${SITE_TITLE}</managingEditor>`,
  });
}

