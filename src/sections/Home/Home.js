import React from 'react'
import {Hero} from '../../components'
import Night from '../../videos/Night.mp4'
import ProfilePic from '../../images/id.png'

function Home() {
    return (
        <div id='home'>
            <Hero background={Night} image={ProfilePic} imgStart={false} section='home'/>
        </div>

    )
}

export default Home
