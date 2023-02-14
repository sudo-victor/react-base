/* eslint react/no-array-index-key: 0 */
import React from 'react'
import { Formik } from 'formik'
import { getInitialValues, getValidationSchema } from './utils/extensions'

import { Container, Row } from './styles'
import Callinputs from './call-inputs'
import { ErrorMsg } from '../../ui'

const FormFactory = ({
  data,
  onSubmit,
  children,
  setData,
  initialData,
  setUpdateFormValues,
  submitErrorMessage = '',
}: any): JSX.Element => {
  const validationSchema = getValidationSchema(data)
  const initialValues = initialData || getInitialValues(data)

  const options = {
    enableReinitialize: true,
    initialValues,
    onSubmit,
  }

  if (validationSchema) Object.assign(options, { validationSchema })

  return (
    <>
      <Formik {...options}>
        {(actions) => (
          <>
            {children || data.map(({ items }: any, idx: number) => (
              <Container key={idx}>
                {items.filter((item: any) => item.component).map(({ ...item }, index:number) => (
                  <Row key={`${idx}-${index}`}>
                    <Callinputs
                      {...item}
                      {...actions}
                      setData={setData}
                      setUpdateFormValues={setUpdateFormValues}
                    />
                  </Row>
                ))}
              </Container>
            ))}
          </>
        )}
      </Formik>
      <ErrorMsg>{submitErrorMessage}</ErrorMsg>
    </>
  )
}

export default FormFactory
