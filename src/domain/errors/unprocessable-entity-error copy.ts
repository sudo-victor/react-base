export class UnprocessableEntityError extends Error {
  constructor(body: never) {
    super(body['hydra:description'])
    this.name = 'InvalidCredentialsError'
  }
}
