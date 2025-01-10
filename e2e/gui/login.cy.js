describe('Login', () => {
  it('successfully', () => {
    cy.login(),
    cy.screenshot()
    cy.get('.qa-user-avatar').should('be.visible')
  })
})