export class UnauthorizedPaymentTokenError extends Error {
  constructor() {
    super('Chave da API inválida')
    this.name = 'UnauthorizedPaymentTokenError'
  }
}
