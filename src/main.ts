import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { GeneracioComponent } from './generacio.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [GeneracioComponent],
  template: `
    <div class="center">
      <h1>Az én családfám</h1>
    </div>
    <csf-generacio [generacio]="0"/>
  `,
  styles: [
    `.center {
        display: flex;
        justify-content: center;
    }`,
  ]
})
export class App {}

bootstrapApplication(App);
