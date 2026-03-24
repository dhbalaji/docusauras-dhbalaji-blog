import rss from '@astrojs/rss';
import { getPublishedPosts, getPostUrl } from '../../lib/content';
import { BLOG_CONFIG, SITE_DESCRIPTION, SITE_TITLE } from '../../lib/site';

export async function GET(context: { site: URL }) {
  const posts = await getPublishedPosts();

  return rss({
    title: BLOG_CONFIG.feedTitle,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.date,
      link: getPostUrl(post),
    })),
    customData: `<language>en-us</language><managingEditor>${SITE_TITLE}</managingEditor>`,
  });
}

