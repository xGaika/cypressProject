/// <reference types="Cypress">

// describe('Mobile phone replinishment', () => {
//
//     context('Replenishment less than the allowed amount', () => {
//         it('Show error: Minimum amount of the replenishment 1 UAH', () => {
//             //some test
//         });
//     });
// });

// it('By ID', () => {
//     cy.visit('https://facebook.com');
//     cy.get('#email');
// });
//
// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell');
//     cy.get('.DocSearch');
// });
//
// it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell');
//     cy.get('nav');
// });
//
// it('By Tag Value', () => {
//     cy.visit('https://facebook.com');
//     cy.get('[name="pass"]');
// });
//
// it('By Different Tag', () => {
//     cy.visit('https://facebook.com');
//     cy.get('[someTag="pass"][anotherTag="anotherValue"]');
// });
//
// it('By Different Types', () => {
//     cy.visit('https://facebook.com');
//     cy.get('button[type="button"][anotherTag="anotherValue"]');
// });
//
// it('By Contains Name', () => {
//     cy.visit('https://facebook.com');
//     cy.get('*[className^="card"]');
// });

// https://next.privat24.ua/

it('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700);
    cy.visit('https://next.privat24.ua/deposit/open');
    cy.get('tbody').find('td').eq(8);
});

//some changes