import styled from 'styled-components'


export const SectionHeaderContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SectionHeaderSection = styled.span`
    color: #c83cb9;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;

    @media screen and (max-width: 450px){
        font-size: 16px;
        line-height: 20px;
    }
`

export const SectionHeaderCaption = styled.span`
    color: #0d0a0b;
    font-family: 'Libre Baskerville', serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 66px;

    @media screen and (max-width: 450px){
        font-size: 32px;
        line-height: 40px;
    }
`

export const SectionHeaderDetails = styled.span`
    color: #0d0a0b;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;

    @media screen and (max-width: 450px){
        font-size: 16px;
        line-height: 28px;
    }
`

export const SectionHeaderLine = styled.div`
    margin: 20px 0px;
    height: 2px;
    background-color: #e5e5e5;
    width: 340px;

    @media screen and (max-width: 450px){
        width: 200px;
    }
`