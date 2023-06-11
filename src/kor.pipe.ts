import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'kor', standalone: true })
export class KorPipe implements PipeTransform {
  transform(szuletesnap: Date): number {
    return Math.abs(new Date(Date.now() - szuletesnap.getTime()).getUTCFullYear() - 1970);
  }
}
