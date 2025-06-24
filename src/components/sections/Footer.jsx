import { FaLinkedin, FaEnvelope} from 'react-icons/fa6';

const Footer = () => {
    
    return (
        <section id='about' className="mb-5">
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4">
                <div className='flex justify-between'>
                <div className='md:hidden text-blue-500 text-4xl'>
                     <FaLinkedin/>
                </div>
               
                <p className='text-gray-300 text-xs self-end'>{new Date().getFullYear()} Social Buffington. All rights reserved.</p>
                <div className='md:hidden text-blue-500 text-4xl'>
                     <FaEnvelope/>
                </div>
                </div>
            </div>
            
        </section>
    )
}

export default Footer