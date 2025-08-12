import { profilePicture } from "../../constants"
import RevealOnScroll from "../RevealOnScroll"
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const About = () => {
    return (
        <section id='about' className="flex items-center justify-center mb-30">
            <RevealOnScroll>
                <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4 md:px-1">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex justify-center items-center w-full md:w-[82%] lg:w-1/2 mb-5 md:pr-7 md:mb-0">
                            <img src={profilePicture} alt="picture of Jazmin" className="rounded-xl shadow-xl"/>
                        </div>
                        <div className="flex flex-col justify-evenly md:w-3/4 text-gray-300">
                            <div>
                                <h2 className="text-3xl text-center md:text-left font-bold mb-5 md:mb-7 xl:mb-0 text-gray-300"><span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">About </span>Me</h2> 
                            </div>
                            <div>
                                <p className="mb-5 text-[.95rem] lg:mb-6">
                                Hi, nice to meet you. I’m a marketing strategist with over a decade of experience bringing brands to life through social media, digital campaigns, photography, design, and events that get people talking. My approach blends creativity with strategy—turning big ideas into measurable impact.
                                </p>
                                <p className="mb-5 text-[.95rem] lg:mb-7">
                                    When I’m not crafting campaigns, you’ll find me in the kitchen experimenting with flavors or enjoying time with my favorite people.
                                </p>
                                <div className="flex text-[.95rem] items-center gap-5 mb-5 lg:mb-7">
                                    <p>Intrigued? Let’s connect and create something worth remembering.</p>  
                                </div>
                                <div className='flex justify-center ml-20 text-4xl text-blue-500 md:hidden gap-2'>
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
                                    <a 
                                        className="hidden md:block w-fit bg-blue-500/80 text-gray-100 py-2 px-5 rounded font-medium transition realtive overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]" 
                                        href="https://www.linkedin.com/in/jazmin-aguilar-buffington/">
                                        Linkedin
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About