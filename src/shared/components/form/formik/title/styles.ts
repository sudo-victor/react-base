import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const Container = styled.div`
  padding-bottom: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const TitleEl = styled.h2`
  padding-bottom: 16px;

  font-size: ${theme.font.sizes.xlarge};
  font-family: ${theme.font.workSans};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.red};
  border-bottom: 1px solid #E0E0E0;
`

export const Subtitle = styled.h3`
  margin-top: 10px;

  font-size: ${theme.font.sizes.small};
  font-family: ${theme.font.inter};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.black};
`
