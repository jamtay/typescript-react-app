describe('Component tests', function () {

  it('Component test with stubbed backend', () => {
    cy.server()
    cy.route('GET', '/api/v1/contact', 'fixture:contacts');
    cy.visit('http://localhost:3001')

    cy.get('#customers-table').contains('td', 'james')
    cy.get('#customers-table').contains('td', 'blah')
    //This will fail below
    cy.get('#customers-table').contains('td', 'taylor1234')
  })
})