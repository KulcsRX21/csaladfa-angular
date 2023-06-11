import { Pipe, PipeTransform } from "@angular/core";

import { Nem } from "./csaladtag.model";

@Pipe({ name: 'isFerfi', standalone: true })
export class IsFerfiPipe implements PipeTransform {
  transform(value: Nem): boolean {
    return value === Nem.Ferfi;
  }
}