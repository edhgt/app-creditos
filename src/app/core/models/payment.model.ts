export interface payment{
  id: number;
  monto: number;
  fecha_estimada_pago: Date;
  fecha_pago: Date;
  numero_comprobante: Date;
  comprobante: Date;
  medio_pago_id: number;
  forma_pago_id: number;
  prestamo_id: number;
  cliente_id: number;
}
