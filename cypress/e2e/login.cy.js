describe("login", () => {

  
  it("should login an admin", () => { 
    cy.login('admin@delaware.com', 'Password');
    // TODO verander deze test naar "should login an admin and show the admin dashboard"
    cy.get('[data-cy=hello-user]').contains('HELLO ADMIN D.');
  });

  it("should logout", () => { 
    cy.login('admin@delaware.com', 'Password');
    cy.logout(); 
    cy.get('[data-cy=logout-message]').should('be.visible');
  });

  it("should show an error when the user uses the wrong credentials", () => {
    cy.login('admin@delaware.com', 'Passwordddd');
    cy.get('[data-cy=error-message]').should('be.visible');
  });

  it("should login a client and show the home page", () => { 
    cy.login('account@client.com', 'Password');
    cy.get('[data-cy=welcome-home]').should('be.visible');
    cy.get('[data-cy=hello-user]').contains('HELLO ANKE H.');
  });

  it("should login a supplier and show the home page", () => { 
    cy.login('account@supplier.com', 'Password');
    cy.get('[data-cy=welcome-home]').should('be.visible');
    cy.get('[data-cy=hello-user]').contains('HELLO ANKE H.');
  });
});


