import { FaLinkedin } from 'react-icons/fa6';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-3 right-6 text-gray-100 text-4xl focus:outline-none cursor-pointer z-50 opacity-100"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-100 my-4 transform transition-transform duration-300
                            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-100 my-4 transform transition-transform duration-300
                            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                About
            </a>
            <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-100 my-4 transform transition-transform duration-300
                            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                Gallery
            </a>
            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-gray-100 my-4 transform transition-transform duration-300
                            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                Contact
            </a>
            <a
                href="https://www.linkedin.com/in/jazmin-aguilar-buffington/"
                onClick={() => setMenuOpen(false)}
                className={`text-4xl font-semibold text-gray-100 my-4 transform transition-transform duration-300
                            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
                <FaLinkedin/>
            </a>
        </div>
    )
}

export default MobileMenu
