import { FaLinkedin, FaEnvelope} from 'react-icons/fa6';

const Footer = () => {
    
    return (
        <section id='about' className="mb-5">
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4">
                <div className='flex justify-between'>
                    <div className='md:hidden text-blue-500 text-4xl'>
                        <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="mb-4 hover:text-gray-300 text-4xl hover:-translate-y-1 transition-all">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className='md:hidden text-blue-500 text-4xl'>
                        <a href="mailto:jazmin.a.buffington@gmail.com" className="mb-4 hover:text-gray-300 text-4xl hover:-translate-y-1 transition-all">
                            <FaEnvelope/>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-gray-300 text-xs text-center mt-5'>{new Date().getFullYear()} Social Buffington. All rights reserved.</p>
        </section>
    )
}

export default Footer