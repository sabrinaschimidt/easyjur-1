describe('Login Functionality', () => {
    it('Should login successfully with valid credentials', () => {
      cy.login('vaga.qa.teste.pratico@easyjur.com', 'QA.teste123');
      cy.url().should('include', '/dashboard'); // Verifica se o redirecionamento foi bem-sucedido
    });
  
    it('Should display error with invalid credentials', () => {
      cy.login('usuario.invalido@easyjur.com', 'senhaErrada');
      cy.contains('Credenciais inválidas').should('be.visible'); // Verifica a mensagem de erro
    });
  });
  