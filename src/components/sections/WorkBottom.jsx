import { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { MY_WORK } from '../../constants/index'


const WorkBottom = () => {

    const [activeTab, setActiveTab] = useState(0)

    const renderContent = section => {
        if (section.id === 0) {
            return (
                <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth hide-scrollbar min-w-0">
                    {section.content.map((instagram, index) => (
                        <div key={index} className="snap-center shrink-0 max-w-md rounded-lg">
                            <InstagramEmbed url={instagram}/>
                        </div>
                    ))}
                </div>
            )
        } else if (section.id === 1) {
            return (
                <div className="flex snap-x snap-mandatory overflow-x-auto gap-2 scroll-smooth 
                hide-scrollbar items-start">
                    <img key={'one'} src={section.content[0]}
                        className="snap-center shrink-0 max-w-md rounded-lg object-cover"/>
                    <img key={'two'} src={section.content[1]}
                    className="snap-center shrink-0 max-w-md rounded-lg object-cover"/>
                    <div className='flex flex-col gap-[.6rem]'>
                        <img key={'three'} src={section.content[2]}
                        className="snap-center shrink-0 max-w-md rounded-lg object-cover"/>
                    </div>
                    <div className='flex flex-col gap-[.5rem]'>
                        <img key={'five'} src={section.content[3]}
                        className="snap-center shrink-0  max-w-md rounded-lg object-cover"/>
                        <img key={'six'} src={section.content[4]}
                        className="snap-center shrink-0 max-w-md rounded-lg object-cover"/>
                        <img key={'four'} src={section.content[5]}
                        className="snap-center max-w-md rounded-lg object-cover"/>
                    </div>    
                </div>
            )
        } else {
            return (
                <div className="flex overflow-x-auto gap-2 scroll-smooth snap-x snap-mandatory px-2 hide-scrollbar">
                    <div className="flex flex-col gap-2 snap-center">
                    {section.content.slice(0, 2).map((blog, index) => (
                        <a key={index} href={blog.url}>
                            <div className="rounded-lg bg-white shadow-md p-3 text-center w-[70vw] sm:w-[35vw]">
                                <div className="w-full overflow-hidden rounded-md mb-4">
                                    <img src={blog.image} alt={`blog-${index}`} className='w-full h-full'/>
                                </div>
                                <p className="text-gray-700 text-xs">{blog.description}</p>
                            </div>
                        </a>))}
                    </div>

                    <div className="flex flex-col gap-2 snap-center">
                    {section.content.slice(2, 4).map((blog, index) => (
                        <a key={index + 2} href={blog.url}>
                            <div className="rounded-lg bg-white shadow-md p-3 text-center w-[70vw] sm:w-[35vw]">
                                <div className="w-full overflow-hidden rounded-md mb-4">
                                    <img src={blog.image} alt={`blog-${index + 2}`} className='w-full h-full'/>
                                </div>
                                <p className="text-gray-700 text-xs w-[86%]">{blog.description}</p>
                            </div>
                        </a>))}
                    </div>
                </div>

            )
        }
    }

    return (
        <section className="flex items-center justify-center w-full mb-40">
            <div className='max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto p-3 w-full'>
                <div className='flex justify-center min-w-0'>
                    <div className='flex flex-wrap'>
                        {MY_WORK.map((type, index) => (
                        <button 
                            key={index}
                            className={`py-3 px-6 font-medium text-sm duration-300 cursor-pointer rounded-t-lg
                            ${activeTab === index ? `text-blue-500 border border-blue-500/50 border-b-0` 
                            : "text-gray-500 hover:text-gray-300 transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"}`}
                            onClick={() => setActiveTab(index)}>
                                {type.label}
                        </button>))}
                    </div>
                </div>

                <div className='flex items-center overflow-visible p-4 sm:p-5 md:p-7 rounded-xl border border-white/10 shadow-2xl'>
                    {renderContent(MY_WORK[activeTab])}
                </div>
            </div>
            
        </section>
    )
}

export default WorkBottom
