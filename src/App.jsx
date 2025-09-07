import { useState } from 'react'
import Header from './Header'
import Splash from './Splash'
import MatrixBackground from './MatrixBackground'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section className="splash-screen-octobit">
        <Splash />
        <MatrixBackground />
      </section>
      <About />
    </>
  )
}

export default App
