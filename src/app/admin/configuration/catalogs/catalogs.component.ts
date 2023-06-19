import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogService } from './services/catalog.service';
import { Catalog, CatalogIndex } from './models/catalog.model';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  form!:  FormGroup;
  catalogs!: CatalogIndex;
  catalog!: Catalog;
  titleModal: string = '';
  currentIndexCatalog: number = 0;
  action: string = 'create';

  constructor(
    private toastr: ToastrService,
    private _catalog: CatalogService,
    private _formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this._catalog.index(25).subscribe((response: CatalogIndex) => {
      this.catalogs = response;
    });
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      table: ['', [Validators.required]],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.action === 'update') {
      this.update();
    } else {
      this.store();
    }
  }

  create() {
    this.titleModal = 'Crear tabla catalogo';
    this.currentIndexCatalog = 0;
    this.action = 'create';
  }

  store() {
    this._catalog.store(this.form.value).subscribe((response: Catalog) => {
      $('#modalCatalog').modal('toggle')
      this.catalogs.data.push(response);
      this.toastr.success('Registro exitoso', 'Se creó correctamente el catalogo');
    });
  }

  edit(index: number, catalog: Catalog) {
    this.titleModal = 'Modificar tabla catalogo';
    this.currentIndexCatalog = index;
    this.action = 'update'
    this.catalog = catalog;
    this.form.patchValue(catalog)
    $('#modalCatalog').modal('toggle')
  }

  update() {
    this._catalog.update({
      id: this.catalog.id,
      ...this.form.value
    }).subscribe((response: Catalog) => {
      this.catalogs.data[this.currentIndexCatalog] = response;
      this.toastr.success('Se actualizó correctamente el catalogo');
      $('#modalCatalog').modal('toggle')
    });
  }

  destroy(id: number) {
    const confirmDelete: boolean = confirm('¿Está seguro de eliminar el catalogo: \n' + this.form.get('name')?.value);
    if(confirmDelete) {
      this._catalog.delete(id).subscribe(() => {
        this.catalogs.data.splice(this.currentIndexCatalog, 1);
        $('#modalCatalog').modal('toggle')
        this.toastr.info("Catalogo eliminado");
      });
    }
  }

}
