class CustomerPage {

    globalAddButton: string;
    addCustomerButton: string;

    firstNameField: string;
    lastNameField: string;
    companyNameField: string;
    emailField: string;
    phoneField: string;
    commentField: string;
    billingAddressField: string;

    billingFirstNameField: string;
    billingLastnameField: string;
    billingCompanyField: string;
    billingphoneField: string;
    billingapartmentField: string;
    billingcityField: string;
    billingregionField: string;
    billingzipField: string;
    billingcountryField: string;

    customerDataSubmitButton: string;
    closeIframeButton: string;

    constructor() {
        this.globalAddButton = '#globalAdd',
        this.addCustomerButton = '#add-customer'

        this.firstNameField = '[data-testid="inputCustomerFirstName"]'
        this.lastNameField = '[data-testid="inputCustomerLastName"]'
        this.companyNameField = '[data-testid="inputCustomerCompany"]'
        this.emailField = '[data-testid="inputCustomerEmail"]'
        this.phoneField = '[data-testid="inputCustomerPhone"]'
        this.commentField = '[data-testid="inputCustomerComment"]'
        this.billingAddressField = '[data-testid="inputCustomerDefaultBillingAddress"]'
        
        this.billingFirstNameField = '[data-testid="firstNameTextField"]'
        this.billingLastnameField = '.MuiGrid-container > .MuiFormControl-root:nth-child(2)'
        this.billingCompanyField = '.MuiGrid-container > .MuiFormControl-root:nth-child(3)'
        this.billingphoneField = 'div.MuiFormControl-root:nth-child(4)'
        this.billingapartmentField = '.MuiGrid-item > .MuiGrid-root > .MuiFormControl-root:nth-child(2)'
        this.billingcityField = '[data-testid="gridStandard"] > :nth-child(1) > :nth-child(3)'
        this.billingregionField = '.MuiGrid-grid-xs-6:nth-child(1) > .MuiFormControl-root'
        this.billingzipField = '.MuiGrid-grid-xs-6:nth-child(2) > .MuiFormControl-root'
        this.billingcountryField = 'div.MuiFormControl-root:nth-child(5)'

        this.customerDataSubmitButton = '[data-testid="submitButton"]'
        this.closeIframeButton = '.MuiGrid-root > .MuiButtonBase-root.print-hide'
    }

    goToAddNewCustomer(): void {
        cy.get(this.globalAddButton)
          .click()
        cy.get(this.addCustomerButton)
          .click()
    }

    fillCustomerData(firstname:string, lastname:string, company:string, email:string, phone:string, comment:string) {
        cy.get(this.firstNameField).type(firstname)
        cy.get(this.lastNameField).type(lastname)
        cy.get(this.companyNameField).type(company)
        cy.get(this.emailField).type(email)
        cy.get(this.phoneField).type(phone)
        cy.get(this.commentField).type(comment)
        cy.get(this.billingAddressField).click()
    }

    fillBillingDetails(firstname:string, lastname:string, company:string, phone:string, apartment:string, city:string, region:string, zip:string, country:string) {
        cy.get(this.billingFirstNameField).type(firstname)
        cy.get(this.billingLastnameField).type(lastname)
        cy.get(this.billingCompanyField).type(company)
        cy.get(this.billingphoneField).type(phone)
        cy.get(this.billingapartmentField).type(apartment)
        cy.get(this.billingcityField).type(city)
        cy.get(this.billingregionField).type(region)
        cy.get(this.billingzipField).type(zip)
        cy.get(this.billingcountryField).type(country)
        cy.get(this.customerDataSubmitButton).click()
        cy.get(this.closeIframeButton).click()
    }
}

export const customerPage = new CustomerPage()