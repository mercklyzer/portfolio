// THIS IS THE MAIN "CSS" FILE

import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const gray = '#151617'
export const pink = '#c83383'

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }

    @media screen and (max-width: 450px){
        padding: 0 10px;
    }
`

export const displayVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export default GlobalStyle