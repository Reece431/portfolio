import React,{useContext} from 'react';
import './project.css';
import { ModeContext } from '../../context';

const Project = ({name, img, link, clink, desc}) => {

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;

    return (
        <div className="p" tabIndex="0" aria-label="project-card">
            <div className="p-browser">
                <div className="p-dot"></div>
                <div className="p-dot"></div>
                <div className="p-dot"></div>
            </div>
            <div className="p-wrapper">
                <img src={img} alt={name} className="p-img" tabIndex="-1"/>
                <div className="p-card">
                    <h4 className="p-card-title" tabIndex="0">
                        {name}
                    </h4>
                    <p className="p-card-desc" tabIndex="0">
                        {desc}
                    </p>
                    <div className="btn-wrapper" tabIndex="0" aria-label="links-to-site-and-code">
                        <a className="p-btn" href={link} target="_blank" style={{
                            color: darkMode ? '#fff' : '#222',
                            borderColor: darkMode ? '#fff' : '#222'}} tabIndex="0" aria-label="site">
                                Site
                            </a>
                        <a className="p-btn" href={clink} target="_blank" style={{
                            color: darkMode ? '#fff' : '#222',
                            borderColor: darkMode ? '#fff' : '#222'}} tabIndex="0" aria-label="code">
                                Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
