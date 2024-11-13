Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://app.easyjur.com');
    cy.get('#loginField').type(username);
    cy.get('#passwordField').type(password);
    cy.get('#loginButton').click();
  });
  