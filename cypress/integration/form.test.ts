import { awsGateway, timezoneAPI } from '../constants'

describe('Form Component Success', () => {
   beforeEach(() => {
      cy.intercept('GET', `${awsGateway}/records`, {
         fixture: 'records.json',
         delay: 2500,
      }).as('getRecords')
      cy.intercept('POST', `${awsGateway}/record`, {
         fixture: 'create-record.json',
         delay: 2500,
      }).as('createRecord')
      cy.intercept('GET', `${timezoneAPI}/America`, {
         fixture: '/timezones/america.json',
         delay: 2500,
      }).as('getAmericanTimezones')
      cy.visit('http://localhost:3000')
   })

   it('should display fetching timezones when query is pending, then display first timezone in array', () => {
      cy.contains('Fetching Timezones')
      cy.wait('@getAmericanTimezones').then(() => {
         cy.contains('America/Adak')
      })
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

   it('should clear all validations after given valid input, be able to submit, be routed to view records and display success message', () => {
      cy.get('[data-test=submit-btn]').click()
      cy.contains('Name is required')
      cy.contains('Password is required')
      cy.contains('Birthday is required')
      cy.contains('Tech preference is required')
      cy.get('[data-test=name]').type('Testy McTesterson')
      cy.contains('Name is required').should('not.exist')
      cy.get('[data-test=password]').type('password')
      cy.contains('Password is required').should('not.exist')
      cy.get('[data-test=dob]').type('02161988')
      cy.contains('Birthday is required').should('not.exist')
      cy.get('[data-test=both]').click()
      cy.contains('Tech preference is required').should('not.exist')
      cy.get('[data-test=progress-bar]').should('not.exist')
      cy.get('[data-test=submit-btn]').click()
      cy.get('[data-test=progress-bar]').should('be.visible')
      cy.wait(['@createRecord']).then(() => {
         cy.get('[data-test=spinner]').should('be.visible')
         cy.wait(['@getRecords']).then(() => {
            cy.contains('Submission Successful')
            cy.contains('Testy McTesterson')
         })
      })
   })
})

describe('Form Component Failure', () => {
   beforeEach(() => {
      cy.intercept('POST', `${awsGateway}/record`, {
         delay: 2500,
         statusCode: 500,
      }).as('createRecord')
      cy.intercept('GET', `${timezoneAPI}`, {
         fixture: '/timezones/america.json',
         delay: 2000,
      })
      cy.visit('http://localhost:3000')
   })

   it('should display failure message on network failure and stay on form tab', () => {
      cy.get('[data-test=name]').type('Testy McTesterson')
      cy.get('[data-test=password]').type('password')
      cy.get('[data-test=dob]').type('02161988')
      cy.get('[data-test=both]').click()
      cy.get('[data-test=submit-btn]').click()

      cy.wait('@createRecord').then(() => {
         cy.contains('Submission Failed')
         cy.contains('Create your own pizza')
      })
   })
})
