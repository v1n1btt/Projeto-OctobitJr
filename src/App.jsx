import { act, useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'
import Splash from './Splash'
import MatrixBackground from './MatrixBackground'
import About from './About'
import Team from './Team'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import ToggleDarkMode from './ToggleDarkMode'

const tabs = {
  index: "inicio",
  about: "sobre",
  team: "equipe",
  projects: "projetos",
  contact: "contato",
}

function App() {
  const [activeTab, setActiveTab] = useState(tabs.index);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} darkMode={darkMode}/>
      {activeTab === tabs.index && <section className="splash-screen-octobit"><Splash darkMode={darkMode}/><MatrixBackground darkMode={darkMode}/></section>}
      {activeTab === tabs.about && <About darkMode={darkMode}/>}
      {activeTab === tabs.team && <section id="equipe"><Team darkMode={darkMode}/></section>}
      {activeTab === tabs.projects && <section id="projetos"><Projects darkMode={darkMode}/></section>}
      {activeTab === tabs.contact && <section id="contato"><Contact darkMode={darkMode}/></section>}
      <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Footer darkMode={darkMode}/>
    </>
  )
}

export default App
