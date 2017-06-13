import { AngularMaterialShellPage } from './app.po';

describe('angular-material-shell App', () => {
  let page: AngularMaterialShellPage;

  beforeEach(() => {
    page = new AngularMaterialShellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('condovation works!');
  });
});
