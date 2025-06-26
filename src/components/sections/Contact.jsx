import { useState } from 'react'
import RevealOnScroll from "../RevealOnScroll"
import emailjs from 'emailjs-com'
import family from '../../assets/family.jpg'

const Contact = () => {

    const [showPopup, setShowPopup] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const SERVICE_ID = 'service_sxadgqs'
        const TEMPLATE_ID = 'template_2v3s2dq'
        const PUBLIC_KEY = 'TjiFoy8zhupcvv7ez'

    const handleSubmit = (e) => {

        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(() => {
            setFormData({name: '', email: '', message: ''})
            setShowPopup(true)
            setTimeout(() => setShowPopup(false), 3000)
        }).catch(() => alert("Oops! Something went wrong, please try again"))
    
    }
    return (
        <section id='contact' className="flex justify-center items-center mb-30">
            <RevealOnScroll>
                <div className="max-w-2xl md:max-w-[44rem] lg:max-w-[58rem] xl:max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl text-center md:text-start font-bold mb-5 md:mb-7 text-gray-300">Get In Touch</h2>
                    <div className='flex flex-col md:flex-row md:gap-5'>
                        {showPopup && (
                            <div className="fixed text-center text-2xl md:w-1/3 w-3/4 top-40 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-gray-300 px-12 py-6 rounded-xl shadow-2xl z-50 transition-opacity duration-300">
                                Message sent!
                            </div>
                        )}
                        <form 
                            className="space-y-4 xL:space-y-5 mb-30 w-full md:w-200 lg:w-180" 
                            onSubmit={handleSubmit}
                        >
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                placeholder='Name...'
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />  
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-[.8rem] text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                placeholder='example@gmail.com'
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />  
                        </div>
                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                                placeholder='Your message...'
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />  
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] cursor-pointer">
                                Send Message
                        </button>
                    </form>
                    <RevealOnScroll>
                        <div className='md:w-70 lg:w-90 xl:w-90'>
                            <img src={family} alt="" className='rounded-xl text-shadow-2xl' />
                        </div>
                    </RevealOnScroll>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}

export default Contact