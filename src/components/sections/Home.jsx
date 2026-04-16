import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <span className="text-lg  animate-fade-in animation-delay-100">
          Welcome! My name is
        </span>
        <h1 className="text-6xl md:text-7xl xl:text-[5.3rem] font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-6 leading-[1.25] animate-fade-in animation-delay-200">
          Jazmin Buffington.
        </h1>
        <p className="text-xl font-bold max-w-lg md:max-w-xl lg:max-w-2xl mb-2 mx-auto tracking-wider animate-fade-in animation-delay-300">
          CREATIVITY WITH A STRATEGY
        </p>
        <p className="text-[#94A3B8] text-lg mb-8 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto animate-fade-in animation-delay-400">
          Helping brands shine across social, digital, design, and events since
          2011.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in animation-delay-500">
          <a
            href="#gallery"
            className="bg-blue-600/90 py-4 px-8 rounded-full font-medium transition realtive overflow-hidden hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 py-4 px-8 rounded-full font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-600/15"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#94A3B8]"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <FaChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
