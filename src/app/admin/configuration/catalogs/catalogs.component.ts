import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogService } from './services/catalog.service';
import { Catalog, CatalogIndex } from './models/catalog.model';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private toastr: ToastrService,
    private _catalog: CatalogService,
    private _formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this._catalog.index().subscribe(response => {
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
    if(this.catalog.id) {
      this.update();
    } else {
      this.store();
    }
  }

  create() {
    this.titleModal = 'Crear tabla catalogo';
  }

  store() {
    this._catalog.store(this.form.value).subscribe(response => {
      this.catalogs.data.push(response);
      this.toastr.success('Registro exitoso', 'Se creó correctamente el catalogo');
    });
  }

  edit(index: number, catalog: Catalog) {
    this.titleModal = 'Modificar tabla catalogo';
    this.currentIndexCatalog = index;
    this.catalog = catalog;
  }

  update() {
    this._catalog.update(this.form.value).subscribe(response => {
      this.catalogs.data[this.currentIndexCatalog] = response;
      this.toastr.success('Actualización exitosa', 'Se actualizó correctamente el catalogo');
    });
  }

  delete() {
    const confirmDelete: boolean = confirm('¿Está seguro de eliminar el catalogo: \n' + this.catalog.name);
    if(confirmDelete) {
      this._catalog.delete(this.catalog.id).subscribe(() => {
        this.catalogs.data.slice(this.currentIndexCatalog, 1);
        this.toastr.info("Catalogo eliminado");
      });
    }
  }

}
