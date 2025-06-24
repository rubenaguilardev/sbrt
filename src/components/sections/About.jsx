import { profilePicture } from "../../constants"
import RevealOnScroll from "../RevealOnScroll"

const About = () => {
    return (
        <section id='about' className="flex items-center justify-center mb-20">
            <RevealOnScroll>
                <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-5 md:mb-7 text-gray-300">About <span className="bg-gradient-to-r from-blue-500 to-purple-600 
                    bg-clip-text text-transparent">Me</span></h2>
                    
                    <div className="flex flex-col md:flex-row">
                        
                        <div className="flex justify-center items-center w-full md:w-3/4 lg:w-1/2 mb-5 md:pr-7 md:mb-0">
                            <img src={profilePicture} alt="picture of Jazmin" className="rounded-xl shadow-xl"/>
                        </div>
                        <div className="flex flex-col justify-center md:w-3/4 text-gray-300">
                            <p className="mb-5 md:mb-7">
                                When I'm not conquering the marketing world, you can find me exploring my love for culinary 
                                arts and soaking up precious moments with my family.
                            </p>
                            <p>Intrigued?  Let's Connect!</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About