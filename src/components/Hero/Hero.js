import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {
    HeroSection,
    HeroColumn,
    HeroContainer,
    HeroVideo,
    HeroLayer,
    HeroHello,
    HeroText,
    HeroImageWrapper,
    HeroProfilePicWrapper,
    HeroProfilePic,
    HeroDetails,
    
    Resume,

    ProjectsButtonsContainer,
    ProjectsButtonWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectPreviewWrapper,
    ProjectPreviewImage,
    ProjectImageHeroColumn,
    ProjectButtonHeroColumn,
} from './Hero.elements'

import {Starbucks, SiteLeaf, DCS} from '../../images/projects'
import ResumeFile from '../../files/Bautista_Resume.pdf'

const nameVariants = {
    hidden: {
        opacity: 0,
        left: -100
    },
    visible:{
        opacity: 1,
        left: 0,
        transition:{
            type: 'spring',
            delay: 0.2
        }
    }
}

function Hero({background, image, imgStart, section}) {
    const [project, setProject] = useState('dcs')

    const clickHandler = (proj) => setProject(proj)

    return (
        <HeroSection section={section}>
            {background && 
            <>
            <HeroVideo autoPlay loop muted>
                <source src={background} type='video/mp4'/>
            </HeroVideo>
            <HeroLayer />
            </>}

            {/* FOR HOME */}
            { section==='home' && 
            <HeroContainer imgStart={imgStart}>
                <HeroColumn as={motion.div}                   
                    variants={nameVariants}
                    initial='hidden'
                    animate='visible'
                    width='70%'>
                    <HeroHello>HELLO THERE</HeroHello>
                    <HeroText>I am Lyzer Merck B. Bautista</HeroText>
                    <HeroText>I am a student.</HeroText>
                    <Resume href={ResumeFile} target="_blank">MY RESUME</Resume>
                </HeroColumn>
                <HeroColumn width='30%'>
                    <HeroProfilePicWrapper 
                    as={motion.div}                   
                    variants={nameVariants}
                    initial='hidden'
                    animate='visible'>
                        <HeroProfilePic src={image} />
                    </HeroProfilePicWrapper>
                </HeroColumn>
            </HeroContainer>
            }

            {/* FOR ABOUT */}
            { section==='about' && 
            <HeroContainer imgStart={imgStart}>
                <HeroColumn width='40%'>
                    <HeroImageWrapper>
                        <HeroProfilePic src={image} />
                    </HeroImageWrapper>
                </HeroColumn>
                <HeroColumn width='60%'>
                    <HeroHello>Hello!</HeroHello>
                    <HeroDetails>
                    I am Lyzer Merck B. Bautista, a 3rd-year BS Computer Science student at the University of the Philippines Diliman.

                    I am a dedicated coding enthusiast eager to learn new technologies. I have experiences in algorithms and problem solving, web development, game development, database, and leadership trainings. I am looking to converge research, development, and communication skills as an intern.

                    <br/><br/>

                    I would love to hear from you. Feel free to contact me whether it's a project, internship opportunity, or just a chat.

                    </HeroDetails>

                </HeroColumn>
            </HeroContainer>
            }

            { section === 'projects' &&
            <HeroContainer imgStart={imgStart}>

                <ProjectButtonHeroColumn width='30%'>
                    <ProjectsButtonsContainer>

                        <ProjectsButtonWrapper onClick={() => clickHandler('dcs')} active={project === 'dcs'? true: false}>
                            <ProjectTitle active={project === 'dcs'? true: false}>
                                DCS Walkthorugh Simulator
                            </ProjectTitle>
                            <ProjectDescription>
                                This is a game that helps UPD BSCS students to be familiarized with the department.
                                <br/> <br/>
                                Role: Programmer
                            </ProjectDescription>
                        </ProjectsButtonWrapper>

                        <ProjectsButtonWrapper onClick={() => clickHandler('starbucks')} active={project === 'starbucks'? true: false}>
                            <ProjectTitle active={project === 'starbucks'? true: false}>
                                Starbucks Home Page Clone
                            </ProjectTitle>
                            <ProjectDescription>
                            Clone of Starbucks home page made from reactJS.
                            </ProjectDescription>
                        </ProjectsButtonWrapper>

                        <ProjectsButtonWrapper onClick={() => clickHandler('siteleaf')} active={project === 'siteleaf'? true: false}>
                            <ProjectTitle active={project === 'siteleaf'? true: false}>
                                SiteLeaf Home Page Clone
                            </ProjectTitle>
                            <ProjectDescription>
                                Clone of SiteLeaf home page made from reactJS.
                            </ProjectDescription>
                        </ProjectsButtonWrapper>

                    </ProjectsButtonsContainer>
                </ProjectButtonHeroColumn>

                <ProjectImageHeroColumn width='70%'>

                    <ProjectPreviewWrapper active={project === 'dcs'? true: false}>
                        <ProjectPreviewImage src={DCS}/>
                    </ProjectPreviewWrapper>

                    <ProjectPreviewWrapper href="https://mercklyzer.github.io/starbucks/" target="_blank" active={project === 'starbucks'? true: false}>
                        <ProjectPreviewImage src={Starbucks}/>
                    </ProjectPreviewWrapper>
                    
                    <ProjectPreviewWrapper href="https://mercklyzer.github.io/siteleaf-clone/" target="_blank" active={project === 'siteleaf'? true: false}>
                        <ProjectPreviewImage src={SiteLeaf}/>
                    </ProjectPreviewWrapper>

                </ProjectImageHeroColumn>
            </HeroContainer>
            }



        </HeroSection>
    )
}

export default Hero
