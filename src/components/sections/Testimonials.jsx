import { TESTIMONIAL_CONTENT } from "../../constants"
import { useState } from 'react'
import { useSwipeable } from "react-swipeable"
import RevealOnScroll from "../RevealOnScroll"

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === 0 ? TESTIMONIAL_CONTENT.length - 1 : prevIndex - 1
        ))
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (
            prevIndex === TESTIMONIAL_CONTENT.length - 1 ? 0 : prevIndex + 1
        ))
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventScrollOnSwipe: true,
        trackMouse: true
    })


    return(
        <section className="flex justify-center items-center mb-30">
            <div
                className="max-w-full md:w-[42.5rem] lg:w-[56.4rem] h-[540px] xl:w-[70.5rem] w-full m-auto relative group rounded-xlshadow-2xl" 
                {...swipeHandlers}
            >
                <h2 className="text-2xl text-center font-bold mb-5 md:mb-7 text-gray-300">Read what my colleagues are saying</h2>
                <div className="relative w-full h-full">
                    {TESTIMONIAL_CONTENT.map((testimonial, index)=> (
                        <img key={index} src={testimonial.background} alt={testimonial.author}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out md:rounded-xl ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-black/60 md:rounded-xl z-20">
                        <div className="flex items-center text-center h-full w-full">
                            <button 
                                onClick={prevSlide}
                                className="hidden md:flex justify-center bg-blue-500/80 text-gray-100 py-2 px-6 rounded font-medium transition realtive text-xl hover:bg-blue-500/70 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer ml-7">
                                    &#60;
                            </button>
                            <RevealOnScroll>
                                <div className="flex flex-col items-center text-center text-gray-100 text-shadow-2xl text-sm md:text-md lg:text-lg">
                                    <p className="text-shadow-lg px-5 md:px-12 lg:px-14 xl:px-16 mb-4">{TESTIMONIAL_CONTENT[currentIndex].testimonial}</p>
                                    <h2 className="text-2xl font-semibold mb-2 text-blue-500">{`-${TESTIMONIAL_CONTENT[currentIndex].author}`}</h2>
                                    <h3 className="txt-xl font-semibold">{TESTIMONIAL_CONTENT[currentIndex].company}</h3>
                                </div>
                            </RevealOnScroll>
                            <button 
                                onClick={nextSlide}
                                className="hidden md:flex justify-center bg-blue-500/80 text-gray-100 py-2 px-6 rounded font-medium transition realtive text-xl overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] mr-7 cursor-pointer">
                                    &#62;
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                        {TESTIMONIAL_CONTENT.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 
                                    ${index === currentIndex ? 'bg-blue-500 scale-110' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Testimonials
        
    
    