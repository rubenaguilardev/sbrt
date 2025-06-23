import { TESTIMONIAL_CONTENT } from "../../constants"
import { useState } from 'react'

const Testimonials = () => {

    const [activeTab, setActiveTab] = useState(0)

    const renderContent = (content => (
        <div className="text-gray-300 p-4 rounded-xl w-[320px] h-[490px] bg-black/60"
        >
            <h2>{content.author}</h2>
            <h3>{content.company}</h3>
            <p>{content.testimonial}</p>
        </div>
    ))

    const prevTab = () => {
        setActiveTab(prevIndex => (
            prevIndex === 0 ? TESTIMONIAL_CONTENT.length - 1: prevIndex - 1
        )) 
    }

    const nextTab = () => {
        setActiveTab(prevIndex => (
            prevIndex === TESTIMONIAL_CONTENT.length - 1 ? 0 : prevIndex + 1
        ))
    }

    return (
        <section className='flex items-center justify-center mb-40'>
             <div className="flex flex-col gap-5 max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-3">
                <div className="flex">
                {TESTIMONIAL_CONTENT.map((section, index) => (
                    <div className="">
                    <button onClick={index === 1 ? '' : index === 0 ? prevTab : nextTab}
                    className={`text-gray-300 border border-white/10 py-3 px-6 cursor-pointer rounded-xl ${activeTab === index ? '' : ''}`}
                    key={index}>
                        {section.label}
                    </button>
                    </div>
                ))}
            </div> 
            <div className="border border-white/10 p-3 rounded-xl text-gray-30"
            style={{backgroundImage:`url(${TESTIMONIAL_CONTENT[activeTab].background})`}}>
                {renderContent(TESTIMONIAL_CONTENT[activeTab])}
            </div>
            </div> 
            
        </section>

    )   
}

export default Testimonials