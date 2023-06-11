import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { CsaladfaService } from './csaladfa.service';
import { CsaladtagComponent } from './csaladtag.component';

@Component({
  selector: 'csf-generacio',
  standalone: true,
  imports: [CommonModule, AsyncPipe, CsaladtagComponent],
  template: `
    <div *ngIf="(csaladtagok$ | async) as csaladtagok; else loading" class="center">
      <csf-csaladtag *ngFor="let csaladtag of csaladtagok" [csaladtag]="csaladtag"/>
    </div>

    <ng-template #loading>
      Jönnek a családtagok...
    </ng-template>
  `,
  styles: [
    `.center {
        display: flex;
        justify-content: center;
    }`,
  ],
})
export class GeneracioComponent {
  @Input({ required: true }) generacio!: number;

  csaladtagok$ = inject(CsaladfaService).getCsaladtagokByGeneracio(
    this.generacio
  );
}
