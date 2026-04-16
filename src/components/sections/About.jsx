import RevealOnScroll from "../RevealOnScroll";
import jazz from "../../assets/jazz.avif";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <RevealOnScroll>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  About
                </span>{" "}
                Me
              </h2>
              <div className="space-y-4 text-[#94A3B8]">
                <p>
                  Hi, nice to meet you. I’m a marketing strategist with over a
                  decade of experience bringing brands to life through social
                  media, digital campaigns, photography, design, and events that
                  get people talking. My approach blends creativity with
                  strategy—turning big ideas into measurable impact.
                </p>
                <p>
                  When I’m not crafting campaigns, you’ll find me in the kitchen
                  experimenting with flavors or enjoying time with my favorite
                  people.
                </p>
                <p>
                  Intrigued? Let’s connect and create something worth
                  remembering.
                </p>
              </div>
              <div className="flex justify-end mr-2 text-4xl text-blue-600 md:hidden gap-2">
                <div>
                  <a
                    href="https://www.linkedin.com/in/jazmin-aguilar-buffington/"
                    className="text-4xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div>
                  <a href="mailto:jazmin.a.buffington@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block w-fit bg-blue-600/90 hover:bg-blue-600 py-3 px-6 rounded-full font-medium transition realtive overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                href="https://www.linkedin.com/in/jazmin-aguilar-buffington/"
              >
                Linkedin
              </a>
            </div>

            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#242b32]/30 via-transparent to-[#242b32]/10 blur-2xl animate-pulse" />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src={jazz}
                    alt="Jazmin Buffington"
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
