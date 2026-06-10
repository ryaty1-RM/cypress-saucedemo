describe('Ingenieria de Soft Tests - RENAP', () => {

    Cypress.on('uncaught:exception', () => false);

    it('llenar formulario RENAP', () => {

        cy.visit('https://portalinstitucional.renap.gob.gt:2053/registro', {
            failOnStatusCode: false
        });

        cy.wait(8000);

        // ===== TEXTOS =====
        cy.get('input').eq(0).type('Juan', { force: true }); // nombres
        cy.get('input').eq(1).type('Perez', { force: true }); // apellidos
        cy.get('input').eq(2).type('01/01/2000', { force: true }); // fecha

        cy.get('input').eq(3).type('1234567890101', { force: true }); // CUI
        cy.get('input').eq(4).type('Guatemala', { force: true }); // extendido por

        cy.get('input').eq(5).type('correo@gmail.com', { force: true }); // correo
        cy.get('input').eq(6).type('55554444', { force: true }); // telefono

        cy.get('input').eq(7).type('Zona 1 Guatemala', { force: true }); // domicilio

        cy.get('input').eq(8).type('Guatemalteco', { force: true }); // nacionalidad
        cy.get('input').eq(9).type('Ingeniero', { force: true }); // profesion

        cy.get('input').eq(10).type('1234567-8', { force: true }); // NIT

        cy.get('input').eq(11).type('Empresa S.A.', { force: true }); // entidad
        cy.get('input').eq(12).type('1234567-8', { force: true }); // NIT empresa
        cy.get('input').eq(13).type('Zona 10', { force: true }); // direccion

        // ===== SELECTS =====
        cy.get('select').eq(0).select(1, { force: true }); // departamento
        cy.get('select').eq(1).select(1, { force: true }); // municipio
        cy.get('select').eq(2).select(1, { force: true }); // estado civil
        cy.get('select').eq(3).select(1, { force: true }); // nacionalidad
        cy.get('select').eq(4).select(1, { force: true }); // profesion

        // ===== CHECKBOX =====
        cy.contains('PERSONA INDIVIDUAL').click({ force: true });
        cy.contains('PORTAL WEB').click({ force: true });

        // ===== TERMINOS =====
        cy.get('input[type="checkbox"]').last().check({ force: true });

    });

});