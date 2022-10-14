const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.pageLoadTimeout = 1550000
    },
    chromeWebSecurity: false
  },
});
