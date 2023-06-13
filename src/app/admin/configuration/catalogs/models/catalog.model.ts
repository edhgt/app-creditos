import { Response } from "src/app/admin/core/models/response.model"

export interface Catalog {
  id: number,
  table: string,
  name: string,
  created_at: Date,
  updated_at: Date
}

export interface CatalogIndex extends Response {
  data: Catalog[]
}

export interface CreateCatalogDTO extends Omit<Catalog, 'id' | 'created_at' | 'updated_at'> { }

export interface UpdateCatalogDTO extends Partial<Catalog> { }
