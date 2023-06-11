import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Csaladtag, Nem } from './csaladtag.model';

@Injectable({ providedIn: 'root' })
export class CsaladfaService {
  getCsaladtagokByGeneracio(generacio: number): Observable<Csaladtag[]> {
    return of(csaladtagok.filter((cs: Csaladtag) => cs.generacio == generacio));
  }

  hasGeneracio(generacio: number): Observable<boolean> {
    return of(csaladtagok.some((cs: Csaladtag) => cs.generacio == generacio));
  }
}

const csaladtagok: Csaladtag[] = [
  {
    id: 1,
    nev: 'Apa',
    kor: 40,
    nem: Nem.Ferfi,
    generacio: 0,
    apa: 0,
    anya: 0,
    par: 2,
  },
  {
    id: 2,
    nev: 'Anya',
    kor: 37,
    nem: Nem.No,
    generacio: 0,
    apa: 0,
    anya: 0,
    par: 1,
  },
  {
    id: 3,
    nev: 'Gyerek 1',
    kor: 12,
    nem: Nem.Ferfi,
    generacio: 1,
    apa: 1,
    anya: 2,
  },
  {
    id: 4,
    nev: 'Gyerek 2',
    kor: 7,
    nem: Nem.No,
    generacio: 1,
    apa: 1,
    anya: 2,
  },
];
