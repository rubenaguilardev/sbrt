import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import SideBars from './components/SideBars'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Work from './components/sections/Work'

const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  

  return (
  <div id="home" className="overflow-x-hidden antialiased scroll-smooth relative">

    <div className="fixed inset-0 -z-10">
      <div className="w-full h-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          </div>
        </div>
      </div>
    </div>

    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} text-gray-00`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideBars />
      <Home />
      <About />
      <Skills />
      <Work/>
    </div>
    
  </div>
);

}

export default App