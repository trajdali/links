const { minify } = require("html-minifier-terser");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  // Filter: keep only items marked as featured
  eleventyConfig.addFilter("featured", (items) => items.filter((i) => i.featured));

  // Filter: return first N items
  eleventyConfig.addFilter("limit", (items, n) => items.slice(0, n));

  return {
    dir: {
      input: "src",
      output: ".",
    },
  };
};
