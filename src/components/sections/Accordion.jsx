import { useState } from 'react'


const Accordion = ({id, label, instagram, design, blogs, icon, color}) => {

    console.log(label)
    
    const [accordionOpen, setAccordionOpen] = useState(false)

   console.log(blogs)
    
    return (
        <div key={id} className={`border-b border-white/10 hover:-translate-y-1 transition-all cursor-pointer py-4 px-1`}>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className={"flex justify-between items-center w-full cursor-pointer"}>
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
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-700 ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth hide-scrollbar min-w-0 gap-2">
                    {instagram}
                    {design}
                    {blogs}
                </div>
            </div>
        </div>
    )
}

export default Accordion