
import homePageObject from '../../support/pageObject/homePage_PO';
import homePage_PO from '../../support/pageObject/homePage_PO'
/// <reference types="cypress" />

describe("Iterate over elements", () => {

    before(function(){
        cy.fixture("product").then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach(function() {
      const home = new homePageObject()
      home.visitHomepage()
      home.clickContactUs()
      
    })

    it("Log information of all hair care products", () => {
      cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
          cy.log("Index: " + index + " : " + $el.text())
      });
    });
    it.only("Add specific product to basket", () => {
    //   cy.selectProduct('Curls to straight Shampoo');
    globalThis.data.productName.forEach(function(element){
        cy.addProductToBasket(element)
    })
    });
  
    it("Add another specific product to basket", () => {
    //   cy.selectProduct('Seaweed Conditioner');
    });
  
    it("Add another specific product to basket 2", () => {
    //   cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
  });
  