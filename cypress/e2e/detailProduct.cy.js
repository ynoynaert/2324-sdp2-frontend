describe("products", () => {
  it("should show all products", () => {

    cy.intercept(
      "GET",
      "http://localhost:3333/api/products?page=1&max=20",
      { fixture: 'products.json' }
    );

    cy.intercept(
      "GET",
      "http://localhost:3333/api/products/1",
      { fixture: 'productsDetails.json' }
    );

    cy.visit("http://localhost:5173/products");
    cy.get("[data-cy=products]").should("have.length",1); 
    cy.get("[data-cy=products_button]").eq(0).click();
    cy.get("[data-cy=productDetail_img]").eq(0).should('have.attr', 'src', "https://www.rajapack.be/blog-be/wp-content/uploads/2022/04/Multifunctioneel-printpapier-RAJA_PNG.png");
    cy.get("[data-cy=productDetail_name]").eq(0).contains( "Paper");
    cy.get("[data-cy=productDetail_shortDescription]").eq(0).contains("High-quality printing paper");
    cy.get("[data-cy=productDetail_longDescription]").eq(0).contains("High-quality printing paper for daily office and printing use.");
    cy.get("[data-cy=productDetail_supplierName]").eq(0).contains("Supplier: John Doe");
    cy.get("[data-cy=productDetail_categorie]").eq(0).contains("Categorie: Office Supplies");
    cy.get("[data-cy=productDetail_price]").eq(0).contains("€ 15.99");

    cy.get("[data-cy=productDetail_back]").eq(0).click();
    cy.get("h1").contains("Products"); 

  });
});


