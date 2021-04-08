import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import '../../fonts.css'

export const HeroSection = styled.div`
    height: ${({section}) => section==='home'? '100vh' : '100%'};
    display: flex;
    position: relative;
    overflow-x: visible;
    z-index: 0;
    width: 100%;
`

export const HeroVideo = styled.video`
    position: absolute;
    width: 100%;
    left: 0%;
    top: 0%;
    height:100%;
    object-fit: cover;
    z-index: -1;
`

export const HeroLayer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.099);
`

export const Resume = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    text-align: center;
    border: 4px solid white;
    cursor: pointer;
    margin: 30px 0px;
    text-decoration: none;

    @media screen and (max-width: 450px){
        width: 240px;
        height: 50px;
        margin: 20px 0px;
        font-size: 20px;
        font-weight: 400;
        border: 2px solid white;
    }

    color: white;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 23px;

    transition: all 0.5s ease;

    &:hover{
        background-color: white;
        color: black;
    }
    
`


export const HeroContainer = styled(Container)`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    min-width: 0px;
    padding: 0;
    @media screen and (max-width: 768px){
        flex-direction: ${({imgStart}) => (imgStart? 'column':'column-reverse')};
    }    
`

export const HeroColumn = styled.div`
    margin: 0 20px;
    display: flex;
    width: ${({width}) => width? width: '50%'};
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 768px){
        align-items: center;
    }

    @media screen and (max-width: 450px){
        margin: 0;
        width: 100%;
    }
`

export const ProjectImageHeroColumn = styled(HeroColumn)`
    @media screen and (max-width: 768px){
        align-items: center;
        min-height: 392px;
        width: 100%;
    }

    @media screen and (max-width: 566px){
        min-height: 300px;
    }

    @media screen and (max-width: 450px){
        min-height: 280px;
    }

    @media screen and (max-width: 366px){
        min-height: 240px;
    }
`

export const ProjectButtonHeroColumn = styled(HeroColumn)`
    @media screen and (max-width: 768px){
        align-items: center;
        width: 100%;
    }
`


export const HeroHello = styled.span`
    color: #c83cb9;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 23px;
    margin: 60px 0;

    @media screen and (max-width: 768px){
        font-size: 24px;
        text-align: center;
        margin: 30px 0;
    }
`

export const HeroText = styled.p`
    color: #fff;
    font-family: 'Libre Baskerville', serif;
    font-size: 40px;
    line-height: 61px;

    @media screen and (max-width: 768px){
        font-size: 32px;
        line-height: 41px;
        text-align: center;
    }

    @media screen and (max-width: 425px){
        font-size: 24px;
        line-height: 36px;
    }
`

export const HeroDetails = styled.span`
    color: #5f5f5f;
    font-family: 'Libre Baskerville', serif;
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: 768px){
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }
`

export const HeroImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 555px;
    margin: 0px 20px;

    @media screen and (max-width: 768px){
        min-width: 200px;
        margin-top: 40px;
    }

    @media screen and (max-width: 672px){
        margin-top: 90px;
    }

    @media screen and (max-width: 450px){
        max-width: 140px;
    }
`

export const HeroProfilePicWrapper = styled(HeroImageWrapper)`
    border-radius: 100%;
    border: 4px solid #c83cb9;
    overflow:hidden;
`

export const HeroProfilePic = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align:middle;
    display: inline-block;
    
    
`

export const ProjectsButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ProjectsButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background-color: ${({active}) => active? '#f1f1f1' : 'transparent'};

    @media screen and (max-width: 1024px){
        padding: 10px;
    }

    @media screen and (max-width: 450px){
        padding: 5px;
    }
`

export const ProjectTitle = styled.span`
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 40px;
    margin: 0px;
    color: ${({active}) => active? '#c83cb9' : 'black'};
    display: flex;

    @media screen and (max-width: 1024px){
        line-height: 30px;
        font-size: 20px;
    }

    @media screen and (max-width: 450px){
        font-size: 16px;
        line-height: 20px;
    }
`

export const ProjectDescription = styled.span`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 20px;
    margin: 10px 0px;
    display: flex;

    @media screen and (max-width: 1024px){
        font-size: 16px;
    }

    @media screen and (max-width: 450px){
        font-size: 14px;
    }
`

export const ProjectPreviewWrapper = styled.a`
    position: absolute;
    display: flex;
    text-decoration: none;
    opacity: ${({active}) => active? '1':'0'};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.5s ease;
    z-index: ${({active}) => active? '2': '1'};
`

export const ProjectPreviewImage = styled.img`
    max-width: 100%;
`

