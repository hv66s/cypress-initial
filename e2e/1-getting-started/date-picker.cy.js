/// <reference types="Cypress" />
describe("Handling Date Picker", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });

    it.only("Select Date", () => {
        cy.get('#datepicker').click()

        var date = new Date()
        date.setDate(date.getDate() + 31)

        var fYear = date.getFullYear()
        var fMonth = date.toLocaleString("default", {month: "long"})
        var fDay = date.getDate()

        cy.log("Future year to select: " + fYear);
        cy.log("Future month to select: " + fMonth);
        cy.log("Future day to select: " + fDay);

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(fYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(fMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectDay(){
            cy.get('[class="day"]').contains(fDay).click()
        }


        selectMonthAndYear()
        selectDay()
    });   
  });
  