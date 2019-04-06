///<reference types="Cypress" />


context('Window', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/')
    })

    it('Visibility of header and films', () => {
        cy.get('.header').should('be.visible');
        cy.contains('Films');
    });

    it('Get Terminator', () => {
      cy.get('#mainSearch').focus().type('Terminator');
      cy.get('.mainSearchButton').click();
      cy.get('.search_Item')
      .should(($earch_Item) => {
      expect($earch_Item).to.have.length(5)})
  });

});