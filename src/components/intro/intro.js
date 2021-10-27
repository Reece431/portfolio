import React from 'react';
import './intro.css';
import self01 from '../../data/img/self01.png'; 

const intro = () => {
    return ( 
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello, My name is</h2>
                        <h1 className="i-name">Reece Farnworth</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">React enthusiastic</div>
                                <div className="i-title-item">Content Creator</div>
                                <div className="i-title-item">Amateur Pickler</div>
                                <div className="i-title-item">Human Being</div>
                            </div>
                        </div>
                        <div className="i-desc">
                            A self taught web developer with an ever-hungry appetite for learning new skills while continuing to grow my existing catalogue.
                        </div>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={self01} alt="Developer pose" className="i-img" />
                </div>
            </div>
        </div>
    )
}

export default intro
