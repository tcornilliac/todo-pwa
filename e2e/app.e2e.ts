import { TodoPwaPage } from './app.po';

describe('todo-pwa App', function() {
  let page: TodoPwaPage;

  beforeEach(() => {
    page = new TodoPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todo-pwa works!');
  });
});
