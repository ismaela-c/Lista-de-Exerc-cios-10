describe('BlazeDemo - Fluxo Completo de Compra', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Compra da passagem com sucesso', () => {
    
    // Página inicial
    cy.get('h1')
        .should('have.text', 'Welcome to the Simple Travel Agency!')

    cy.get('select[name="fromPort"]')
        .select('São Paolo')

    cy.get('select[name="toPort"]')
        .select('London')

    cy.get('input[type="submit"]')
        .click()

    //Validando a quantidade de elementos da página de voos
    cy.get('h3')
        .should('have.text', 'Flights from São Paolo to London: ')
    
        cy.get('tbody > tr').should('have.length', 5)


    //Escolhendo os Voos
    cy.contains('td', 'Aer Lingus')
        .parent('tr')
        .find('input[value="Choose This Flight"]')
        .click()
    
    //Preenchemento dos campos
    cy.get('h2')
        .should('have.text','Your flight from TLV to SFO has been reserved.')
      
    cy.get('[name="inputName"]')
        .type('Maria Santos')

    cy.get('[name="address"]')
        .type('Rua Zero')

    cy.get('[name="city"]')
        .type('Recife')
    
    cy.get('[name="state"]')
        .type('Pernambuco')
    
    cy.get('[name="zipCode"]')
        .type('12345')

    cy.get('select[name="cardType"]')
         .select('American Express')
    
    cy.get('[name="creditCardNumber"]')
        .type('1234 5678 9876 1234')

    cy.get('[name="creditCardMonth"]')
        .clear()
        .type('01')
    
    cy.get('[name="creditCardYear"]')
        .clear()
        .type('2026')
    
    cy.get('[name="nameOnCard"]')
        .type('Maria S Santos')
    
    //Finalizando a compra
    cy.get('input[value="Purchase Flight"]')
        .click()
    
     cy.get('h1')
        .should('have.text','Thank you for your purchase today!')
  
  })
})