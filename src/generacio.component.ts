import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CsaladfaService } from './csaladfa.service';
import { CsaladtagComponent } from './csaladtag.component';
import { Csaladtag } from './csaladtag.model';

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
  ]
})
export class GeneracioComponent implements OnInit {  
  @Input({ required: true }) generacio!: number;

  csaladtagok$!: Observable<Csaladtag[]>;

  constructor(private csaladfaService: CsaladfaService) {}

  ngOnInit() {
    this.csaladtagok$ = this.csaladfaService.getCsaladtagokByGeneracio(this.generacio);
  }
}
