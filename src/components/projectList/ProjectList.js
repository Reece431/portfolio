import React,{useContext} from 'react';
import './projectList.css';
import Product from '../project/Project';
import { sites } from '../../data/sites';
import { ModeContext } from '../../context';

const ProjectList = () => {

    const mode = useContext(ModeContext);
    const darkMode = mode.state.darkMode;

    const spawnProjects = () => {
       return sites.map(({key, img, link, clink, alt, desc}) => (
            <Product key={key} name={alt} desc={desc} img={img} link={link} clink={clink}/>
        ))
    }

    return (
        <div className="pl" tabIndex="0" aria-label="project-section" role="region">
            <div className="pl-texts">
                <h1 className="pl-title" tabIndex="0">Projects</h1>
                <p className="pl-desc" tabIndex="0">
                    This is a showcase of my most recent work in a variety of styles, the cards below are projects I've built in my spare time to help me evolve as a developer or you can check out some of my professional work here:
                    <a href="https://github.com/Reece431" target="_blank" style={{
                            color: darkMode ? '#fff' : '#222',
                            borderColor: darkMode ? '#fff' : '#222'}}
                            tabIndex="0"
                            aria-label="link-to-my-github"
                    >

                        <i class="fab fa-github-alt pl-git"></i>
                    </a>
                </p>
            </div>
            <div className="pl-list" tabIndex="0" aria-label={`list of projects ${sites.length} items`}>
                {spawnProjects()}
            </div>
        </div>
    )
}

export default ProjectList
