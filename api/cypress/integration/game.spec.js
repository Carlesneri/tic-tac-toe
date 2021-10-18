import { PORT } from '../../config.js'

describe('/', () => {
  it('renders', () => {
    cy.visit(`http://localhost:${PORT}`)
    cy.contains('tic-tac-toe')
  })
  it('game starts when click start', () => {
    cy.visit(`http://localhost:${PORT}`)
    cy.get('.box').should(el => {
      expect(el).to.have.text('')
    })
    cy.contains('start').click()
    cy.get('.message').should('be.visible')
  })
})
