import { Component } from '@angular/core';

import { CatalogService } from '../../core/services/catalog.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent {
  title: string =  'Actividades Económicas';

}
