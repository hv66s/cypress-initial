/// <reference types="cypress" />

describe("Radio", () => {
    it("Selecting Radio Button", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check() 


        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
    });
})