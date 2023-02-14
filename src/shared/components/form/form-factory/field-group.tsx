/* eslint react/no-array-index-key: 0 */

import React from 'react'
import { FormikProps } from 'formik'

import { Container, Row } from './styles'
import Callinputs from './call-inputs'

type IProps = any & {
  actions: FormikProps<any>;
  data: any;
}

const FieldGroup = ({
  prefixName = '',
  actions,
  children = null,
  data,
  setData,
}: IProps) => (
  <>
    {children || data.map(({ items }: any, idx: number) => (
      <Container key={idx}>
        {items.filter((item: any) => item.component).map(({ ...item }, index:number) => {
          Object.assign(item, { prefixName })
          return (
            <Row key={`${idx}-${index}`}>
              <Callinputs {...item} {...actions} setData={setData} />
            </Row>
          )
        })}
      </Container>
    ))}
  </>
)

export default FieldGroup
