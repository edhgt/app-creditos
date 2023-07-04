import { Component } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';

declare const $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  clients: Client[] = [];
  constructor(
    private clienteService: ClientService
  ) {
    this.clienteService.getAll().subscribe(response => {
      this.clients = response.data;
    });
  }
}
