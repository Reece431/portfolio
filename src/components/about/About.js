import React, {useContext} from 'react';
import { ModeContext } from '../../context';

import './about.css'
import self02 from '../../data/img/self02.jpeg';

const About = () => { 

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;
    return ( 
        <div className="a" tabIndex="0" aria-label="about-section" role="region"> 
            <div className="a-left" tabIndex="-1">
                <div className="a-card-bg" style={{background: darkMode && '#696969'}}></div>
                <div className="a-card">
                    <img src={self02} alt="developer pose 2" className="a-img" tabIndex="-1" role="img"/>
                </div>
            </div>
            <div className="a-right" tabIndex="0" aria-label="about-information">
                <h1 className="a-title" tabIndex="0">About Me</h1>
                <p className="a-sub" tabIndex="0">I like to build things for the web.</p>
                <p className="a-desc" tabIndex="0">
                    Hi, I'm Reece a self taught web developer with ever-hungry appetite for learning new skills while continuing to grow my existing catalogue.
                </p>
                <p className="a-sub">
                    Skill set:
                </p>
                <p className="a-skills" tabIndex="0" aria-label="languages-and-frameworks-I-work-in-5-items">
                <i class="fab fa-html5"tabIndex="0" aria-label="HTML5"></i>
                <i class="fab fa-css3-alt" tabIndex="0" aria-label="CSS3"></i>
                <i class="fab fa-sass" tabIndex="0" aria-label="sass"></i>
                <i class="fab fa-js-square" tabIndex="0" aria-label="JS"></i>
                <i class="fab fa-react" tabIndex="0" aria-label="React"></i>
                </p>
            </div>
        </div>
    )
}

export default About
