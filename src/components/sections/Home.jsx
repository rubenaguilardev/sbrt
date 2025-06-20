const Home = () => {
    return (
        <section id='home' className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <span className="text-lg text-gray-400">Hi, nice to meet you. My name is</span>
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent mb-6 leading-[1.25]">
                    Jazmin Buffington.
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a dynamic marketing guru with a passion for creativity and innovation.
                    With over a decade of experience under my belt, I specialize in all things social media, 
                    digital marketing, photography, design, and epic event planning.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#gallery" className="bg-blue-500 text0white py-3 px-6 rounded font-medium transition realtive 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Gallery
                    </a>
                     <a href="#contact" className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium 
                    transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]
                    hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home