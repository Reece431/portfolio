import React, {useContext} from 'react';
import { ModeContext } from '../../context';

import './toggle.css'

const Toggle = () => {

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;
    const Clicked = () => {
        mode.dispatch({type: "TOGGLE"})
    };

    return (
        <div className="t" tabIndex="0" aria-label={darkMode ? 'light-mode' : 'dark-mode'}>
            <i className="fas fa-sun t-icon"></i>
            <i className="fas fa-moon t-icon"></i>
            <div className="t-button" onClick={() => Clicked()} style={{left: darkMode ? 0 : '25px'}} tabIndex="0" role="button"></div>
        </div>
    )
}

export default Toggle
