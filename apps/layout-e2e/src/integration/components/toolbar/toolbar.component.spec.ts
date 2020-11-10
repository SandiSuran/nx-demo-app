describe('layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolbarcomponent--primary&knob-user'));

  it('should render the component', () => {
    cy.get('app-toolbar').should('exist');
  });
});
