/// <reference types="cypress" />


describe("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)", () => {
    it("Select and uncheck Checkboxes",() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('notbe.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('#checkboxes > :nth-child(5) > input').as('option-5')
        cy.get('@option-1').uncheck()
        cy.get('@option-1').uncheck().should('not.be.checked')
        cy.get('@option-5').uncheck()
        cy.get('@option-5').uncheck().should('not.be.checked')
    })

    it("Select Multiple Checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    })
})