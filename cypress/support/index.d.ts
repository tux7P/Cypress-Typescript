
declare namespace Cypress {
    interface Chainable {
        
        login(email?: string, password?: string): void;

        logout(): void;

        goToAddNewCustomer(): void;

        fillCustomerData(firstname?: string, ): void;
        
        fillBillingDetails(): void;

    }
}