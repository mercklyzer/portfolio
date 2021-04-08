import React, {useEffect} from 'react'
import {
    AboutSection,
    AboutContainer,
} from './About.elements'
import {Hero, SectionHeader} from '../../components'
import AboutPic from '../../images/profile-about.svg'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {displayVariant} from '../../GlobalStyles'

function About() {
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
        <AboutSection id='about'>
            <AboutContainer as={motion.div}
                ref={ref}
                variants={displayVariant}
                initial='hidden'
                animate={controls}
            >
                <SectionHeader section='ABOUT' caption='Personal Info' details='Get to know me more.'/>
            <Hero image={AboutPic} imgStart={true} section='about'/>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
