import { useState } from 'react'


const Accordion = ({id, label, instagram, design, blogs}) => {
    
    const [accordionOpen, setAccordionOpen] = useState(false)

   console.log(blogs)
    
    return (
        <div key={id} className="border border-white/10 mb-2 rounded-lg p-5">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between items-center w-full text-gray-300">
                <span>{label}</span>
                <svg
                    className="fill-blue-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                    }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth hide-scrollbar min-w-0">
                    {instagram}
                    {design}
                    {blogs}
                </div>
               

            </div>
        </div>
    )
}

export default Accordion