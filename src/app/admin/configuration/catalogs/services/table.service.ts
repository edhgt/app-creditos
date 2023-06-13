import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { CreateTableDTO } from '../models/table.model';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  params = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param table string nombre la tabla a consultar
   * @param isFlat boolean para cuando queremos solo usarlo en algún select
   * @returns Observable de la petición
   */
  index(table: string, isFlat: boolean = false) {
    this.params.set('table', table);

    if(isFlat) {
      this.params.set('isFlat', true);
    }
    return this.http.get<Table[]>('catalogs', { params: this.params });
  }

  store(table: string, data: CreateTableDTO) {
    this.params.set('table', table);
    return this.http.post('catalogs', { params: this.params });
  }

  show(table: string, id: number) {
    this.params.set('table', table);
    return this.http.get('catalogs/' + id, { params: this.params });
  }

  update(data: Table) {
    this.params.set('table', data.table);
    return this.http.patch('catalogs/' + data.id, { params: this.params });
  }

  delete(table: string, id: number) {
    this.params.set('table', table);
    return this.http.delete('catalogs/' + id, { params: this.params });
  }
}
