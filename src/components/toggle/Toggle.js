import React, {useContext, useEffect} from 'react';
import { ModeContext } from '../../context';

import './toggle.css'

const Toggle = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(document.body.scrollTop);
        })
    })

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;
    const Clicked = () => {
        mode.dispatch({type: "TOGGLE"})
        console.log(darkMode)
    };

    return (
        <div className="t">
            <i className="fas fa-sun t-icon"></i>
            <i className="fas fa-moon t-icon"></i>
            <div className="t-button" onClick={() => Clicked()} style={{left: darkMode ? 0 : '25px'}}></div>
        </div>
    )
}

export default Toggle
