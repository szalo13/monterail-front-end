import { MonterailFrontEndPage } from './app.po';

describe('monterail-front-end App', function() {
  let page: MonterailFrontEndPage;

  beforeEach(() => {
    page = new MonterailFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
