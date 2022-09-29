/// <reference types="cypress" />



describe("Handling file upload", () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({force: true})
    })


    it("Select File for upload", () => {
        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile({
                fileContent,
                fileName: "laptop.png",
                mimeType: "image-png"
            },{
                uploadType: "input"
            })
        })
        cy.get("#submit-button").click()
    })


    it("No Selected File", () => {
        cy.get("#submit-button").click()
    })

})
