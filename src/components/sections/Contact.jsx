import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import fam from "../../assets/fam.avif";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch(() => alert("Oops! Something went wrong, please try again"));
  };
  return (
    <section id="contact" className="py-32 overflow-hidden">
      <RevealOnScroll>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl text-center md:text-start font-bold mb-5 md:mb-8">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="glass p-4 lg:p-8 rounded-xl">
            <div className="">
              <div className="flex flex-col md:flex-row md:gap-8">
                {showPopup && (
                  <div className="fixed text-center text-2xl md:w-1/3 w-3/4 top-40 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-300 px-12 py-6 rounded-xl shadow-2xl z-50 transition-opacity duration-300">
                    Message sent!
                  </div>
                )}
                <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full border border-white/10 bg-black/20 rounded-xl px-4 py-4 text-white transition focus:outline-none focus:border-blue-600 focus:bg-blue-600/5"
                      placeholder="Your name..."
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full border border-white/10 bg-black/20 rounded-xl px-4 py-[.8rem] text-white transition focus:outline-none focus:border-blue-600 focus:bg-blue-600/5"
                      placeholder="example@gmail.com"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      rows={5}
                      className="w-full border border-white/10 bg-black/20 rounded-xl px-4 py-3 text-white transition focus:outline-none focus:border-blue-600 focus:bg-blue-600/5"
                      placeholder="Your message..."
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600/90 hover:bg-blue-600 text-white py-4 px-8 rounded-full font-medium transition mb-6 md:mb-0 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
                <RevealOnScroll>
                  <div className="w-full">
                    <img
                      src={fam}
                      alt="Picture of Jazmin's family"
                      className="rounded-2xl w-full md:w-143 lg:w-118 xl:w-104 2xl:w-97"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
