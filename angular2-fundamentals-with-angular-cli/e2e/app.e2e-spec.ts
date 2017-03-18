import { Angular2FundamentalsWithAngularCliPage } from './app.po';

describe('angular2-fundamentals-with-angular-cli App', () => {
  let page: Angular2FundamentalsWithAngularCliPage;

  beforeEach(() => {
    page = new Angular2FundamentalsWithAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
