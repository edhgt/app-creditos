import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectGeneratorService } from 'src/app/core/services/select-generator.service';
import { CatalogService } from './services/catalog.service';
import { SelectGenerator } from 'src/app/core/models/select-generator.model';
import { Catalog, CatalogIndex } from './models/catalog.model';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  type: string | null = 'catalogIndex';
  form!:  FormGroup;
  catalogSelect: SelectGenerator[] = [];
  catalogs!: CatalogIndex;
  catalog!: Catalog;
  titleModal: string = '';
  currentIndexCatalog: number = 0;
  action: string = 'create';

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private selectGenerator: SelectGeneratorService,
    private _catalog: CatalogService,
    private _formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.selectGenerator.getAll('catalog_tables').subscribe(response => {
      this.catalogSelect = response;
    });
    
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      table: ['', [Validators.required]],
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.action === 'update') {
      this.update();
    } else {
      this.store();
    }
  }

  index() {
    this._catalog.index(this.form.get('table')?.value, 25).subscribe((response: CatalogIndex) => {
      this.catalogs = response;
    });
  }

  create() {
    this.titleModal = 'Crear catalogo';
    this.currentIndexCatalog = 0;
    this.action = 'create';
    this.form.patchValue({ nombre: ''});
  }

  store() {
    this._catalog.store(this.form.value).subscribe((response: Catalog) => {
      $('#modalCatalog').modal('toggle')
      this.catalogs.data.push(response);
      this.toastr.success('Registro exitoso', 'Se creó correctamente el catalogo');
    });
  }

  edit(index: number, catalog: Catalog) {
    console.log(catalog)
    this.titleModal = 'Modificar catalogo';
    this.currentIndexCatalog = index;
    this.action = 'update'
    this.catalog = catalog;
    this.form.patchValue({...catalog, table: this.table?.value})
    $('#modalCatalog').modal('toggle')
  }

  update() {
    this._catalog.update({
      id: this.catalog.id,
      ...this.form.value
    }).subscribe((response: Catalog) => {
      this.catalogs.data[this.currentIndexCatalog] = response;
      this.toastr.success('Se actualizó correctamente el catalogo');
      this.form.patchValue({ nombre: ''});
      $('#modalCatalog').modal('toggle')
    });
  }

  destroy(id: number) {
    const confirmDelete: boolean = confirm('¿Está seguro de eliminar: \n' + this.form.get('nombre')?.value);
    if(confirmDelete) {
      this._catalog.delete(id, this.table?.value).subscribe(() => {
        this.catalogs.data.splice(this.currentIndexCatalog, 1);
        $('#modalCatalog').modal('toggle')
        this.toastr.info("Catalogo eliminado");
      });
    }
  }

  get table() {
    return this.form.get('table');
  }

}
