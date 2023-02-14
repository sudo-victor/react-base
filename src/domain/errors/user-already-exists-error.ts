export class UserExistsError extends Error {
  constructor() {
    super('Usuário já existe!')
    this.name = 'UsernameExistsException'
  }
}
