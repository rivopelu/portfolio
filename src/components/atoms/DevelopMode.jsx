import React, { useState } from 'react'
import BtnComp from './BtnComp'

const DevelopMode = () => {
    const [active, setActive] = useState(true)
    return (
        <div className={` h-screen w-screen z-[1000] backdrop-blur-xl flex items-center justify-center ${active ? 'fixed' : 'hidden'}`}>\
            <div className='text-center p-4'>

                <p className='text-white uppercase font-bold tracking-wide text-2xl lg:text-4xl'>In development stage</p>
                <p className='text-sm text-gray-400'>Sorry, my website is currently under development but it can still be viewed</p>
                <button onClick={() => setActive(false)} className="btn text-white border  w-fit mx-auto px-3 text-xl mt-5 hover:bg-blue-600">
                    continue
                </button>
            </div>
        </div>
    )
}

export default DevelopMode