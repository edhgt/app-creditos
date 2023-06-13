import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatalogService } from './services/catalog.service';
import { CatalogIndex } from './models/catalog.model';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
  form!:  FormGroup;
  catalogs!: CatalogIndex;

  constructor(
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

}
