import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import {Container} from '../../GlobalStyles'
import '../../fonts.css'

export const FooterSection = styled.div`
    background-color: #191919;
    z-index: 0;
    padding: 40px;

    @media screen and (max-width: 450px){
        padding: 20px;
    }
`

export const FooterContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FooterIconWrapper = styled.div`
    display:flex;
    min-height: 100px;
    min-width: 100px;

    @media screen and (max-width: 450px){
        min-height: 70px;
        min-width: 70px;
    }
`

export const FooterIcon = styled(FaMagento)`
    color: white;
    height: 100%;
    width: 100%;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 300px;

    @media screen and (max-width: 450px){
        min-width: 240px;
    }
`

export const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 450px){
    font-size: 20px;
    font-weight: 400;
    }
`
