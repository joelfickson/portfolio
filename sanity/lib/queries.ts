import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->name,
    "categories": categories[]->title
  }
`);

export const FEATURED_POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->name
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
    "author": author->{name, image, bio},
    "categories": categories[]->title
  }
`);

export const VENTURES_QUERY = defineQuery(`
  *[_type == "venture"] | order(order asc) {
    _id,
    name,
    description,
    url,
    logo,
    role,
    status
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

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    name,
    description,
    githubUrl,
    techStack
  }
`);

export const EXPERIENCE_QUERY = defineQuery(`
  *[_type == "experience"] | order(order asc) {
    _id,
    role,
    company,
    companyUrl,
    location,
    startDate,
    endDate,
    current,
    highlights
  }
`);

export const EDUCATION_QUERY = defineQuery(`
  *[_type == "education"] | order(order asc) {
    _id,
    degree,
    institution,
    location,
    startDate,
    endDate,
    details
  }
`);
