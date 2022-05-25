import React from 'react'
import { LinkComp, TitleComp } from '../../components'
import ipadBooking from './img/project/ipadBooking.png'
import imacBooking from './img/project/imacBooking.png'
const RecentProject1 = () => {
    return (
        <div className='pt-5'>
            <TitleComp title='My Recent Project' />
            <p className='text-sm text-gray-600 lg:text-center pb-4'>the latest project i'm working on</p>
            <div className="row flex flex-col-reverse lg:flex-row w-full pt-10">
                <div className="kiri lg:w-[40%] flex flex-col gap-5 lg:text-3xl pt-7 lg:pt-0 justify-center">
                    <div className="titileProject flex text-lg items-center gap-2 font-bold lg:text-4xl text-blue-800">
                        <div className='w-6 h-6 bg-blue-800 rounded-full'></div>
                        <p>Travel Booking App</p>
                    </div>
                    <p>This is my practice project which was developed using ReactJs for the front end.</p>
                    <p>and for the back end using expressJS as well as database using MongoDB or more popular this project was built using "MERN" Stack technology</p>
                    <LinkComp title="Read More" />
                </div>
                <div className="kanan lg:w-[60%]">
                    <img src={ipadBooking} alt="" />
                </div>
            </div>

            <img src={imacBooking} className='lg:w-[60%] lg:pt-16 lg:mx-auto' alt="rivo booking app" />

        </div>
    )
}

export default RecentProject1