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
        rounded-xl md:hover:-translate-y-1 md:transition-all mb-20" 
        {...swipeHandlers}>
            <div style={{backgroundImage: `url(${SKILLS[currentIndex].image})`}} 
            className="w-full h-full shadow-2xl bg-center bg-opacity-0 md:rounded-xl
            bg-cover duration-500">
                <div className="absolute inset-0 bg-black/42 md:rounded-xl z-10">
                    <div className="flex flex-col justify-center items-center h-full w-full text-gray-100">
                        <h2 className="text-2xl font-semibold text-shadow-lg text-gray-100">{SKILLS[currentIndex].title}</h2>
                        <p className="w-1/2 self-center text-center text-shadow-lg">{SKILLS[currentIndex].description}</p>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Skills