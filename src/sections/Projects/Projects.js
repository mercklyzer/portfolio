import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {displayVariant} from '../../GlobalStyles'
import {SectionHeader, Hero} from '../../components'
import {
    ProjectsSection,
    ProjectsContainer
} from './Projects.elements'

function Projects() {
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
        <ProjectsSection id='projects'>
            <ProjectsContainer as={motion.div}
                ref={ref}
                variants={displayVariant}
                initial='hidden'
                animate={controls}>
                <SectionHeader section='PROJECTS' caption='Latest Works' details='You can see the projects I worked on recently'/>
                <Hero section='projects' imgStart={false}/>
            </ProjectsContainer>


        </ProjectsSection>
    )
}

export default Projects
