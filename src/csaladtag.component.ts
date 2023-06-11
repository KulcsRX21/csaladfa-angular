import { Component, Input } from "@angular/core";

import { Csaladtag } from "./csaladtag.model";

@Component({
  selector: 'csf-csaladtag',
  standalone: true,
  template: `
    <button>{{ csaladtag.nev }}</button>
  `,
  styles: [
    `.center {
        display: flex;
        justify-content: center;
    }`
  ]
})
export class CsaladtagComponent {
  @Input({required: true}) csaladtag!: Csaladtag;
}