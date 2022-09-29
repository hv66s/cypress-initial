/// <reference types="cypress" />


describe("Auto complete", () => {
    it("Select specific produc via autocomplete list",() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get("[id='myInput']").type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) =>{
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if(prod === productToSelect){
                //$el.click()
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    })


})