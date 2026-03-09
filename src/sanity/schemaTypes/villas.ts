import { defineField, defineType } from "sanity";

export default defineType({
  name: "villas",
  title: "Villas",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Villa Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),

    /* ---------------- QUICK STATS ---------------- */

      defineField({
        name: "stats",
        title: "Quick Stats",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              defineField({
                name: "label",
                title: "Label",
                type: "string",
                description: "Example: Bedrooms, Sleeps, Pool",
              }),
              defineField({
                name: "value",
                title: "Value",
                type: "string",
                description: "Example: 4, 8 Guests, Infinity Pool",
              }),
            ],
            preview: {
              select: {
                label: "label",
                value: "value",
              },
              prepare({ label, value }) {
                return {
                  title: `${value}`,
                  subtitle: label,
                };
              },
            },
          },
        ],
      }),

    /* ---------------- INTRO SECTION ---------------- */

    defineField({
      name: "intro",
      title: "Intro Section",
      type: "object",
      fields: [
        defineField({
          name: "headingItalic",
          title: "Heading (Italic)",
          type: "string",
        }),

        defineField({
          name: "headingBold",
          title: "Heading (Bold)",
          type: "string",
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),

        defineField({
          name: "image",
          title: "Side Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    /* ---------------- HIGHLIGHTS ---------------- */

    defineField({
      name: "highlights",
      title: "Highlights Section",
      type: "object",
      fields: [

        defineField({
          name: "headingItalic",
          title: "Heading (Italic)",
          type: "string",
          description: "Example: Wake Up To The",
        }),

        defineField({
          name: "headingBold",
          title: "Heading (Bold)",
          type: "string",
          description: "Example: View",
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),

        defineField({
          name: "cards",
          title: "Highlight Cards",
          type: "array",
          of: [
            defineField({
              name: "highlightCard",
              title: "Highlight Card",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),

                defineField({
                  name: "desc",
                  title: "Description",
                  type: "text",
                }),

                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    /* ---------------- GALLERY ---------------- */

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineField({
          name: "galleryItem",
          title: "Gallery Item",
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Item Type",
              type: "string",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "YouTube Video", value: "youtube" },
                ],
                layout: "radio",
              },
              initialValue: "image",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.type !== "image",
            }),

            defineField({
              name: "youtubeUrl",
              title: "YouTube URL",
              type: "url",
              description: "Example: https://www.youtube.com/watch?v=xxxx or https://youtu.be/xxxx",
              hidden: ({ parent }) => parent?.type !== "youtube",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title",
              type: "type",
              media: "image",
              youtubeUrl: "youtubeUrl",
            },
            prepare({ title, type, media, youtubeUrl }) {
              return {
                title: title || (type === "youtube" ? "YouTube Video" : "Gallery Image"),
                subtitle: type === "youtube" ? youtubeUrl : "Image",
                media,
              };
            },
          },
        }),
      ],
    }),

    /* ---------------- FEATURES ---------------- */

    defineField({
      name: "features",
      title: "Key Features (cards)",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),

            defineField({
              name: "desc",
              title: "Description",
              type: "text",
            }),

            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),

    /* ---------------- AMENITIES ---------------- */

    defineField({
      name: "amenities",
      title: "Amenities (list)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "amenitiesImage",
      title: "Amenities Image",
      type: "image",
      options: { hotspot: true },
    }),

    /* ---------------- CAROUSEL IMAGES ---------------- */

    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.max(20),
    }),

    /* ---------------- VIRTUAL TOUR ---------------- */

    defineField({
      name: "virtualTour",
      title: "360 Virtual Tour Section",
      type: "object",
      fields: [
        defineField({
          name: "headingItalic",
          title: "Heading Italic",
          type: "string",
          initialValue: "360°",
        }),

        defineField({
          name: "headingBold",
          title: "Heading Bold",
          type: "string",
          initialValue: "Virtual Tours",
        }),

        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),

        defineField({
          name: "previewImage",
          title: "Preview Image",
          type: "image",
          options: { hotspot: true },
        }),

        defineField({
          name: "tourUrl",
          title: "360 Tour Embed URL",
          type: "url",
          description: "Example: Kuula, Matterport, or iframe link",
        }),
      ],
    }),
    
    /* ---------------- LOCATION ---------------- */

    defineField({
      name: "mapEmbedUrl",
      title: "Google Map Embed URL",
      type: "url",
      description: "Paste a Google Maps embed URL if you want to override the geopoint map.",
    }),
  ],
});