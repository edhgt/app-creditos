import { EstadoType } from '../types/estado.type';

export interface Client {
  id: number;
  cui: string;
  nit?: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: Date;
  estado_civil: string;
  genero: string;
  celular: string;
  telefono?: string;
  correo?: string;
  observaciones?: string;
  estado?: EstadoType;
  fotografia: string;
  direccion: string;
  profesion_id: number;
  nacionalidad_id: number;
  departamento_id: number;
  municipio_id: number;
  condicion_vivienda_id: number;
  tipo_construccion_id: number;
  sucursal_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  foto?: string;
}
