import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Label = styled.label`
  margin-bottom: 8px;
  margin-top: 0;
  width: 100%;

  position: relative;

  font-family: ${theme.font.inter};
  font-weight: ${theme.font.medium};
  font-size: ${theme.font.sizes.small};
  line-height: ${theme.font.sizes.normal};
  letter-spacing: -0.02em;
  color: ${theme.colors.red};

  & > span {
    margin-left: 5px;
    font-family: ${theme.font.inter};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.normal};
    letter-spacing: -0.02em;
    color: ${theme.colors.red};
  }
`
