import { FaLinkedin } from 'react-icons/fa6';

const Sidebars = () => {
  const email = 'jazmin.a.buffington@gmail.com';

  return (
    <div className="max-w-7xl mx-auto px-4">
        <div className="fixed bottom-0 left-0 right-0 z-51 hidden md:flex pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-4 flex justify-between">
            <div className="flex flex-col items-center justify-end text-blue-500 pointer-events-auto">
            <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-gray-300 text-2xl hover:-translate-y-1 transition-all">
                <FaLinkedin /></a>
            
            <div className="w-px h-30 mt-4 bg-gradient-to-t border-white/10 border
                    bg-clip-border text-transparent"></div>
            </div>
            <div className="flex flex-col items-center pointer-events-auto bg-gradient-to-b from-blue-500 to-purple-600 
                    bg-clip-text text-transparent hover:-translate-y-1 transition-all">
            <a href={`mailto:${email}`}
                className="mb-4 text-sm tracking-widest hover:text-gray-300 transition"
                style={{ writingMode: 'vertical-rl' }}>{email}</a>
            <div className="w-px h-30 mt-4 border-white/10 border
                    bg-clip-border text-transparent"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebars
