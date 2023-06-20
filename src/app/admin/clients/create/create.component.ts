import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      cui: ['', [Validators.required]],
      nit: '',
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      estado_civil: ['', Validators.required],
      genero: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: '',
      correo: '',
      direccion: '',
      profesion_id: ['', Validators.required],
      nacionalidad_id: ['', Validators.required],
      departamento_id: ['', Validators.required],
      municipio_id: ['', Validators.required],
      condicion_vivienda_id: ['', Validators.required],
      tipo_construccion_id: ['', Validators.required],
    });
  }

  onSubmit() {}

}
