import {loginPage} from '../support/PageObjects/LoginPage';

Cypress.Commands.add("login",
    (email = Cypress.env("correct_email"), password = Cypress.env("correct_password"), success = true) => {
        cy.visit('/login');
        cy.get(loginPage.emailField)
          .type(email)
        cy.get(loginPage.passwordField)
          .type(password, { log: false })
        cy.get(loginPage.submitButton)
          .click()  
    }
);

Cypress.Commands.add("logout", () => {
    cy.get(loginPage.userInfoContainer)
      .click()
    cy.get(loginPage.logoutButton)
      .click()
    cy.clearLocalStorage()   
});