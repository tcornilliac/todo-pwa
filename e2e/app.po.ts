export class TodoPwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-pwa-app h1')).getText();
  }
}
