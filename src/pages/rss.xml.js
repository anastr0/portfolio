import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: "Anaswara T Rajan's projects",
    description: "My Projects",
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      wip: project.data.inProgress || true,
      content: sanitizeHtml(parser.render(project.body)),
      link: `/projects/${project.slug}/`,
    })),
  });
}
