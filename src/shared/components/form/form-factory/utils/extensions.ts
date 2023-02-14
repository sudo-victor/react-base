/* eslint no-unused-expressions: 0 */
import * as Yup from 'yup'
import { getValidationSchemaByName } from './validations.map'

export const getInitialValues = (groups: any): any => {
  const initialValues = {}

  groups.forEach((group: any) => {
    'items' in group && group.items.forEach((item: any) => {
      if (item.inputs && item.inputs.length > 0) {
        item.inputs.forEach((subitem: { name: string, value?: any }) => {
          Object.assign(initialValues, {
            [subitem.name]: subitem.value || '',
          })
        })
      }

      Object.assign(initialValues, {
        [item.name]: item.value || '',
      })
    })
  })

  return initialValues
}

const mapValidationSchema = (validations: any): any => {
  const yupValidation = {}
  Object.keys(validations).forEach((key) => {
    Object.assign(yupValidation, {
      [key]: getValidationSchemaByName(validations[key]),
    })
  })

  return yupValidation
}

export const getValidationSchema = (groups: any[]): any => {
  const validations = {}

  groups.forEach((group: { items: any[] }) => {
    'items' in group && group.items.forEach((item: { validations: any; name: any, inputs?: any }) => {
      if (item.inputs && item.inputs.length > 0) {
        item.inputs.forEach((subitem: { validations: any; name: any, inputs?: any }) => {
          if (subitem.validations) {
            Object.assign(validations, {
              [subitem.name]: subitem.validations,
            })
          }
        })
      }

      if (item.validations) {
        Object.assign(validations, {
          [item.name]: item.validations,
        })
      }
    })
  })
  const validationSchema = mapValidationSchema(validations)

  return Object.keys(validationSchema).length ? Yup.object().shape(validationSchema) : null
}
