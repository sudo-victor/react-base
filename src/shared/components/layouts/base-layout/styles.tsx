import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const ContainerHeader = styled.div`
    flex:0;
    margin-bottom: 39px;
`
export const Content = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const Footer = styled.div`
    display: flex;
    flex:none;
    justify-content: space-between;
    padding:${({ theme }) => theme.spacings.px15} ${({ theme }) => theme.spacings.px10} ;
`

export const Contain = styled.div`
    font-size:${({ theme }) => theme.font.sizes.xxxsmall};
    font-weight: ${({ theme }) => theme.font.normal};
    color: ${({ theme }) => theme.colors.black};
    line-height: 24px;
    letter-spacing: ${({ theme }) => theme.font.letterSpacing};
`

export const CustomLink = styled(Link)`
    color: #000;
    text-decoration: none;
`
