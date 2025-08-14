import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {PHOTOS} from '../../constants/gallery'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"



const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const Gallery = (props) => {

  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const [open, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

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

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  return (
     <section id="gallery" className="flex flex-col justify-center items-center mb-30">
      <h2 className="text-3xl text-center font-bold mb-5 md:mb-7 text-gray-300">My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Photography </span></h2>
      <div className="embla  relative w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-[72.5rem] md:px-1 mb-3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {PHOTOS.map((item, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img cursor-zoom-in"
                src={item.sm}
                alt="Your alt text"
                onClick={() => {
                  setPhotoIndex(index)
                  setOpen(true)
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowButton direction="left" onClick={() => emblaApi?.scrollPrev()} />
      <ArrowButton direction="right" onClick={() => emblaApi?.scrollNext()} />
      </div>
      
      {open && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={photoIndex}
              slides={PHOTOS.map((p) => ({ src: p.img }))}
            />
          )}
    </section>
    
  )
}

export default Gallery
