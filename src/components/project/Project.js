import React,{useContext} from 'react';
import './project.css';
import { ModeContext } from '../../context';

const Project = ({name, img, link, clink, desc}) => {

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;

    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-dot"></div>
                <div className="p-dot"></div>
                <div className="p-dot"></div>
            </div>
            <div className="p-wrapper">
                <img src={img} alt={name} className="p-img" />
                <div className="p-card">
                    <h4 className="p-card-title">
                        {name}
                    </h4>
                    <p className="p-card-desc">
                        {desc}
                    </p>
                    <div className="btn-wrapper">
                        <a className="p-btn" href={link} target="_blank" style={{
                            color: darkMode ? '#fff' : '#222',
                            borderColor: darkMode ? '#fff' : '#222'}}>
                                Site
                            </a>
                        <a className="p-btn" href={clink} target="_blank" style={{
                            color: darkMode ? '#fff' : '#222',
                            borderColor: darkMode ? '#fff' : '#222'}}>
                                Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
