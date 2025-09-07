import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'
import Splash from './Splash'
import MatrixBackground from './MatrixBackground'
import About from './About'
import Team from './Team'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <section className="splash-screen-octobit">
        <Splash/>
        <MatrixBackground/>
      </section>
      <About/>
      <section id="equipe"><Team/></section>
      <section id="projetos"><Projects/></section>
      <section id="contato"><Contact/></section>
      <Footer/>
    </>
  )
}

export default App
