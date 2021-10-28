import React from 'react';
import './intro.css';
import self01 from '../../data/img/self01.png'; 

const intro = () => {
    return ( 
        <div tabIndex="0" aria-label="intro-section" role="region">
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper" tabIndex="-1" aria-label="intro-information">
                        <h2 className="i-intro" tabIndex="0">Hello, My name is</h2>
                        <h1 className="i-name" tabIndex="0">Reece Farnworth</h1>
                        <div className="i-title" tabIndex="0" aria-label="list-of-personal-titles-5-items">
                            <div className="i-title-wrapper">
                                <div className="i-title-item" tabIndex="0">Web Developer</div>
                                <div className="i-title-item" tabIndex="0">React enthusiastic</div>
                                <div className="i-title-item" tabIndex="0">Content Creator</div>
                                <div className="i-title-item" tabIndex="0">Amateur Pickler</div>
                                <div className="i-title-item" tabIndex="0">Human Being</div>
                            </div>
                        </div>
                        <div className="i-desc" tabIndex="0">
                            A self taught web developer with an ever-hungry appetite for learning new skills while continuing to grow my existing catalogue.
                        </div>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    {/* without role not recognised as img */}
                    <img src={self01} alt="Developer pose" className="i-img" tabIndex="0" role="img"/>
                </div>
            </div>
        </div>
    )
}

export default intro
