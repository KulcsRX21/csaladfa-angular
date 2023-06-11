import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="center">
      <h1>Az én családfám</h1>
    </div>
  `,
  styles: [
    `.center {
        display: flex;
        justify-content: center;
    }`
  ]
})
export class App {}

bootstrapApplication(App);
