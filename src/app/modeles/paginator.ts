import {MatPaginatorIntl} from "@angular/material/paginator";

export class Paginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.itemsPerPageLabel = 'Sorties par page : ';
  }
}
