import { FaLinkedin } from 'react-icons/fa6';

const Sidebars = () => {
  const email = 'Jazmin.a.buffington@gmail.com';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-51 hidden md:flex pointer-events-none">
      <div className="w-full md:px-3 lg:px-8 flex justify-between">
        <div className="flex flex-col items-center justify-end text-blue-500 pointer-events-auto">
          <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-gray-300 transition text-2xl">
            <FaLinkedin /></a>
          
          <div className="w-px h-30 mt-4 bg-gradient-to-t from-blue-500 to-purple-600 
                bg-clip-border text-transparent"></div>
        </div>
        <div className="flex flex-col items-center pointer-events-auto bg-gradient-to-b from-blue-500 to-purple-600 
                bg-clip-text text-transparent">
          <a href={`mailto:${email}`}
            className="mb-4 text-sm tracking-widest hover:text-gray-300 transition"
            style={{ writingMode: 'vertical-rl' }}>{email}</a>
          <div className="w-px h-30 mt-4 bg-gradient-to-t from-blue-500 to-purple-600 
                bg-clip-border text-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebars
