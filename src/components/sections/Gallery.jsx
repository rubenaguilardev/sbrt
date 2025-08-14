import { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { PHOTOS } from "../../constants/gallery"
import RevealOnScroll from "../RevealOnScroll"


const ArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === "left"
  return (
    <button
      onClick={onClick}
      className={`hidden md:block absolute ${isLeft ? "left-5" : "right-5"} top-1/2 transform
        bg-blue-500/80 text-gray-100 py-2 px-5 rounded text-xl transition hover:bg-blue-500/70
        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer shadow-md z-10`}
    >
      {isLeft ? "<" : ">"}
    </button>
  )
}

const Gallery = () => {

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]

  )

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    loop: false,
    containScroll: "keepSnaps",
    dragFree: true
  })

  const [open, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const openLightbox = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  const scrollTo = (index) => {
    if (!emblaMainApi || !emblaThumbsApi) return
    emblaMainApi.scrollTo(index)
  }

  return (
    <RevealOnScroll>
      <section id="gallery" className="flex flex-col justify-center items-center mb-30">
        <div className="relative w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-[72.5rem] px-2 md:px-1 mb-3">
          <h2 className="text-3xl text-center font-bold mb-5 md:mb-7 text-gray-300">My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Photography </span></h2>
          <div className="embla" ref={emblaMainRef}>
            <div className="embla__container">
              {PHOTOS.map((item, index) => (
                <div
                  className="embla__slide px-[6px] cursor-zoom-in"
                  key={item.id}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    loading="lazy"
                    src={item.img}
                    alt=""
                    className="w-115 h-110 sm:h-120 md:h-140 lg:h-160 xl:h-180 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <ArrowButton direction="left" onClick={() => emblaMainApi?.scrollPrev()} />
          <ArrowButton direction="right" onClick={() => emblaMainApi?.scrollNext()} />

          {open && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={photoIndex}
              slides={PHOTOS.map((p) => ({ src: isMobile ? p.sm : p.img }))}
            />
          )}
        </div>

        <div className="w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-[72.5rem] px-4 md:2">
          <div className="embla" ref={emblaThumbsRef}>
            <div className="embla__container">
              {PHOTOS.map((item, index) => (
                <div
                  key={item.id}
                  className="embla__slide px-[6px] overflow-hidden cursor-pointer"
                  onClick={() => scrollTo(index)}
                >
                  <img
                    loading="lazy"
                    src={item.sm}
                    alt="index"
                    className="w-full h-52 object-cover rounded-lg transition-all duration-300 ease-in hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}

export default Gallery
