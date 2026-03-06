import { defineField, defineType } from "sanity";

export const experienceGroup = defineType({
  name: "experienceGroup",
  title: "Experience Group",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "eyebrowItalic",
      title: "Eyebrow (Italic)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleBold",
      title: "Title (Bold)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "experienceCard",
          fields: [
            defineField({
              name: "order",
              title: "Order",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "desc",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "titleBold",
      subtitle: "eyebrowItalic",
    },
    prepare({ title, subtitle }) {
      return { title: `${subtitle} ${title}` };
    },
  },
});