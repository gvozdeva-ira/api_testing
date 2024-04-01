// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    const BODY_LOGIN = JSON.parse(`{"email":"${email}","password":"${password}","namespace":"flashscore","project":1}`);
        cy.request({
            method: 'POST', url: '/login', body: BODY_LOGIN
        }).then((response) => {
            //Expecting the response status code to be 200
            expect(response.status).to.eq(200);
            expect(response.body.r).to.eq("XY1");
            const ID = response.body.id;
            const HASH = response.body.hash;
            Cypress.env('ID', ID);
            Cypress.env('HASH', HASH);
            //console.log(Cypress.env('ID'));
        })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })