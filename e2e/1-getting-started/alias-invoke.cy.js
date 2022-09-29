/// <reference types="cypress" />

describe("Alias and invoke", () => {
    it("Validate", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

      
    });
  
  });
  