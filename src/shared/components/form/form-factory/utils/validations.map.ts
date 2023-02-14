/* eslint consistent-return: 0 */
import * as Yup from 'yup'
import { I18n } from 'aws-amplify'

export const getValidationSchemaByName = (name: any): any => {
  if (!Array.isArray(name)) {
    switch (name) {
      case 'codeRequired':
        return Yup.number()
          .min(6, I18n.get('ValidateMinCode'))
          .required(I18n.get('ValidateRequiredField'))
      case 'inputRadioRequired':
        return Yup.string()
          .nullable()
          .required(I18n.get('ValidateRequiredField'))
      case 'inputRequired':
        return Yup.string()
          .required(I18n.get('ValidateRequiredField'))
      case 'arrayRequired':
        return Yup.array()
          .required(I18n.get('ValidateRequiredField'))
      case 'emailRequired':
        return Yup.string()
          .email(I18n.get('ValidateInvalidEmail'))
          .required(I18n.get('ValidateRequiredField'))
      case 'passwordRequired':
        return Yup.string()
          .min(6, I18n.get('ValidateMinPassword'))
          .max(6, I18n.get('ValidateMaxCode'))
          // .required(I18n.get('ValidateRequiredField'))
      case 'passwordWithMatches':
        return Yup.string()
          .min(8, 'Senha precisa ter no mínimo 8 caracteres')
          .matches(/[0-9]/, 'Senha precisa ter no mínimo um número')
          .matches(/[a-z]/, 'Senha precisa ter no mínimo uma letra minúscula')
          .matches(/[A-Z]/, 'Senha precisa ter no mínimo uma letra maiúscula')
          .matches(/[!@#$%*()_/\\\-+^&{}:;?.]/, 'Senha precisa ter no mínimo um caractere especial')
          .required('Senha é obrigatória')
      case 'inputRequiredCode':
        return Yup.string()
          .required(I18n.get('ValidateRequiredField'))
          .matches(/[0-9]/, I18n.get('ValidateOnlyNumbers'))
      case 'isValidName':
        return Yup.string()
          .required(I18n.get('ValidateRequiredField'))
          .min(2, I18n.get('ValidateMinName'))
      default: throw new Error(`Validation ${name} don't found`)
    }
  }

  return 'maoe'
}
