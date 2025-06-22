import Accordion from './Accordion'
import {MY_WORK} from '../../constants'
import { InstagramEmbed } from 'react-social-media-embed'

const WorkSections = () => {

    console.log(MY_WORK.content)

    const workSection = MY_WORK.map((section, index) => (
        
        <Accordion
            id={index} 
            label={section.label}
            instagram={section.id === 0 ? section.content.map((item, index) => (
                <div key={index} className="snap-center shrink-0 max-w-md rounded-lg pb-2">
                    <InstagramEmbed url={item}/> 
                </div>
            )): ''}
            design={section.id === 1 ? section.content.map((item, index) => (
                <div className=''>
                    <img key={index} src={item} alt={`design picture ${index}`}/>
                </div>
                
            )): ''}
            blogs={section.id === 2 ? section.content.map((post, index) => (
                
                    <div key={index} className='p-2 flex flex-col'>
                        <img src={post.image} className='rounded-t-lg'/>
                        <p className='bg-white rounded-b-lg'>{post.description}</p>
                    </div>
                
                
            )): ''}
            
        />
    ))
    
    return (
        
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-3 pt-1 text-white rounded-xl text-xl mb-40">
                {workSection}
             </div>
            
       
    )
}

export default WorkSections