import { MY_WORK_TOP } from "../../constants/index";
import RevealOnScroll from "../RevealOnScroll";

const Work = () => {
  return (
    <section id="work" className="flex items-center justify-center pt-32">
      <RevealOnScroll>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-5 md:mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <div className="grid border-b border-white/10 pb-5">
            <div className="flex flex-col md:flex-row w-full mb-8 xl:items-center text-[#94A3B8]">
              <div>
                <p className="mb-5 lg:pr-20">{MY_WORK_TOP[0].description[0]}</p>
                <p className="mb-5 lg:pr-20">{MY_WORK_TOP[0].description[1]}</p>
              </div>
              <div className="flex justify-center items-center xl:max-w-md w-full">
                <img
                  src={MY_WORK_TOP[0].image}
                  alt="image of Wyndham dinner "
                  className="rounded-2xl"
                />
              </div>
            </div>
            <RevealOnScroll>
              <div className="flex flex-col md:flex-row-reverse w-full sm:pr-6 lg:pr-20 md:mb-6 items-center">
                <div>
                  <p className="mb-5 md:mb-7 text-[#94A3B8]">
                    {MY_WORK_TOP[1].description}
                  </p>
                </div>
                <div className="flex justify-center items-center w-full xl:max-w-md md:mr-12">
                  <img
                    src={MY_WORK_TOP[1].image}
                    alt="image of Margaritaville lobby"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Work;
