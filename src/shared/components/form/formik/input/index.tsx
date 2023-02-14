import React from 'react'
import { Field } from 'formik'

import {
  Input as InputElement,
} from './styles'
import TplGroup from '../tpl-group'
import IField from '../../../../../domain/interfaces/field'

type IProps = any & IField

const Input = ({
  title,
  placeholder = 'Digite aqui',
  required = false,
  name,
  prefixName = '',
  type,
  ...el
}: IProps): JSX.Element | null => {
  const handleChange = (event: { target: { value: string } }): void => {
    let { value } = event.target
    if (el.validations?.includes('email')) value = event.target.value.replace(/\s/g, '')

    if (el.setFieldValue) {
      el.setFieldValue(`${prefixName}${name}`, value)
    }
  }

  return (
    <TplGroup
      name={`${prefixName}${name}`}
      prefixName={prefixName}
      title={title}
      required={required}
      {...el}
    >
      <Field
        {...el}
        type={type || 'text'}
        name={`${prefixName}${name}`}
      >
        {({ field }: any) => (
          <InputElement
            type={type || 'text'}
            required={required}
            placeholder={placeholder || ''}
            onChange={(event: any) => handleChange(event)}
            max={el.max}
            disabled={el?.disabled === true}
            maxLength={el.max}
            value={field.value}
          />
        )}
      </Field>
    </TplGroup>
  )
}

export default Input
