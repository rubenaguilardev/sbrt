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
        <section className="max-w-full md:max-w-2xl lg:max-w-[54rem] h-[540px] w-full m-auto border-white/10 border relative group 
        rounded-xl mb-20" 
        {...swipeHandlers}>
            <div style={{backgroundImage: `url(${SKILLS[currentIndex].image})`}} 
            className="w-full h-full shadow-2xl bg-center bg-opacity-0 md:rounded-xl
            bg-cover duration-500">
                <div className="absolute inset-0 bg-black/45 md:rounded-xl z-10">
                    <div className="flex items-center justify-center md:justify-between h-full w-full">
                        <button 
                            onClick={prevSlide}
                            className="hidden md:block bg-blue-500 text-gray-100 py-2 px-5 rounded font-medium transition realtive 
                            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer ml-10">
                                &#60;
                        </button>
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-3xl font-semibold text-shadow-lg text-gray-100 mb-2">{SKILLS[currentIndex].title}</h2>
                            <p className="text-shadow-lg text-gray-100 px-2 md:px-0">{SKILLS[currentIndex].description}</p>
                        </div>
                        <button 
                            onClick={nextSlide}
                            className="hidden md:block bg-blue-500 text-gray-100 py-2 px-5 rounded font-medium transition realtive 
                            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] mr-10 cursor-pointer">
                                &#62;
                        </button>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Skills