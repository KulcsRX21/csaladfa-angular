import { NgIf, NgStyle } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';

import { Csaladtag, Nem } from './csaladtag.model';
import { IsFerfiPipe } from './isFerfi.pipe';

@Component({
  selector: 'csf-csaladtag',
  standalone: true,
  imports: [NgIf, NgStyle, IsFerfiPipe],
  template: `
    <button [ngStyle]="{'background-color': (csaladtag.nem | isFerfi) ? 'blue' : '#FF1493' }" class="csaladtag">
      {{ csaladtag.nev }} ({{ csaladtag.kor }})
    </button>
  `,
  styles: [
    `.csaladtag {
        color: white;
        margin: 10px;
        padding: 10px;
        border-style: none;
        border-radius: 10%;
        font-weight: bold;
      }
    `,
  ],
})
export class CsaladtagComponent {
  @Input({ required: true }) csaladtag!: Csaladtag;
}
