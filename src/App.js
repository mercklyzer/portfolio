import React from 'react'
import GlobalStyle from './GlobalStyles'
import {
  Navbar,
  Footer,
} from './components'

import Home from './sections/Home/Home'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'


function App() {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Home/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
