/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:"https://sceneryvillassrilanka.com",

  generateRobotsTxt: true,

  generateIndexSitemap: false,

  changefreq: "weekly",

  priority: 0.7,

  exclude: [
    "/api/*",
    "/admin/*",
    "/available-villas*",
    "/booking*",
    "/thankyou*",
  ],

  additionalPaths: async (config) => {
    try {
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

      if (!projectId) {
        console.warn("NEXT_PUBLIC_SANITY_PROJECT_ID is not defined.");
        return [];
      }

      const query = encodeURIComponent(`
        *[
          _type == "villas" &&
          defined(slug.current)
        ]{
          "slug": slug.current,
          _updatedAt
        }
      `);

      const sanityUrl = `https://${projectId}.api.sanity.io/v2025-01-01/data/query/${dataset}?query=${query}`;

      const response = await fetch(sanityUrl);

      if (!response.ok) {
        throw new Error(
          `Sanity request failed: ${response.status}`
        );
      }

      const data = await response.json();
      const villas = data.result || [];

      const villaPaths =
        await Promise.all(
          villas.map(
            async (villa) => {
              return {
                loc: `/villas/${villa.slug}`,
                changefreq: "weekly",
                priority: 0.9,
                lastmod: villa._updatedAt || new Date().toISOString(),
              };
            }
          )
        );

      return villaPaths;

    } catch (error) {
      console.error(
        "Failed to generate villa sitemap paths:",
        error
      );

      return [];
    }
  },


  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};