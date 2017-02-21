import { MonterailFePage } from './app.po';

describe('monterail-fe App', function() {
  let page: MonterailFePage;

  beforeEach(() => {
    page = new MonterailFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
