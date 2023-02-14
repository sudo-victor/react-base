import React from 'react'
import { Field } from 'formik'
import IField from '../../../../../domain/interfaces/field'
import TplGroup from '../tpl-group'

import {
  Textarea as TextareaElement,
} from './styles'

type IProps = any & IField

const Textarea = ({
  placeholder = 'Digite aqui',
  required = false,
  name,
  title,
  prefixName = '',
  rows = 5,
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
        name={`${prefixName}${name}`}
      >
        {({ field }: any) => (
          <TextareaElement
            spellCheck="false"
            name={`${prefixName}${name}`}
            required={required}
            value={field.value}
            onChange={(event: any) => handleChange(event)}
            placeholder={placeholder || ''}
            rows={rows}
          />
        )}
      </Field>
    </TplGroup>
  )
}

export default Textarea
