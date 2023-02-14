import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ErrorMsg = styled.span`
  margin-top: 8px;

  color: ${theme.colors.red};
  font-size: ${theme.font.sizes.xsmall};
  font-family:${theme.font.inter};
  font-weight: ${theme.font.bold};
`
