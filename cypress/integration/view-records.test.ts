import { awsGateway } from '../constants'

describe('View Records Success', () => {
   beforeEach(() => {
      cy.intercept('GET', `${awsGateway}/records`, {
         fixture: 'records.json',
         delay: 2000,
      }).as('getRecords')
      cy.visit('http://localhost:3000')
   })

   it('should display loading spinner then stubbed server data', () => {
      cy.get('[data-test=viewRecordsTab]').click()
      cy.get('[data-test=spinner]').should('be.visible')
      cy.wait(['@getRecords']).then(() => {
         cy.contains('Testy McTesterson')
      })
   })
})

describe('View Records Failure', () => {
   beforeEach(() => {
      cy.intercept('GET', `${awsGateway}/records`, {
         statusCode: 500,
         delay: 2000,
      }).as('getRecords')
      cy.visit('http://localhost:3000')
   })

   it('should display loading spinner then error message', () => {
      cy.get('[data-test=viewRecordsTab]').click()
      cy.get('[data-test=spinner]').should('be.visible')
      cy.wait(['@getRecords']).then(() => {
         cy.contains('Error fetching records')
         cy.contains('No Records Found...')
      })
   })
})
