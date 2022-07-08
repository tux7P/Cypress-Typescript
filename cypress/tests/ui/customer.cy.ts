import {customerPage} from '../../support/PageObjects/CustomerPage';
import { faker } from '@faker-js/faker';
import {ICustomer} from "../../support/Interfaces/ICustomer";
import {IBilling} from "../../support/Interfaces/IBilling";

let customer: ICustomer = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    company: faker.company.bs(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('372-####-####'),
    comment: faker.lorem.sentence(5),
}

let billing: IBilling = {
    billingfirstname: faker.name.firstName(),
    billinglastname: faker.name.lastName(),
    billingcompany: faker.company.bs(),
    billingphone: faker.phone.phoneNumber('372-####-####'),
    billingapartment: faker.address.streetAddress(),
    billingcity: faker.address.cityName(),
    billingregion: faker.address.state(),
    billingzip: faker.address.zipCode(),
    billingcountry: faker.address.country(),
}

let id: number
let CUSTOMER_INTERCEPT_URL: string = 'https://customers.katanamrp.com/api/customers'

describe('Customer - Functional Tests', () => {
    
  it('Incercept and validate backend call from frontend', () => {
    cy.intercept('POST', CUSTOMER_INTERCEPT_URL).as("InterceptCustomerData")   
    cy.login()     
    customerPage.goToAddNewCustomer()
    customerPage.fillCustomerData(customer.firstname, customer.lastname, customer.company, customer.email, customer.phone, customer.comment)
    customerPage.fillBillingDetails(billing.billingfirstname, billing.billinglastname, billing.billingcompany, billing.billingphone, billing.billingapartment, billing.billingcity, billing.billingregion, billing.billingzip, billing.billingcountry)
    cy.wait('@InterceptCustomerData')   
        .then(({response}) => {
            expect(response.statusCode).to.eq(200);
            cy.log("New Customer ID: "+ response.body.id)
            id = response.body.id
            expect(response.body.firstName).to.eq(customer.firstname)
            expect(response.body.name).to.eq(customer.firstname)
            expect(response.body.currency).to.eq('USD')
        })
  })
})