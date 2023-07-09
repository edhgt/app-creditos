import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { ClientService } from 'src/app/core/services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  client: any | null = {
    id: 0,
    cui: '',
    nit: '',
    nombres: '',
    apellidos: '',
    celular: '',
    telefono: '',
    correo: '',
    fotografia: '',
    profesion_id: 0,
    nacionalidad_id: 0,
    departamento_id: 0,
    municipio_id: 0,
    condicion_vivienda_id: 0,
    tipo_construccion_id: 0,
    sucursal_id: 0
  };

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientService.show(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.client = response;
    })
  }
}
