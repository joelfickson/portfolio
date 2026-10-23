import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "categories": categories[]->title,
    "plain": pt::text(body)
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{name, image},
    "categories": categories[]->title,
    "plain": pt::text(body)
  }
`);

export const ADJACENT_POSTS_QUERY = defineQuery(`
  {
    "previous": *[_type == "post" && defined(publishedAt) && publishedAt < $publishedAt] | order(publishedAt desc)[0] { title, slug },
    "next": *[_type == "post" && defined(publishedAt) && publishedAt > $publishedAt] | order(publishedAt asc)[0] { title, slug }
  }
`);

export const VENTURES_QUERY = defineQuery(`
  *[_type == "venture" && defined(banner)] | order(order asc) {
    _id,
    name,
    tagline,
    description,
    url,
    role,
    banner
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    description,
    githubUrl,
    liveUrl,
    techStack,
    featured
  }
`);
