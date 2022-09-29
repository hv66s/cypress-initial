
///<reference types="cypress" />



describe("Infor Exam", () => {


    //Login and enter 
    /*USERNAME: infor_taas
    PASSWORD: infor_taas
    */
        it("Registration Wizard", () => {
            cy.visit("http://play.taas.infor.com/")
            cy.get('#username').type("infor_taas")
            cy.get('#password').type("infor_taas")
            cy.get('[type="button"]').click();
    
            //Verify title proxy
            cy.title().should('include', 'Infor TaaS Demo: MainMenu')
            // cy.get(".list-group .btn").contains("Registration Form").click()
    
        })
    
        //Iterate on List objects then selec Registration Form
        it("Select Registration Form", () => {
            cy.get(".list-group-item").each(($el, index, $list) => {
                cy.log("Index "+ index + " : " + $el.text())
                if($el.text().includes('Registration Form')){
                    cy.get("a[href*='reg-step1.html']").click()
                }
            })
    
            cy.get('#firstName').type("just tester")
            cy.get('#lastName').type("Doe")
            cy.get("a[href*='reg-step2.html']").click()
            cy.get('#email').type("thequickbrownfox@gmail.com")
            cy.get('#phone').type("123000111")
    
            cy.get("select").select(["Female"])
            cy.get("input#companyName").type("Infor")
            cy.get('#address1').type("test Address 1")
            cy.get('#address2').type("test address 2")
            cy.get('[type="button"]').click()
    
            cy.get('a[href*=step-3].')
        })
    
        // it("upload File", () => {
        //     cy.get('#popupBtn').click()
        //     cy.visit('http://play.taas.infor.com/file-attach-popup.html')
        //     cy.get('#file').selectFile('/Users/jaxethhugomahiya/Desktop/pythonPractice/pizza.py')
        //     cy.get('[type="button"]').click()
        //     cy.get('#count').click()
    
        // })
    
    
    })