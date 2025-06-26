import { useState, useRef } from 'react'


const Accordion = ({id, label, instagram, design, blogs, icon, color}) => {
    
    const [accordionOpen, setAccordionOpen] = useState(false)
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({left: -300, behavior: 'smooth'})
    }
   
    const scrollRight = () => {
        scrollRef.current?.scrollBy({left: 300, behavior: 'smooth'})
    }

    return (
        <div 
            key={id} 
            className={`border-b border-white/10 hover:-translate-y-1 transition-all cursor-pointer py-4 px-1`}
        >
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                className={"flex justify-between items-center w-full cursor-pointer"}
            >
                <div className={`text-2xl lg:text-4xl self-center bg-clip-text text-transparent ml-3 ${color}`}>
                    {icon}
                </div>
                <span className={`font-semibold ${accordionOpen ? 'text-blue-500' : 'text-gray-300'}`}>{label}</span>
                <svg
                    className="fill-blue-500 shrink-0 mr-3"
                    width="22"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        y="10"
                        width="22"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                    }`}
                    />
                    <rect
                        y="10"
                        width="22"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                </svg>
            </button>
            <div className={`transition-all duration-300 ease-in-out text-sm text-gray-700 overflow-hidden ${accordionOpen ? 'max-h-[650px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <div className="relative w-full">
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 text-gray-100 py-2 px-5 p-2 rounded text-xl hover:bg-blue-500/70 cursor-pointer hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                    &#60;
                </button>
                <div
                    ref={scrollRef} 
                    className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth hide-scrollbar min-w-0 gap-3 px-10"
                >
                        {instagram}
                        {design}
                        {blogs}
                </div>
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 z-30 bg-blue-500/80 text-gray-100 py-2 px-5 p-2 rounded text-xl hover:bg-blue-500/70 cursor-pointer hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                    &#62;
                </button>
            </div>
        </div>
        </div>
    )
}

export default Accordion