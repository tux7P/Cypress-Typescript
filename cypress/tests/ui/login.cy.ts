describe('Login Tests', () => {
  it('Successfull login & logout', () => {
    cy.login(Cypress.env("correct_email"), Cypress.env("correct_password"));
    cy.logout()
  })
})