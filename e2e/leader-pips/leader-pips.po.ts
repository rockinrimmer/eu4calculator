import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/leader-pip-calculator');
  }

  getParagraphText() {
    return element(by.css('app-pip-calculator h1')).getText();
  }
}
