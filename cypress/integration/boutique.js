/// <reference types="Cypress" />
describe("m.trendyol.com", () => {

    beforeEach(() => {
        cy.viewport("iphone-6");
        cy.visit("m.trendyol.com");
    })

    it("Boutique list should be exist", () => {
        cy.get(".boutique").should("have.length", 15);
    });

    it("Boutique detail should be exist", () => {
        cy.get(".boutique").first().click();
        cy.get(".product").should("have.length", 20);
    });

    it("Product images and brand name should be exist", () => {
        cy.get(".boutique").first().click();
        cy.get(".product").first().click();

        cy.get(".gallery__image").should("have.length.greaterThan", 1);
        cy.get(".product_info__brand").should("exist");

    })
})