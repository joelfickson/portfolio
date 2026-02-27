import { defineType, defineField, defineArrayMember } from "sanity";
import { BookIcon } from "@sanity/icons";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "degree",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "institution",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      type: "string",
    }),
    defineField({
      name: "endDate",
      type: "string",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "degree", subtitle: "institution" },
  },
});
