export interface Table {
  id: number,
  table: string,
  nombre: string,
  created_at: Date,
  updated_at: Date
}

export interface TableIndex extends Response {
  data: Table[]
}

export interface CreateTableDTO extends Omit<Table, 'id' | 'created_at' | 'updated_at'> { }
