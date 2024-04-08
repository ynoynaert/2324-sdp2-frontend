describe("products", () => {
  it("should show all products", () => {

    cy.intercept(
      "GET",
      "http://localhost:3333/api/products?page=1&max=20",
      { fixture: 'products.json' }
    );

    cy.visit("http://localhost:5173/products");
    cy.get("[data-cy=products]").should("have.length",1); 
    cy.get("[data-cy=products_name]").eq(0).contains( "Paper");
    cy.get("[data-cy=products_img]").eq(0).should('have.attr', 'src', "https://www.rajapack.be/blog-be/wp-content/uploads/2022/04/Multifunctioneel-printpapier-RAJA_PNG.png");
    cy.get("[data-cy=products_shoprtDescription]").eq(0).contains("High-quality printing paper");
    cy.get("[data-cy=products_price]").eq(0).contains("€ 15.99");
  });

  it("should show a loader on a very slow response", () => {
    
    cy.intercept(
      "http://localhost:3333/api/products?page=1&max=20",
      (req) => {
        req.on("response", (res) => {
          res.setDelay(1000);
        });
      }
    ).as("slowResponse");
    cy.visit("http://localhost:5173/products");
    cy.get("[data-cy=loader]").should("be.visible");
    cy.wait("@slowResponse");
    cy.get("[data-cy=loader]").should("not.exist");

  });
  //TODO filter testen, bv product with chair in theire name

});


