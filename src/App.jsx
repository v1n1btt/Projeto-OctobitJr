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

const tabs = {
  index: "inicio",
  about: "sobre",
  team: "equipe",
  projects: "projetos",
  contact: "contato",
}

function App() {
  const [activeTab, setActiveTab] = useState(tabs.index);

  return (
    <>
      <Header setActiveTab={setActiveTab} tabs={tabs}/>
      {activeTab === tabs.index && <section className="splash-screen-octobit"><Splash/><MatrixBackground/></section>}
      {activeTab === tabs.about && <About/>}
      {activeTab === tabs.team && <section id="equipe"><Team/></section>}
      {activeTab === tabs.projects && <section id="projetos"><Projects/></section>}
      {activeTab === tabs.contact && <section id="contato"><Contact/></section>}
      <Footer/>
    </>
  )
}

export default App
