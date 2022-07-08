class LoginPage implements ILogin{
    
    emailField: string;
    passwordField: string;
    submitButton: string;
    userInfoContainer: string
    logoutButton: string;
    errorMessage: string;
    
    constructor() {
       this.emailField = '#1-email';
       this.passwordField = '[type="password"]';
       this.submitButton = '[type="submit"]';
       this.userInfoContainer = '[data-testid="userInfoContainer"]';
       this.logoutButton = '#logout';
       this.errorMessage = '.auth0-global-message'
    }

    verifyErrorMessage(): void {
      cy.get(this.errorMessage)
        .should('have.text', 'Wrong email or password.')
    }
}

export const loginPage = new LoginPage()