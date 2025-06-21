import { profilePicture } from "../../constants"

const About = () => {
    return (
        <section id='about' className="flex items-center justify-center mb-40">
            <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-8 text-gray-300">About <span className="bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent">Me</span></h2>
                
                <div className="flex flex-col md:flex-row glass rounded-xl p-7 border-white/10 border hover:-translate-y-1 transition-all">
                    
                    <div className="flex w-full mb-6 sm:pr-6 md:mb-0">
                        <img src={profilePicture} alt="picture of Jazmin" className="rounded-xl shadow-xl"/>
                    </div>
                    <div className="flex flex-col justify-center md:w-3/4 text-gray-300">
                        <p className="mb-4">
                            When I'm not conquering the marketing world, you can find me exploring my love for culinary 
                            arts and soaking up precious moments with my family.
                        </p>
                        <p>Intrigued?  Let's Connect!</p>
                    </div>
                    
    
                </div>
            </div>
        </section>
    )
}

export default About