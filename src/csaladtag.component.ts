import { NgIf, NgStyle } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';

import { Csaladtag, Nem } from './csaladtag.model';

@Component({
  selector: 'csf-csaladtag',
  standalone: true,
  imports: [NgIf, NgStyle],
  template: `
    <button [ngStyle]="{'background-color': isFerfi ? 'blue' : '#FF1493' }" class="csaladtag">
      {{ csaladtag.nev }} ({{ csaladtag.kor }})
    </button>
  `,
  styles: [
    `.csaladtag {
        color: white;
        margin: 10px;
        padding: 10px;
        border-style: none;
        border-radius: 20%;
        font-weight: bold;
      }
    `,
  ],
})
export class CsaladtagComponent {
  get isFerfi() {
    return this.csaladtag.nem == Nem.Ferfi;
  }

  @Input({ required: true }) csaladtag!: Csaladtag;
}
