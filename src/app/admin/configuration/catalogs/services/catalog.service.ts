import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

 import { Catalog, CatalogIndex, CreateCatalogDTO, UpdateCatalogDTO } from '../models/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private http: HttpClient
  ) { }

  index(per_page?: number, offset?: number) {
    let params = new HttpParams();
    //if(per_page !== undefined && offset !== undefined) {
    if(per_page !== undefined) {
      params = params.set('per_page', per_page);
      //params = params.set('offset', offset);
    }
    return this.http.get<CatalogIndex>('catalogs', { params });
  }

  store(catalog: CreateCatalogDTO) {
    return this.http.post<Catalog>('catalogs', catalog);
  }

  show(id: number) {
    return this.http.get<Catalog>('catalogs/' + id);
  }

  update(catalog: UpdateCatalogDTO) {
    return this.http.put<Catalog>('catalogs/' + catalog.id, catalog);
  }

  delete(id: number) {
    return this.http.delete<Catalog>('catalogs/' + id);
  }
}
