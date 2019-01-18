import { Component } from '@angular/core';

@Component({
  selector: 'hf-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <hf-house-list></hf-house-list>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'immoscraper';
}
