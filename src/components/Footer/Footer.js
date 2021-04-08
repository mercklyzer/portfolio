import React from 'react'
import {
    FooterSection,
    FooterContainer,
    FooterIconWrapper,
    FooterIcon,
    FooterLinksContainer,
    FooterLink,
    FooterBar,
} from './Footer.elements'


function Footer() {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterIconWrapper>
                    <FooterIcon />
                </FooterIconWrapper>
                <FooterLinksContainer>
                    <FooterLink href="https://github.com/mercklyzer" target="_blank">GitHub</FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/lyzer-merck-bautista/" target="_blank">LinkedIn</FooterLink>
                </FooterLinksContainer>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
