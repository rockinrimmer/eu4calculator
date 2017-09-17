import { AppPage } from './leader-pips.po';

describe('eu4calculator Leader Pips', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Leader Pip Calculator');
  });
});
