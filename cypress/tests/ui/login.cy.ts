import {loginPage} from '../../support/PageObjects/LoginPage';

describe('Login Tests', () => {
  it('Successfull login & logout', () => {
    cy.login(Cypress.env("correct_email"), Cypress.env("correct_password"));
    cy.logout()
  })
  it('Unsuccessfull login with incorrect email', () => {
    cy.login(Cypress.env('incorrect_email'), Cypress.env('correct_password'))
    loginPage.verifyErrorMessage()
  })
  
  it('Unsuccessfull login with incorrect password', () => {
    cy.login(Cypress.env('correct_email'), Cypress.env('incorrect_password'))
    loginPage.verifyErrorMessage()
  })
})