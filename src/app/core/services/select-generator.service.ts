import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SelectGenerator } from '../models/select-generator.model';

@Injectable({
  providedIn: 'root'
})
export class SelectGeneratorService {

  constructor(private http: HttpClient) { }

  getAll(table: string) {
    let params = new HttpParams();
    params = params.set('table', table);
    return this.http.get<SelectGenerator[]>('select-generator', { params });
  }
}
