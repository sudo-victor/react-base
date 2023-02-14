import React from 'react'

import { Container, TitleEl, Subtitle } from './styles'

type IProps = any & {
  title: string;
  subtitle: string;
}

const Title = ({
  title,
  subtitle = '',
  ...el
}: IProps) => (
  <Container {...el}>
    <TitleEl>
      {title}
    </TitleEl>
    <Subtitle>
      {subtitle}
    </Subtitle>
  </Container>
)

export default Title
