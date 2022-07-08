import { faker } from '@faker-js/faker';

describe('Customer API', () => {
    let id: string = ''
    let access_token: string = Cypress.env('access_token')
    let random_name: string = faker.name.findName()
    let random_email: string = faker.internet.email()
    let random_last_name: string = faker.name.lastName()
    let random_company: string = faker.company.bs()
    let random_phone: string = faker.phone.phoneNumber('372-####-####')
    let random_currency: string = 'USD'
    let random_comment: string = faker.lorem.sentence(5)
    let CUSTOMER_API: string = 'https://api.katanamrp.com/v1/customers/'
       
    it('Create a customer', () => {
        cy.request({
            method: 'POST',
            url: CUSTOMER_API,
            headers: {
                'Authorization' : 'Bearer ' + access_token
            },
            body: {
                name: random_name,
                first_name: name,
                last_name: random_last_name,
                company: random_company,
                email: random_email,
                phone: random_phone,
                currency: random_currency,
                comment: random_comment
            },
        }).then(response => {
            id = response.body.id;
            cy.log(response.body)
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(random_name);
            expect(response.body.first_name).to.eq(name);
            expect(response.body.last_name).to.eq(random_last_name);
            expect(response.body.company).to.eq(random_company);
            expect(response.body.email).to.eq(random_email);
            expect(response.body.phone).to.eq(random_phone);
            expect(response.body.currency).to.eq(random_currency);
            expect(response.body.comment).to.eq(random_comment);
            cy.log("Created customer id " + id);
        })
    })
    
    it('List all customer', () => {
        cy.request({
            method: 'GET',
            url: CUSTOMER_API,
            headers: {
                'Authorization' : 'Bearer ' + access_token
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0].id).to.eq(id);
            expect(response.body.data[0].name).to.eq(random_name);
            expect(response.body.data[0].first_name).to.eq(name);
            expect(response.body.data[0].last_name).to.eq(random_last_name);
            expect(response.body.data[0].company).to.eq(random_company);
            expect(response.body.data[0].email).to.eq(random_email);
            expect(response.body.data[0].phone).to.eq(random_phone);
            expect(response.body.data[0].currency).to.eq(random_currency);
            expect(response.body.data[0].comment).to.eq(random_comment);
        })
    })
    
    it('Update a customer', () => {
        cy.request({
            method: 'PATCH',
            url: CUSTOMER_API+id,
            headers: {
                'Authorization' : 'Bearer ' + access_token
            },
            body: {
                email: random_email,
                company: random_company,
                phone: random_phone
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.email).to.eq(random_email);
            expect(response.body.company).to.eq(random_company);
            expect(response.body.phone).to.eq(random_phone);
            cy.log("Updated customer id " + id);
            cy.log(response.body);
        })
    })
    
    it('Delete a customer', () => {
        cy.request({
            method: 'DELETE',
            url: CUSTOMER_API+id,
            headers: {
                'Authorization' : 'Bearer ' + access_token
            },
        }).then(response => {
            expect(response.status).to.eq(204);
            expect(response.body).to.eq("");
            cy.log("Deleted customer id " + id);
        })
    })
})