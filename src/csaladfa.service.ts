import { Injectable } from "@angular/core";

@Injectable()
export class CsaladfaService {
  private csaladtagok: Csaladtag[] = [
    
  ];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}