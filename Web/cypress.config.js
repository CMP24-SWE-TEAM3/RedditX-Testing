
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
    reporterOptions: {
       reportDir: "cypress/results",
       overwrite: false,
       html: true,
       json: true
    },
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