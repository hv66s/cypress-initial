class homePageObject{
    visitHomepage(){
        cy.visit("https://automationteststore.com/")
    }

    clickContactUs(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default homePageObject;