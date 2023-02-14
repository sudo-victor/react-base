export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credencial inválida')
    this.name = 'InvalidCredentialsError'
  }
}
