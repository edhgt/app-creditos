import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from '../../configuration/catalogs/services/catalog.service';
import { Profession } from 'src/app/core/models/profession.model';
import { Nationality } from 'src/app/core/models/nationality.model';
import { Deparment } from 'src/app/core/models/department.model';
import { Municipality } from 'src/app/core/models/municipality.model';
import { HousingCondition } from 'src/app/core/models/housingCondition.model';
import { TypeConstrution } from 'src/app/core/models/typeConstruction.model';
import { Shop } from 'src/app/core/models/shop.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form!: FormGroup;

  professions: Profession[] = [];
  nationallities: Nationality[] = [];
  departments: Deparment[] = [];
  municipalities: Municipality[] = [];
  housingConditions: HousingCondition[] = [];
  typeConstruction: TypeConstrution[] = [];
  sucursals: Shop[] = [];

  constructor(
    private catalog: CatalogService
  ) {}

}
