describe('End to end tests', function () {
  it('End to end test', function() {
    cy.viewport(1440,1200)
    cy.visit('http://localhost:3001')
    cy.get('#create-customer-link').click()
    cy.get('#create-post-header').contains('Create Post')

    cy.get('#firstName').type('Superman')
    cy.get('#lastName').type('Cypress')
    cy.get('#email').type('super@man.com')
    cy.get('#company').type('The people')
    cy.get('#phone').type('1234356')
    cy.get('#create-customer').click()

    cy.get('#success-banner').contains('The form was successfully submitted!')

    cy.get('#customers-table').contains('td', 'Superman')
    cy.get('#customers-table').contains('td', 'Cypress')
  })
})