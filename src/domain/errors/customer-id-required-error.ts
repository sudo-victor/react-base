export class CustomerIdRequiredError extends Error {
  constructor() {
    super('O customerId é obrigatório')
    this.name = 'CustomerIdRequiredError'
  }
}
