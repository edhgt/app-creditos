import { EstadoCivilType } from '../types/estadocivil.type';
import { GeneroType } from '../types/genero.type';
import { EstadoType } from '../types/estado.type';

export interface Client {
  id: number;
  cui: string;
  nit?: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: Date;
  estado_civil: EstadoCivilType;
  genero: GeneroType;
  celular: string;
  telefono?: string;
  correo?: string;
  observaciones?: string;
  estado?: EstadoType;
  estado2?: string;
  fotografia: string;
  direccion?: string;
  profesion_id: number;
  nacionalidad_id: number;
  departamento_id: number;
  municipio_id: number;
  condicion_vivienda_id: number;
  tipo_construccion_id: number;
  sucursal_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  foto?: string;
}

export interface ClientCreate extends Omit<Client, 'id'> {}

export interface ClientUpdate extends Partial<ClientCreate> {};