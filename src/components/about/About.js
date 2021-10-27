import React, {useContext} from 'react';
import { ModeContext } from '../../context';

import './about.css'
import self02 from '../../data/img/self02.jpeg';

const About = () => { 

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;
    return ( 
        <div className="a">
            <div className="a-left">
                <div className="a-card-bg" style={{background: darkMode && '#696969'}}></div>
                <div className="a-card">
                    <img src={self02} alt="developer pose 2" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I like to build things for the web.</p>
                <p className="a-desc">
                    Hi, I'm Reece a self taught web developer with ever-hungry appetite for learning new skills while continuing to grow my existing catalogue.
                </p>
                <p className="a-sub">
                    Skill set:
                </p>
                <p className="a-skills">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-sass"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>
                </p>
            </div>
        </div>
    )
}

export default About
