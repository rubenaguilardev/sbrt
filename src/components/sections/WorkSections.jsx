import Accordion from './Accordion'
import { MY_WORK } from '../../constants'
import { InstagramEmbed } from 'react-social-media-embed'
import { useState } from 'react'

const WorkSections = () => {

    const [selectedImage, setSelectedImage] = useState(null)

    const workSection = MY_WORK.map((section, index) => (
        
        <Accordion
            id={index} 
            label={section.label}
            instagram={section.id === 0 && section.content.map((item, index) => (
                <div key={index} className="snap-center shrink-0 max-w-md rounded-lg transition-transform duration-300 hover:scale-102 mt-2">
                    <InstagramEmbed url={item}/> 
                </div>
            ))}

            design={section.id === 1 && section.content.map((item, index) => (
                <div key={index} className="cursor-pointer w-[300px] h-[350px] overflow-hidden rounded-lg flex-shrink-0" onClick={() => setSelectedImage(item)}>
                    <img key={index} src={item} alt={`design picture ${index}`} className="w-[140%] h-full object-cover object-top transition-transform duration-300 hover:scale-105"/>
                </div>
            ))}

            blogs={section.id === 2 && section.content.map((post, index) => (
                    <a href={post.url}>
                        <div key={index} className='flex flex-col pb-3 transition-transform duration-300 hover:scale-102 mt-1'>
                            <div className='w-[220px] md:w-[260px] object-fit'>
                                <img src={post.image} className='rounded-t-lg'/>
                            </div>
                            <p className='max-w-[260px] rounded-b-lg text-gray-700 text-center p-3 xl:p-5 text-sm bg-[whitesmoke]'>{post.description}</p>
                        </div>
                    </a>
            ))}
        />
    ))
    
    return (
        
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-3 pt-1 text-white rounded-xl text-xl mb-40">
                {workSection}
                {selectedImage && (
                <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4' 
                onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt='full view' className='max-w-full max-h-full rounded-lg' 
                    onClick={(e) => e.stopPropagation()}
                    />
                    <button onClick={() => setSelectedImage(null)} className='absolute top-6 right-6 text-blue-500 text-2xl'>&times;</button>
                </div>
                )}
             </div>
            
       
    )
}

export default WorkSections


