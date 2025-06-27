import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PHOTOS } from "../../constants/gallery";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet:  { breakpoint: { max: 1024, min: 464 },  items: 2 },
  mobile:  { breakpoint: { max: 464,  min: 0 },    items: 1 },
};

const Gallery = () => {
  return (
    <section className="flex justify-center items-center mb-30">
      <div className="w-full md:max-w-[44rem] lg:max-w-[58rem] max-w-6xl xl:max-w-6xl px-3">
        <Carousel
          showDots
          responsive={responsive}
          infinite
          autoPlay={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          dotListClass="py-2"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {PHOTOS.map(item => (
            <div key={item.id} className="px-2">
              <img
                src={item.img}
                alt={`Image ${item.id}`}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
