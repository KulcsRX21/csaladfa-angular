export interface Csaladtag {
  id: number;
  nev: string;
  szuletesnap: Date;
  nem: Nem;
  generacio: number;
  apa?: number;
  anya?: number;
  par?: number;
}

export enum Nem {
  Ferfi,
  No
}