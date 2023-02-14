import React from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

const BaseLayout = ():JSX.Element => (
  <S.Container>
    <S.Content>
      <Outlet />
    </S.Content>
  </S.Container>
)

export default BaseLayout
