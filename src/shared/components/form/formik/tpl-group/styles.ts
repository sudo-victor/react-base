import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Wrapper = styled.div`
  width: 100%;
 
  display: flex;
  align-items: center;

  position: relative;

  & > button {
    position: absolute;
    right: 13px;
    background: transparent;
  }
`

export const PlusButton = styled.button`
  position: absolute;
  right: 0;

  background: transparent;
  border: none;
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.medium};
  line-height: ${theme.font.sizes.normal};
  color: ${theme.colors.lightBlue};
`
