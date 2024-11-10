import React from 'react'
import Home from './components/home'
import About from './components/about'
import Project from './components/project'
import Services from './components/service'
import Skills from './components/skill'
import Contact from './components/contact'
function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}
export default page;