import { useState, useEffect } from 'react'

const LoadingScreen = ({onComplete}) => {

    const [text, setText] = useState('')
    const fullText = 'Social Buffington'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++

            if (index > fullText.length) {
                clearInterval(interval)

                 setTimeout(() => {
                    onComplete()
                }, 1000)
            }

           

        }, 100)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="fixed flex flex-col items-center justify-center inset-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 
                bg-clip-text text-transparent">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>

        </div>
    )
}

export default LoadingScreen