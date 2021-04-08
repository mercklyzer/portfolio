import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {gray,pink} from '../../GlobalStyles'

export const Nav = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    background-color: transparent;
    position: fixed;
    width: 100%;
    z-index: 1;
    background: #191919;
`

export const NavbarContainer = styled.div`
    margin: 0px 40px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavLogo = styled(AnchorLink)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: -3px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 60px;
        left: ${({click}) => click? 0: '-100%'};
        opacity: 1;
        transition: all 0.5s ease;
        background: #191919;
    }
`

export const NavItem = styled.li`
    height: 60px;
    border-bottom: 3px solid transparent;

    &:hover{
        border-bottom: 3px solid ${pink};
    }
`

export const NavLink = styled(AnchorLink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding:0.5rem 1.2rem;
    font-size: 1rem;
    height: 100%;
    scroll-behavior: smooth;
`