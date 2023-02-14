export class UnprocessableEntityError extends Error {
  constructor(message = '') {
    super(message || 'Não foi possível processar a requisição')
    this.name = 'UnprocessableEntityError'
  }
}
