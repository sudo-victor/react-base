import React, { ReactNode } from 'react'
import IField from '../../../../../domain/interfaces/field'
import { ErrorMsg, Label } from '../../../ui'

import { Container, Wrapper } from './styles'

type IProps = any & IField & {
  children: ReactNode;
}

const TplGroup = ({
  name,
  prefixName,
  title,
  required,
  children,
  hasPlusButton,
  handlePlusButton,
  ...el
}: IProps) => (
  <Container style={{ ...el.styleContainer }}>
    {title && (
      <Label htmlFor={name}>
        {title}
        {required && <span>*</span>}
      </Label>
    )}
    <Wrapper>
      {children}
    </Wrapper>
    {el.dirty && el.touched[name] && (<ErrorMsg>{el.errors[name]}</ErrorMsg>)}
  </Container>
)

export default TplGroup
