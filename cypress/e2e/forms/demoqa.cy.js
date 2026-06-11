describe('DemoQA - Formulario de Registro', () => {
  
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('Debe llenar y enviar el formulario completo', () => {
    cy.get('#firstName').type('Ramiro')
    cy.get('#lastName').type('Yat')
    cy.get('#userEmail').type('ryaty1@miumg.edu.gt')
    cy.get('label[for="gender-radio-1"]').click()
    cy.get('#userNumber').type('50212345678')
    cy.get('#subjectsInput').type('Computer Science{enter}')
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('#currentAddress').type('Cobán, Alta Verapaz, Guatemala')
    cy.get('#submit').click()
    cy.get('#example-modal-sizes-title-lg').should('be.visible')
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  })

})