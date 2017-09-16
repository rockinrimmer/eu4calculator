import { AppPage } from './leader-pips.po';

describe('eu4calculator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Leader Pip Calculator');
  });
});
