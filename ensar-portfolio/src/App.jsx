import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div div className='App'>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
     
      <Contact/>
    </div>
  )
}

export default App