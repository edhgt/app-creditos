export interface Request{
  id: number;
  fecha_aprobacion: Date;
  monto_solicitado: number;
  monto_aprobado: number;
  estado: string;
  usuraio_autoriza_id: number;
  cliente_id: number;
}
