// import { defineField, defineType } from "sanity";

// export default defineType({
//   name: "galleryPhoto",
//   title: "Gallery Photo",
//   type: "document",
//   fields: [
//     defineField({ name: "title", title: "Title", type: "string" }),
//     defineField({ name: "alt", title: "Alt Text", type: "string" }),

//     defineField({
//       name: "image",
//       title: "Image",
//       type: "image",
//       options: { hotspot: true },
//       validation: (r) => r.required(),
//     }),

//     // which block it belongs to (Architecture / Interiors / etc.)
//     defineField({
//       name: "section",
//       title: "Section",
//       type: "reference",
//       to: [{ type: "gallerySection" }],
//       validation: (r) => r.required(),
//     }),

//     // optional: which villa tab it belongs to
//     defineField({
//       name: "villa",
//       title: "Villa (optional)",
//       type: "reference",
//       to: [{ type: "villa" }],
//     }),

//     // optional: for tab like “Dining and Experiences”
//     defineField({
//       name: "tag",
//       title: "Tag (optional)",
//       type: "string",
//       description: `Example: "dining-experiences"`,
//     }),

//     defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
//   ],
// });