import { SKILLS } from "../../constants"
import { useState, useEffect } from 'react'
import { useSwipeable } from "react-swipeable"

const Skills = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(autoplay)
    }, [currentIndex])

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === 0 ? SKILLS.length - 1 : prevIndex - 1
        ))
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === SKILLS.length - 1 ? 0 : prevIndex + 1
        ))
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventScrollOnSwipe: true,
        trackMouse: true
    })


    return(
        <section className="max-w-full md:w-[42.5rem] lg:w-[56.4rem] h-[540px] xl:w-[70.5rem] w-full m-auto 
        relative group rounded-xl mb-40 shadow-2xl" 
            {...swipeHandlers}
        >
            <div className="relative w-full h-full">
                {SKILLS.map((skill, index)=> (
                    <img key={index} src={skill.image} alt={skill.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out md:rounded-xl
                    ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                ))}
                
                <div className="absolute inset-0 bg-black/50 md:rounded-xl z-20">

                    <div className="flex justify-center items-center md:justify-between h-full w-full">
                        <button 
                            onClick={prevSlide}
                            className="hidden md:flex bg-blue-500/80 text-gray-100 py-2 px-5 rounded text-xl transition realtive 
                            hover:bg-blue-500/70 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer ml-7">
                                &#60;
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-3xl font-semibold text-shadow-lg text-gray-100 mb-2">{SKILLS[currentIndex].title}</h2>
                            <p className="text-shadow-lg text-gray-100 px-10 md:px-0">{SKILLS[currentIndex].description}</p>
                        </div>
                        <button 
                            onClick={nextSlide}
                            className="hidden md:flex bg-blue-500/80 text-gray-100 py-2 px-5 rounded text-xl transition realtive 
                            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] mr-10 cursor-pointer">
                                &#62;
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                    {SKILLS.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 
                                ${index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-white/30'}`}
                        />
                    ))}
                </div>
                
            </div>
            
        </section>
    )
}

export default Skills