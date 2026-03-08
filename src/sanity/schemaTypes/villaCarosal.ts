import { defineField, defineType } from "sanity";

export default defineType({
  name: "villacarosal",
  title: "Villa Carosal",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "bedrooms", title: "Bedrooms", type: "number" }),
    defineField({ name: "sleeps", title: "Sleeps", type: "number" }),
    defineField({ name: "feature", title: "Feature", type: "string" }),
    defineField({ name: "cta", title: "CTA", type: "string", initialValue: "Explore Villa" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 1 }),
  ],
});