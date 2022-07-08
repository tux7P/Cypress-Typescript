### Solution Contains

✅ POM, class structure, constructor for selectors, re-use of repetitive methods

✅ Tests: 10  

    - UI
        - Successfull login & logout
        - Unsuccessfull login with incorrect email
        - Unsuccessfull login with incorrect password
        - Incercept and validate backend call from frontend
        - Stubbing a response body and validate the response
        - Stubbing a response status without touching server and validate the response
    
    - API
        - POST: Create customer record
        - GET: List customer records
        - PATCH: Update customer record
        - DELETE: Delete customer record
✅ Proper validation

✅ Use of intercepts - To validate backend calls through UI

✅ Github Actions setup on push to master branch

✅ Run tests in headless mode: ```yarn cypress:headless```

Aditionally:

- Implemented cypress commands

- Implemented aliases to wait for intercepts

- Integrated cypress dashboard for reporting

- Gropped API & UI test spec to run separately through node scripts

- Followed conventional commit style

### To Run Tests

**To Run Cypress E2E Tests Locally**

```bash
# Install Dependencies
yarn

# Run all the tests in headless mode
yarn cypress:headless

# Run the tests in Cypress UI
yarn cypress:open

# Run UI Tests
yarn cypress:ui

# Run API Tests
yarn cypress:api

```


### Important Links

1. Page Objects - [Link](https://github.com/tux7P/Cypress-Typescript/tree/main/cypress/support/PageObjects)
2. UI tests - [Link](https://github.com/tux7P/Cypress-Typescript/tree/main/cypress/tests/ui)
3. API tests - [Link](https://github.com/tux7P/Cypress-Typescript/tree/main/cypress/tests/api)
4. Cypress commands - [Link](https://github.com/tux7P/Cypress-Typescript/blob/main/cypress/support/commands.ts)
5. Intercepts & Alias - [Link](https://github.com/tux7P/Cypress-Typescript/blob/main/cypress/tests/ui/customer.cy.ts)
6. Github Actions workflow - [Link](https://github.com/tux7P/Cypress-Typescript/blob/main/.github/workflows/main.yml)
7. ```package.json``` - [Link](https://github.com/tux7P/Cypress-Typescript/blob/main/package.json)
8. ```cypress.config.js``` - [Link](https://github.com/tux7P/Cypress-Typescript/blob/main/cypress.config.js)
8. Cypress Dashboard Report - [Link](https://dashboard.cypress.io/projects/msje8x)

### Directory Structure
```bash
.
├── README.md
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── support
│   │   ├── Interfaces
│   │   │   ├── IBilling.ts
│   │   │   ├── ICustomer.ts
│   │   │   └── ILogin.ts
│   │   ├── PageObjects
│   │   │   ├── CustomerPage.ts
│   │   │   └── LoginPage.ts
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── index.d.ts
│   ├── tests
│   │   ├── api
│   │   │   └── customer_api.cy.ts
│   │   └── ui
│   │       ├── customer.cy.ts
│   │       └── login.cy.ts
│   └── tsconfig.json
├── cypress.config.js
├── cypress.env.json
├── package.json
└── yarn.lock

8 directories, 18 files

```

