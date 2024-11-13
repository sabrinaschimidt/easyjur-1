describe('People Module - CRUD Operations', () => {
    beforeEach(() => {
      cy.login('vaga.qa.teste.pratico@easyjur.com', 'QA.teste123');
      cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista');
    });
  
    it('Should create a new person', () => {
      cy.get('#novoPessoaButton').click();
      cy.get('#nome').type('João da Silva');
      cy.get('#email').type('joao.silva@example.com');
      cy.get('#salvarButton').click();
      cy.contains('Pessoa criada com sucesso').should('be.visible');
    });
  
    it('Should read and verify the created person', () => {
      cy.contains('João da Silva').click();
      cy.get('#nome').should('have.value', 'João da Silva');
    });
  
    it('Should update the person details', () => {
      cy.contains('João da Silva').click();
      cy.get('#nome').clear().type('João Silva Atualizado');
      cy.get('#salvarButton').click();
      cy.contains('Pessoa atualizada com sucesso').should('be.visible');
    });
  
    it('Should delete the person', () => {
      cy.contains('João Silva Atualizado').click();
      cy.get('#deletarButton').click();
      cy.contains('Pessoa removida com sucesso').should('be.visible');
    });
  });
  