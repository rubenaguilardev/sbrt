
import { MY_WORK_TOP } from '../../constants/index'
import RevealOnScroll from '../RevealOnScroll'


const Work = () => {

    return (
        <section id='work' className='flex items-center justify-center'>
            <RevealOnScroll>
                <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-3 md:px-3">
                    <h2 className="text-3xl text-center font-bold mb-5 md:mb-7 text-gray-300"><span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">My</span> Work</h2>
                    <div className='flex-col glass text-gray-300 border-b border-white/10 pb-5'>
                        <div className='flex flex-col md:flex-row w-full mb-5 md:mb-7 xl:items-center'>
                            <div>
                                <p className='mb-5 md:pr-7'>{MY_WORK_TOP[0].description[0]}</p>
                                <p className='mb-5 md:pr-7'>{MY_WORK_TOP[0].description[1]}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={MY_WORK_TOP[0].image} alt="" className='rounded-xl shadow-xl'/>
                            </div>
                        </div>
                        <RevealOnScroll>
                            <div className='flex flex-col md:flex-row-reverse w-full sm:pr-6 md:pr-7 md:mb-0 items-center'>
                                <div>
                                    <p className='mb-5 md:mb-7'>{MY_WORK_TOP[1].description}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src={MY_WORK_TOP[1].image} alt="" className='rounded-xl shadow-xl md:pr-7'/>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default Work