/// <reference types="cypress" />

describe('Should Assertion', function(){
    it('visit automatin site', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','practice')
    })


    it('Should check the title on the page', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.page-title').should('be.visible')

    })

    it('Should check length of an element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('.search-input').should('have.length', 2) 
    })

    it('Should assert with text of an element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#openwindow').should('have.text','Open Window')
    })
    it('test on open tab element', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        // cy.get('#opentab').should('have.attr','target', '_blank')
        cy.get('#opentab').should('have.attr','href') .and ('equal', 'https://www.youtube.com/@CodenboxAutomationLab')
    })

    it('Should check radio button1', function(){ 
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('input[value = "radio1"]').check().should('be.checked')
        cy.get('input[value = "radio2"]').should('not.be.checked')

    })

    it('should select selenium option', function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get(' #dropdown-class-example').select('Selenium').should('have.value', 'option1')
        
    })
})