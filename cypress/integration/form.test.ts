describe('Form Component', () => {
   beforeEach(() => {
      cy.visit('http://localhost:3000')
   })

   it('should display all form validations when submitting an empty form', () => {
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Name is required')
      cy.contains('Password is required')
      cy.contains('Birthday is required')
      cy.contains('Tech preference is required')
   })

   it('should required a password of minimum 8 characters', () => {
      cy.get('[data-test=password]').type('1234567')
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Password must be minimum of 8 characters')
      cy.get('[data-test=password]').type('8')
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Password must be minimum of 8 characters').should(
         'not.exist'
      )
   })

   it('should clear all validations after given valid input', () => {
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Name is required')
      cy.contains('Password is required')
      cy.contains('Birthday is required')
      cy.contains('Tech preference is required')
      cy.get('[data-test=name]').type('Devon Reichardt')
      cy.get('[data-test=password]').type('password')
      cy.get('[data-test=dob]').type('02161988')
      cy.get('[data-test=both]').click()
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Name is required').should('not.exist')
      cy.contains('Password is required').should('not.exist')
      cy.contains('Birthday is required').should('not.exist')
      cy.contains('Tech preference is required').should('not.exist')
   })
})
