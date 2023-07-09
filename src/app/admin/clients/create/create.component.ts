import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SelectGeneratorService } from 'src/app/core/services/select-generator.service';
import { SelectGenerator } from 'src/app/core/models/select-generator.model';
import { Profession } from 'src/app/core/models/profession.model';
import { Nationality } from 'src/app/core/models/nationality.model';
import { Deparment } from 'src/app/core/models/department.model';
import { Municipality } from 'src/app/core/models/municipality.model';
import { HousingCondition } from 'src/app/core/models/housingCondition.model';
import { TypeConstrution } from 'src/app/core/models/typeConstruction.model';
import { Shop } from 'src/app/core/models/shop.model';

import { ClientService } from 'src/app/core/services/client.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  id: string | null = null;
  form!: FormGroup;
  type: string = 'create';
  title: string = 'Registrar cliente';

  professions: SelectGenerator[] = [];
  nationallities: SelectGenerator[] = [];
  departments: SelectGenerator[] = [];
  municipalities: SelectGenerator[] = [];
  housingConditions: SelectGenerator[] = [];
  typeConstructions: SelectGenerator[] = [];
  sucursals: SelectGenerator[] = [];
  parentescos: SelectGenerator[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private selectGeneratorService: SelectGeneratorService,
    private clientService: ClientService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.selectGeneratorService.getAll('profesiones').subscribe((response) => {
      this.professions = response
    });
    this.selectGeneratorService.getAll('nacionalidades').subscribe((response) => {
      this.nationallities = response
    });
    this.selectGeneratorService.getAll('departamentos').subscribe((response) => {
      this.departments = response
    });
    this.selectGeneratorService.getAll('municipios').subscribe((response) => {
      this.municipalities = response
    });
    this.selectGeneratorService.getAll('condicion_viviendas').subscribe((response) => {
      this.housingConditions = response
    });
    this.selectGeneratorService.getAll('tipo_construcciones').subscribe((response) => {
      this.typeConstructions = response
    });
    this.selectGeneratorService.getAll('parentescos').subscribe((response) => {
      this.parentescos = response
    });

    this.agregarReferencia();

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.type = 'update';
      this.title = 'Actualizar cliente';
    }

    if(this.type == 'update') {
      this.clientService.show(this.id).subscribe(response => {
        this.form.patchValue(response);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: '',
      cui: ['', [Validators.required]],
      nit: '',
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      estado_civil: ['', Validators.required],
      genero: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: '',
      correo: ['', Validators.email],
      direccion: ['', Validators.required],
      profesion_id: ['', Validators.required],
      nacionalidad_id: [1, Validators.required],
      departamento_id: ['', Validators.required],
      municipio_id: ['', Validators.required],
      condicion_vivienda_id: ['', Validators.required],
      tipo_construccion_id: ['', Validators.required],
      referencias: this.formBuilder.array([])
    });
  }

  onSubmit() {
    if(this.form.valid) {
      if(this.type == 'create') {
        this.clientService.store(this.form.value).subscribe(() => {
          this.router.navigate(['/app/clients']);
        });
      } else {
        this.clientService.update(this.id, this.form.value).subscribe(() => {
          this.router.navigate(['/app/clients']);
        });

      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  get referencias() {
    return this.form.get('referencias') as FormArray;
  }

  agregarReferencia() {
    for (let i = 0; i < 5; i++) {
      this.referencias.push(this.formBuilder.group({
        nombre: ['', Validators.required],
        direccion: '',
        telefono: ['', Validators.required],
        parentesco_id: ['', Validators.required]
      }));
    }
  }
}
