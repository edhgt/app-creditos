import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CatalogIndex } from '../models/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private apiUrl = `${environment.API_URL}/api/v1/catalogs`;

  constructor(
    private http: HttpClient
  ) { }

  index(limit?: number, offset?: number) {
    let params = new HttpParams();
    if(limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<CatalogIndex[]>(this.apiUrl, { params });
  }
}
