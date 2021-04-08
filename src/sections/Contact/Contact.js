import React, {useEffect} from 'react'
import { SectionHeader } from '../../components'
import {
    ContactSection,
    ContactContainer,
    ContactBody,
    ContactBoxes,
    ContactBoxWrapper,
    ContactBoxHeader,
    ContactBoxIconWrapper,
    ContactBoxIcon,
    ContactBoxTitle,
    ContactBoxDescription,
} from './Contact.elements'

import {Call, Email, Location} from  '../../images/contact'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {displayVariant} from '../../GlobalStyles'


function Contact() {
    const controls = useAnimation()

    const [ref, inView] = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if(inView){
            controls.start('visible')
        }
    }, [inView, controls])

    return (
        <ContactSection id='contact'>
            <ContactContainer as={motion.div}
                ref={ref}
                variants={displayVariant}
                initial='hidden'
                animate={controls}
            >
                <SectionHeader section='CONTACT' caption='Say Hello' details='I will get back to you as soon as possible'/>
            
                <ContactBody>
                    <ContactBoxes>

                        <ContactBoxWrapper>
                            <ContactBoxIconWrapper>
                                <ContactBoxIcon src={Call}/>
                            </ContactBoxIconWrapper>
                            <ContactBoxTitle>Give me a call</ContactBoxTitle>
                            <ContactBoxDescription>+63 929 447 2136</ContactBoxDescription>
                        </ContactBoxWrapper>

                        <ContactBoxWrapper>
                            <ContactBoxIconWrapper>
                                <ContactBoxIcon src={Email}/>
                            </ContactBoxIconWrapper>
                            <ContactBoxTitle>Send me an email</ContactBoxTitle>
                            <ContactBoxDescription>lbbautista6@up.edu.ph</ContactBoxDescription>
                        </ContactBoxWrapper>


                        <ContactBoxWrapper>
                            <ContactBoxIconWrapper>
                                <ContactBoxIcon src={Location}/>
                            </ContactBoxIconWrapper>
                            <ContactBoxTitle>Come see me</ContactBoxTitle>
                            <ContactBoxDescription>General Trias, Cavite</ContactBoxDescription>
                        </ContactBoxWrapper>

                    </ContactBoxes>
                </ContactBody>
            
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
