import { useState } from 'react'
import './App.css'
import Header from './Header'
import Splash from './Splash'
import MatrixBackground from './MatrixBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Splash />
      <MatrixBackground />
    </>
  )
}

export default App
