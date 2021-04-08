import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    NavIcon,
    NavMenu,
    NavItem,
    NavLink,
    MobileIcon
} from './Navbar.elements'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo href='#home'>
                    <NavIcon/>
                    LMB
                </NavLogo>
                <MobileIcon onClick={handleClick}>{click? <FaTimes />: <FaBars />}</MobileIcon>
                <NavMenu click={click}>

                    <NavItem>
                        <NavLink href='#home'>
                            Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href='#about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#skills'>
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#projects'>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
