import { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { MY_WORK, MY_WORK_TOP } from '../../constants/index'


const Work = () => {

    // const [activeTab, setActiveTab] = useState(0)

    // const renderContent = section => {
    //     if (section.id === 0) {
    //         return (
    //             <div className="flex snap-x snap-mandatory overflow-x-auto gap-1 pb-4 scroll-smooth hide-scrollbar">
    //                 {section.content.map((instagram, index) => (
    //                     <div key={index}
    //                     className="snap-center shrink-0 w-[92vw] max-w-md rounded-lg bg-white p-2">
    //                         <InstagramEmbed url={instagram} width="100%" />
    //                     </div>
    //                 ))}
    //             </div>
    //         )
    //     } else if (section.id === 1) {
    //         return (
    //             <div className="flex snap-x snap-mandatory overflow-x-auto gap-2 pb-4 scroll-smooth 
    //             hide-scrollbar items-start">
                    
    //                 <img key={'one'} src={section.content[0]}
    //                     className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
    //                 <img key={'two'} src={section.content[1]}
    //                 className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
    //                 <div className='flex flex-col gap-[.6rem]'>
    //                     <img key={'three'} src={section.content[2]}
    //                     className="snap-center shrink-0 w-[75vw] max-w-md rounded-lg object-cover"/>
    //                     <img key={'four'} src={section.content[5]}
                     
    //                     className="snap-center max-w-md rounded-lg object-cover w-[50%]"/>
    //                 </div>
    //                 <div className='flex flex-col gap-[.6rem]'>
    //                     <img key={'five'} src={section.content[3]}
    //                     className="snap-center shrink-0 w-[83.5vw] max-w-md rounded-lg object-cover"/>
    //                     <img key={'six'} src={section.content[4]}
                     
    //                     className="snap-center shrink-0 w-[83.5vw] max-w-md rounded-lg object-cover"/>
    //                 </div>
                     
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="flex snap-x snap-mandatory overflow-x-auto gap-2 pb-4 scroll-smooth hide-scrollbar">
    //                 {section.content.map((blog, index) => (
    //                 <a href={blog.url}><div key={index} 
    //                 className="snap-center shrink-0 flex flex-col w-[75vw] max-w-md rounded-lg bg-white 
    //                 shadow-md p-4 text-center">
    //                     <img src={blog.image} className="w-full h-full object-cover rounded-md mb-4"
    //                     alt={`blog-${index}`}/>
    //                     <p className="text-gray-700 text-sm">{blog.description}</p>
    //                 </div></a> ))}
    //             </div>
    //         )
    //     }
    // }

    return (
        <section id='work' className='flex items-center justify-center mb-40'>
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] mx-auto px-4">
            <h2 className="text-3xl text-center font-bold mb-8 text-gray-300"><span className="bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent">My</span> Work</h2>
            <div className='flex-col glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 
            transition-all text-gray-300 mb-8'>
                 <div className='flex flex-col md:flex-row w-full mb-6 md:mb-8'>
                    <p className='mb-4 md:pr-8' style={{ whiteSpace: "pre-line" }}>{MY_WORK_TOP[0].description}</p>
                    <div>
                        <img src={MY_WORK_TOP[0].image} alt="" className='rounded-xl shadow-xl' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse w-full sm:pr-6 md:mb-0 items-center'>
                    <p className='mb-4'>{MY_WORK_TOP[1].description}</p>
                    <div>
                        <img src={MY_WORK_TOP[1].image} alt="" className='rounded-xl shadow-xl md:pr-8'/>
                    </div>
                </div>
            </div>
            </div>
{/*    /div>
            <div className='flex justify-center'>
                <div className='flex flex-wrap'>
                    {MY_WORK.map((type, index) => (
                        <button 
                            key={index}
                            className={`py-3 px-6 font-medium text-sm duration-300 cursor-pointer rounded-t-lg
                            ${activeTab === index ? "text-gray-300 bg-gray-900/85" : 
                            "text-gray-500 hover:text-gray-300 hover:bg-custom hover:bg-opacity-10"} `}
                            onClick={() => setActiveTab(index)}>
                            {type.label}
                        </button>
                    ))}
                </div>
            </div> */}
    
            {/* <div className='flex items-center overflow-visible py-3 px-3 bg-gray-900/85 shadow-2xl'>
                {renderContent(MY_WORK[activeTab])}
            </div>
            </div> */}
        </section>
    )
}

export default Work