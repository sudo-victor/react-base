import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  position: relative;

  & > button {
    position: absolute;
    right: 13px;;
    background: transparent;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 13px;

  border-radius: ${theme.border.smallRadius};
  border: 1px solid #B9C1CB;
  box-shadow: 0px 3px 2px rgba(185, 193, 203, 0.22);
  background: ${theme.colors.white};
  font-size: ${theme.font.sizes.small};
  line-height: ${theme.font.sizes.normal};
  font-family: ${theme.font.montserrat};
  color: ${theme.colors.brown};
  resize: none;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #C4C4C4;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #C4C4C4;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #C4C4C4;
  }
`
