export interface Catalog {
  id: number,
  table?: string,
  nombre: string,
  created_at: Date,
  updated_at: Date
}

export interface CatalogIndex extends Response {
  data: Catalog[]
}

export interface CreateCatalogDTO extends Omit<Catalog, 'id' | 'created_at' | 'updated_at'> { }
