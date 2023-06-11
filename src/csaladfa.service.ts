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
    szuletesnap: new Date("1969-06-21"),
    nem: Nem.Ferfi,
    generacio: 0,
    par: 2,
  },
  {
    id: 2,
    nev: 'Anya',
    szuletesnap: new Date("1974-11-29"),
    nem: Nem.No,
    generacio: 0,
    par: 1,
  },
  {
    id: 3,
    nev: 'Duna',
    szuletesnap: new Date("1995-02-21"),
    nem: Nem.No,
    generacio: 1,
    apa: 1,
    anya: 2,
  },
  {
    id: 4,
    nev: 'Ismael',
    szuletesnap: new Date("1998-01-04"),
    nem: Nem.Ferfi,
    generacio: 1,
    apa: 1,
    anya: 2,
  },
  {
    id: 5,
    nev: 'Abianna',
    szuletesnap: new Date("2001-04-09"),
    nem: Nem.No,
    generacio: 1,
    apa: 1,
    anya: 2,
    par: 6
  },
  {
    id: 6,
    nev: 'Kris',
    szuletesnap: new Date("1996-12-21"),
    nem: Nem.Ferfi,
    generacio: 1,
    par: 5
  },
];
