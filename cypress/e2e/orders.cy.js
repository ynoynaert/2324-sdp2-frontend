describe("orders", () => {

    it("should show all orders from the logged in client", () => {
        
        cy.intercept(
            "GET",
            "http://localhost:3333/api/orders",
            { fixture: 'orders.json' }
          );
        
        cy.login("account@client.com", "Password");
        cy.visit("http://localhost:5173/orders");
        cy.get("[data-cy=order-row]").should("have.length", 1);
        cy.get("[data-cy=orderid]").eq(0).contains( "1");
        cy.get("[data-cy=ordercreate]").eq(0).contains("2022-04-01");
        cy.get("[data-cy=orderstatus]").eq(0).contains("Delivered");
    })

    // TODO test da de orders van de supplier getoond worden

    it("should show an error when the orders can't be fetched", () => {
        cy.intercept(
            "GET",
            "http://localhost:3333/api/orders",
            { statusCode: 500 }
          );

        cy.login("account@client.com", "Password");
        cy.visit("http://localhost:5173/orders");
        cy.get("[data-cy=error-message]").should("be.visible");
    })

    it("should show a loader on a very slow response", () => {
        cy.intercept(
            "http://localhost:3333/api/orders",
            (req) => {
              req.on("response", (res) => {
                res.setDelay(1000);
              });
            }
          ).as("slowResponse");

        cy.login("account@client.com", "Password");
        cy.visit("http://localhost:5173/orders");
        cy.wait("@slowResponse");
        cy.get("[data-cy=loader]").should("not.exist");
    })
});