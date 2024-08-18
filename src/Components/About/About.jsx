import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("/about/aboutImage.png")} alt="" />
            </div>
        </section>
    )
}

export default About