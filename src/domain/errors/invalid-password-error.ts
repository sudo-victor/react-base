export class InvalidPasswordError extends Error {
  constructor() {
    super(
      'A senha informada precisa pelo menos\n'
      + '1 letra minúscula\n'
      + '1 letra maiúscula\n'
      + '1 número\n'
      + '1 caracter especial\n'
      + 'e no mínimo 8 caracteres',
    )
    this.name = 'InvalidPasswordError'
  }
}
