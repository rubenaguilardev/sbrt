import { TESTIMONIAL_CONTENT } from "../../constants";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import RevealOnScroll from "../RevealOnScroll";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIAL_CONTENT.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIAL_CONTENT.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="flex justify-center items-center py-32">
      <div
        className="container mx-auto md:px-6 lg:px-8 relative z-10 h-[540px] group rounded-xl shadow-2xl"
        {...swipeHandlers}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold p-4 mb-5 md:mb-8">
          What{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
            Colleagues{" "}
          </span>
          Say About Me
        </h2>
        <div className="relative w-full h-full">
          {TESTIMONIAL_CONTENT.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.background}
              alt={testimonial.author}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out md:rounded-xl ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/60 md:rounded-xl z-20">
            <div className="flex items-center text-center h-full w-full">
              <button
                onClick={prevSlide}
                className="hidden md:flex top-1/2  z-30 bg-blue-600/70 text-gray-100 py-2 px-4 rounded-full text-xl font-medium hover:bg-blue-600  cursor-pointer  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ml-7"
              >
                &#60;
              </button>
              <RevealOnScroll>
                <div className="flex flex-col items-center text-center text-gray-100 text-shadow-2xl text-sm md:text-md lg:text-lg">
                  <p className="text-shadow-lg px-5 md:px-12 lg:px-14 xl:px-22 mb-4">
                    {TESTIMONIAL_CONTENT[currentIndex].testimonial}
                  </p>
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">{`-${TESTIMONIAL_CONTENT[currentIndex].author}`}</h2>
                  <h3 className="txt-xl font-semibold text-[#94A3B8]">
                    {TESTIMONIAL_CONTENT[currentIndex].company}
                  </h3>
                </div>
              </RevealOnScroll>
              <button
                onClick={nextSlide}
                className="hidden md:flex top-1/2 z-30 bg-blue-600/70 text-gray-100 py-2 px-4 rounded-full text-xl font-medium hover:bg-blue-600  cursor-pointer  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] mr-7"
              >
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
                                    ${index === currentIndex ? "bg-blue-600 scale-110" : "bg-[#94A3B8]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
