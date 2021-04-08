import React, {useEffect} from 'react'
import {SectionHeader} from '../../components'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {displayVariant} from '../../GlobalStyles'
import {
    SkillsSection,
    SkillsContainer,
    SkillsSubSection,
    SkillsSubSectionHeader,
    SkillsImagesContainer,
    SkillsImagesWrapper,
    SkillsImage,
} from './Skills.elements'

import {
    HTML,
    CSS,
    JS,
    PHP,
    ReactJS,
    MySQL
}   from '../../images/webdev'

import {
    CSharp,
    Unity,
    Python,
}   from '../../images/gamedev'

import {
    C,
    CPP,
    Ocaml,
}   from '../../images/problemsolving'

import {
    Linux,
    Git,
}   from '../../images/others'

function Skills() {
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
        <SkillsSection id='skills'>
            <SkillsContainer as={motion.div}
                ref={ref}
                variants={displayVariant}
                initial='hidden'
                animate={controls}>
                <SectionHeader section='SKILLS' caption='What I Know' details='The following are what I use:'/>
                <SkillsSubSection>
                    <SkillsSubSectionHeader>
                        Web Development (Front-end and Backend)
                    </SkillsSubSectionHeader>
                    <SkillsImagesContainer>
                        <SkillsImagesWrapper><SkillsImage src={HTML}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={CSS}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={JS}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={ReactJS}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={PHP}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={MySQL}/></SkillsImagesWrapper>
                    </SkillsImagesContainer>
                </SkillsSubSection>

                <SkillsSubSection>
                    <SkillsSubSectionHeader>
                        Game Development
                    </SkillsSubSectionHeader>
                    <SkillsImagesContainer>
                        <SkillsImagesWrapper><SkillsImage src={CSharp}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={Unity}/></SkillsImagesWrapper>
                    </SkillsImagesContainer>
                </SkillsSubSection>

                <SkillsSubSection>
                    <SkillsSubSectionHeader>
                        Problem Solving
                    </SkillsSubSectionHeader>
                    <SkillsImagesContainer>
                        <SkillsImagesWrapper><SkillsImage src={Python}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={C}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={CPP}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={Ocaml}/></SkillsImagesWrapper>
                    </SkillsImagesContainer>
                </SkillsSubSection>

                <SkillsSubSection>
                    <SkillsSubSectionHeader>
                        Others
                    </SkillsSubSectionHeader>
                    <SkillsImagesContainer>
                        <SkillsImagesWrapper><SkillsImage src={Linux}/></SkillsImagesWrapper>
                        <SkillsImagesWrapper><SkillsImage src={Git}/></SkillsImagesWrapper>
                    </SkillsImagesContainer>
                </SkillsSubSection>

            </SkillsContainer>
        </SkillsSection>
    )
}

export default Skills
