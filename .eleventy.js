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

  return {
    dir: {
      input: "src",
      output: ".",
    },
  };
};
