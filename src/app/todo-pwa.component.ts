import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

@Component({
  moduleId: module.id,
  selector: 'todo-pwa-app',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: [],
  directives: [APP_SHELL_DIRECTIVES]
})
export class TodoPwaAppComponent {
  title = 'todo-pwa works!';
}
