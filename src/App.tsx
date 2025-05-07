import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import { Navbar } from './components/Navbar'
import { Mobileview } from './components/Mobilemenu'
import Home from './components/sections/Home'
import { About } from './components/sections/About'
import { Project } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { AuroraBackground } from './components/aurora-background'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <AuroraBackground showRadialGradient>
        <div
          className={`min-h-screen transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } bg-black text-gray-100 relative z-10`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Mobileview menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </AuroraBackground>
    </>
  )
}

export default App
