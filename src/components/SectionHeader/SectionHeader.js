import React from 'react'
import {
    SectionHeaderContainer,
    SectionHeaderSection,
    SectionHeaderCaption,
    SectionHeaderDetails,
    SectionHeaderLine,
} from './SectionHeader.elements'


function SectionHeader({section, caption, details}) {
    return (
        <SectionHeaderContainer>
            <SectionHeaderSection>{section} </SectionHeaderSection>
            <SectionHeaderCaption>{caption}</SectionHeaderCaption>
            <SectionHeaderDetails>{details}</SectionHeaderDetails>
            <SectionHeaderLine/>
        </SectionHeaderContainer>
    )
}

export default SectionHeader
