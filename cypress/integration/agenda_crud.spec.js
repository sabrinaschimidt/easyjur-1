describe('Agenda Module - CRUD Operations', () => {
    beforeEach(() => {
      cy.login('vaga.qa.teste.pratico@easyjur.com', 'QA.teste123');
      cy.visit('https://app.easyjur.com/sgr/index.php?pg=agenda_calendar');
    });
  
    it('Should create a new event', () => {
      cy.get('#novoEventoButton').click();
      cy.get('#titulo').type('Reunião de Planejamento');
      cy.get('#data').type('2024-11-20');
      cy.get('#descricao').type('Discussão das próximas etapas do projeto');
      cy.get('#salvarButton').click();
      cy.contains('Evento criado com sucesso').should('be.visible');
    });
  
    it('Should read and verify the created event', () => {
      cy.contains('Reunião de Planejamento').click();
      cy.get('#titulo').should('have.value', 'Reunião de Planejamento');
    });
  
    it('Should update the event details', () => {
      cy.contains('Reunião de Planejamento').click();
      cy.get('#titulo').clear().type('Reunião Atualizada');
      cy.get('#salvarButton').click();
      cy.contains('Evento atualizado com sucesso').should('be.visible');
    });
  
    it('Should delete the event', () => {
      cy.contains('Reunião Atualizada').click();
      cy.get('#deletarButton').click();
      cy.contains('Evento removido com sucesso').should('be.visible');
    });
  });
  