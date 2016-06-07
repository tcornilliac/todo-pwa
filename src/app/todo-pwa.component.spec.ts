import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoPwaAppComponent } from '../app/todo-pwa.component';

beforeEachProviders(() => [TodoPwaAppComponent]);

describe('App: TodoPwa', () => {
  it('should create the app',
      inject([TodoPwaAppComponent], (app: TodoPwaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'todo-pwa works!\'',
      inject([TodoPwaAppComponent], (app: TodoPwaAppComponent) => {
    expect(app.title).toEqual('todo-pwa works!');
  }));
});
