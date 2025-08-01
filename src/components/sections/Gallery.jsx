import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PHOTOS } from "../../constants/gallery";
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";
import RevealOnScroll from "../RevealOnScroll"

const responsive = {
  desktopXl: {breakpoint: {max: 3000, min: 1285}, items: 3},
  desktop: { breakpoint: { max:1284, min: 801 }, items: 2},
  tablet:  { breakpoint: { max: 800, min: 464 },  items: 1},
  mobile:  { breakpoint: { max: 464,  min: 0 },    items:  1},
};

const bottomSlider = {
  desktopXl: { breakpoint: { max: 3000, min: 1285 }, items: 5 },
  desktop: { breakpoint: { max:1284, min: 1025 }, items: 4},
  tablet:  { breakpoint: { max: 1024, min: 464 },  items: 3 },
  mobile:  { breakpoint: { max: 464,  min: 0 },    items: 2 },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-7 top-1/2 transform bg-blue-500/80 text-gray-100 py-2 px-5 rounded text-xl transition realtive hover:bg-blue-500/70 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer shadow-md z-10"
    >
      &#60;
    </button>
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-7 top-1/2 transform bg-blue-500/80 text-gray-100 py-2 px-5 rounded text-xl transition realtive hover:bg-blue-500/70 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer shadow-md z-10"
    >
      &#62;
    </button>
  )
}


const Gallery = () => {

    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const openLightbox = index => {
        setPhotoIndex(index)
        setOpen(true)
    }

  return (
    <RevealOnScroll>
        <section id="gallery" className="flex flex-col justify-center items-center mb-30">
            <div className="w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-6xl px-3 mb-3">
                <h2 className="text-3xl text-center font-bold mb-5 md:mb-7 text-gray-300"><span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">My </span>Photography</h2>
                <Carousel
                responsive={responsive}
                infinite
                autoPlay={true}
                autoPlaySpeed={3000}
                customTransition="all 1s ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                itemClass="px-[6px]"
                >
                {PHOTOS.map((item, index) => (
                    <div 
                        key={item.id}
                        onClick={() => openLightbox(index)} 
                        className="cursor-zoom-in">
                    <img
                        loading="lazy"
                        src={item.img}
                        alt={`Image ${item.id}`}
                        className="w-full h-110 sm:h-120 md:h-140 lg:h-160 xl:h-180 object-cover rounded-lg"
                    />
                    </div>
                ))}
                </Carousel>
                {open && (
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        index={photoIndex}
                        slides={PHOTOS.map(p => ({src: p.img}))}
                    />
                )}
            </div>
            <div className="w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-6xl px-3">
                <Carousel
                responsive={bottomSlider}
                infinite
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={2000}
                customTransition="all 1s ease-in-out"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                itemClass="px-[6px]"
                >
                {PHOTOS.map(item => (
                    <div key={item.id} className="overflow-hidden">
                    <img
                        loading="lazy"
                        src={item.sm}
                        alt={`Image ${item.id}`}
                        className="w-full h-52 object-cover rounded-lg transition-all duration-300 ease-in hover:scale-125"
                    />
                    </div>
                ))}
                </Carousel>
            </div>
        </section>
    </RevealOnScroll>
  )
}

export default Gallery
