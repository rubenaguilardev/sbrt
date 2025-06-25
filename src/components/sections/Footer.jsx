import { FaLinkedin, FaEnvelope} from 'react-icons/fa6'

const Footer = () => {
    
    return (
        <section id='about' className="mb-5">
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4">
                <div className='flex justify-between text-4xl text-blue-500 md:hidden'>
                    <div>
                        <a href="https://www.linkedin.com/in/jazmin-aguilar-buffington/" className="text-4xl">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:jazmin.a.buffington@gmail.com">
                            <FaEnvelope/>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-gray-500 text-xs text-center mt-6'>{new Date().getFullYear()} Social Buffington. All rights reserved.</p>
        </section>
    )
}

export default Footer