describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display default message', () => {
    for ( const selector of ['default', 'directive', 'autoDefault', 'dark', 'openViewer'] ){
      cy.getByCy(selector).click();
      cy.getByCy('closeModal').click();
      // cy.get('ion-modal').invoke('remove');
    }
  });
});
