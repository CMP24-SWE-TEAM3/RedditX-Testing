const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '54nb39',
  viewportWidth: 1650,
  viewportHeight: 1033,
  chromeWebSecurity: false,
  pageLoadTimeout: 40000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
