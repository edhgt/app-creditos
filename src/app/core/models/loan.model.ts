export interface Loan{
  id: number;
  monto: number;
  tasa_interes: number;
  fecha_inicio: Date;
  fecha_vencimiento: Date;
  cantidad_plazo: number;
  contrato: string;
  pagare: string;
  plazo_id: number;
  sucursal_id: number;
  cliente_id: number;
}
