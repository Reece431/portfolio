import React, {useContext} from 'react';

import About from './components/about/About'
import Intro from './components/intro/intro'
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ModeContext } from './context';

const App = () => {

  const mode = useContext(ModeContext);
  const darkMode = mode.state.darkMode;
  return (
    <div style={{color: darkMode ? '#fff' : '#222', background: darkMode ? '#222' : '#fff'}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  )
}

export default App
