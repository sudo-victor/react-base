export class CategoryHasProductAssociatedError extends Error {
  constructor() {
    super('Categoria tem produto associado!')
    this.name = 'CategoryHasProductAssociated'
  }
}
