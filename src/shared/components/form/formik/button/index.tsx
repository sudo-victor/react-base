import React from 'react'

import { Container } from './styles'

type IProps = any & {
  title: string;
  submittingText: string;
  isSubmitting: boolean;
  withDisable: boolean;
}

const Button = ({
  title,
  submittingText,
  isSubmitting = false,
  withDisable,
  ...el
}: IProps): JSX.Element => {
  const disabledAttr = withDisable
    ? { disabled: !(el.isValid && el.dirty) }
    : {}
  if (el.canShow === false) return <div />
  return (
    <Container onClick={el.handleSubmit} {...el} type="submit" {...disabledAttr}>{isSubmitting ? submittingText : title}</Container>
  )
}

export default Button
