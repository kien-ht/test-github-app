const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require("cypress-image-diff-js/plugin")(on, config);
    },
  },
});
