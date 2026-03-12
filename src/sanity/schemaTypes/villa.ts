// import { defineField, defineType } from "sanity";

// export default defineType({
//   name: "villa",
//   title: "Villa",
//   type: "document",
//   fields: [
//     defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "title", maxLength: 96 },
//       validation: (r) => r.required(),
//     }),
//     defineField({ name: "order", title: "Order", type: "number", initialValue: 0 }),
//   ],
// });