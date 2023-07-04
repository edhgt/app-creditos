import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>('clients');
  }

  store(client: Client) {
    return this.http.post<Client>('clients', client);
  }
}
