import { useState, useEffect } from 'react'

const Navbar = ({menuOpen, setMenuOpen}) => {
    const [lastScrollY, setLastScrollY] = useState(0)  
    const [showNavbar, setShowNavbar] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }

            setIsScrolled(window.scrollY > 50)
            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav
            className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10  transition-transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-slate-950/55' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a 
                        href="#home" 
                        className="font-mono text-md md:text-lg font-bold text-gray-300">
                            social
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">·buffington</span>
                    </a>

                    <div
                        className="w-7 h-7 relative cursor-pointer z-40 md:hidden text-2xl text-gray-300"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#home" 
                            className="text-gray-300 hover:text-white transition-colors">
                                Home
                        </a>
                        <a 
                            href="#about" 
                            className="text-gray-300 hover:text-white transition-colors">
                                About
                        </a>
                        <a 
                            href="#work" 
                            className="text-gray-300 hover:text-white transition-colors">
                                My Work
                        </a>
                        <a 
                            href="#gallery" 
                            className="text-gray-300 hover:text-white transition-colors">
                                Gallery
                        </a>
                        <a 
                            href="#contact" 
                            className="text-gray-300 hover:text-white transition-colors">
                                Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
