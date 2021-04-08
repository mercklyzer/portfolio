import styled from 'styled-components'
import {Container} from '../../GlobalStyles'
import '../../fonts.css'

export const ContactSection = styled.div`
    background-color: #f1f1f1;
    padding: 100px 0px;
    z-index: 0;

    @media screen and (max-width: 450px){
        padding: 50px 0;
    }
`
export const ContactContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
    
export const ContactBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const ContactBoxes = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
`

export const ContactBoxWrapper = styled.div`
    padding: 10px;
    margin: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        margin: 20px;
    }
`

export const ContactBoxIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactBoxIcon = styled.img`
    max-width: 100px;
    height: auto;
`

export const ContactBoxTitle = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: #C83CB9;
    font-size: 20px;
    font-weight: 500;
`

export const ContactBoxDescription = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 16px;
    font-weight: 400;
`