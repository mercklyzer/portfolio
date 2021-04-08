import styled from 'styled-components'
import {Container} from '../../GlobalStyles'

export const SkillsSection = styled.div`
    background-color: #f1f1f1;
    padding: 100px 0px;
    z-index: 0;

    @media screen and (max-width: 450px){
        padding: 50px 0;
    }
`

export const SkillsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SkillsSubSection = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`

export const SkillsSubSectionHeader = styled.span`
    color: #242122;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 500;
    margin: 14px 0;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`
export const SkillsImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
`

export const SkillsImagesWrapper = styled.div`
    display:flex;
    margin: 40px 20px;

    @media screen and (max-width: 768px){
        margin: 30px 10px;
    }
`

export const SkillsImage = styled.img`
    padding-right: 0;
    border: 0;
    width: auto;
    vertical-align:middle;
    display: inline-block;
    max-height: 120px;
    max-width: 120px;

    @media screen and (max-width: 768px){
        max-height: 100px;
        max-width: 100px;
    }
`
