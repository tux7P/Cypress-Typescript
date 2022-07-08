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
}

export const customerPage = new CustomerPage()