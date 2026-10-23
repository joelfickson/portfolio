import { RocketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const venture = defineType({
  name: "venture",
  title: "Venture",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "banner",
      type: "image",
      description: "Wide brand image, ideally 1500x500. Ventures without a banner are hidden.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
        }),
      ],
    }),
    defineField({
      name: "url",
      type: "url",
    }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Acquired", value: "acquired" },
          { title: "Inactive", value: "inactive" },
        ],
      },
      initialValue: "active",
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
    select: { title: "name", subtitle: "role", media: "logo" },
  },
});
