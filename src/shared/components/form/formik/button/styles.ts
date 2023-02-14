import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const Container = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 24px;

  font-family: ${theme.font.inter};
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.white};
  font-weight: ${theme.font.semiBold};
  line-height: 24px;
  background: ${theme.colors.brown};
  border-radius: ${theme.border.smallRadius};
  border: none;
  cursor: pointer;

  transition: filter 300ms;

  &:hover {
    filter: brightness(0.6);
  }
`
