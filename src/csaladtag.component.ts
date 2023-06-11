import { NgIf } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';

import { Csaladtag } from './csaladtag.model';

@Component({
  selector: 'csf-csaladtag',
  standalone: true,
  imports: [NgIf],
  template: `
    <button>
      {{ csaladtag.nev }} {{ nagyNev() }}
    </button>
  `,
  styles: [
    `.center {
        display: flex;
        justify-content: center;
    }`,
  ],
})
export class CsaladtagComponent {
  get csaladtag() { return this._csaladtag()! }
  
  private _csaladtag = signal<Csaladtag | undefined>(undefined);
  @Input({ required: true, alias: 'csaladtag' }) set csaladtagInput(
    value: Csaladtag
  ) {
    this._csaladtag.set(value);
  }

  nagyNev = computed(() => this._csaladtag()!.nev.toUpperCase());
}
