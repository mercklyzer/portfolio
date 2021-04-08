import styled from 'styled-components'
import {Container} from '../../GlobalStyles'

export const ProjectsSection = styled.div`
    background-color: white;
    padding: 100px 0px;
    z-index: 0;
    /* overflow-x: hidden; */

    @media screen and (max-width: 450px){
        padding: 50px 0;
    }
` 

export const ProjectsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`