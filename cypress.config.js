const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "msje8x",
  e2e: {
    baseUrl: 'https://katanamrp.com/',
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
    
    },
  },
});
