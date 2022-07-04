const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://katanamrp.com/',
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
    
    },
  },
});
