import React from 'react'
import {GarisComp, LinkComp, TitleComp} from '../../components'
import ipadBooking from './img/project/ipadBooking.png'
import imacBooking from './img/project/imacBooking.png'
import CoverHomePng from './img/project/coverHome.png'
import chatAppImg from './img/project/chatApp.png'
import coverAir from './img/project/CoverAir.png'

const RecentProject1 = () => {
    return (

        <>

            <div className='pt-5'>
                <TitleComp title='My Recent Project'/>
                <p className='text-sm text-gray-600 lg:text-center pb-4'>the latest project i'm working on</p>
                <div className="row flex flex-col-reverse lg:flex-row w-full pt-10">
                    <div className="kiri lg:w-[40%] flex flex-col gap-5 lg:text-3xl pt-7 lg:pt-0 justify-center">
                        <div
                            className="titileProject flex text-lg items-center gap-2 font-bold lg:text-4xl text-blue-800">
                            <div className='w-6 h-6 bg-blue-800 rounded-full'></div>
                            <p>Travel Booking App</p>
                        </div>
                        <p>This is my practice project which was developed using ReactJs for the front end.</p>
                        <p>and for the back end using expressJS as well as database using MongoDB or more popular this
                            project was built using "MERN" Stack technology</p>
                        <LinkComp title="Read More"/>
                    </div>
                    <div className="kanan lg:w-[60%]">
                        <img src={ipadBooking} alt=""/>
                    </div>
                </div>

                <img src={imacBooking} className='lg:w-[60%] lg:pt-16 lg:mx-auto' alt="rivo booking app"/>

                <div className={"pt-10"}>

                    <GarisComp className='mt-4'/>
                    <div className="row  w-full pt-10  mb-7">
                        <dir
                            className='flex lg:flex-row  flex-col  lg:items-center items-start gap-3 lg:gap-0  mb-5 w-full justify-start lg:justify-between'>

                            <div
                                className="titileProject flex text-lg items-center gap-2  font-bold lg:text-4xl text-blue-800 fle">
                                <div className='w-6 h-6 bg-blue-800 rounded-full'></div>
                                <p>Travira Web Front end</p>
                            </div>
                            <LinkComp title="Read More" link={'https://github.com/rivopelu/travira-air-web'}/>
                        </dir>

                        <p className='lg:text-2xl'>this is a static website built with react-js, tailwindCss, I'm trying
                            to
                            make a web design from a ui designed and poster by Hazar from codelillah as a UI/UX
                            designer</p>
                    </div>

                    <img src={coverAir}
                         className='lg:w-[70%] rounded-2xl outline outline-4 outline-gray-500 lg:mt-16 lg:mx-auto'
                         alt="rivo booking app"/>
                </div>

                <div className={"pt-10"}>

                    <GarisComp className='mt-4'/>
                    <div className="row  w-full pt-10  mb-7">
                        <dir
                            className='flex lg:flex-row  flex-col  lg:items-center items-start gap-3 lg:gap-0  mb-5 w-full justify-start lg:justify-between'>

                            <div
                                className="titileProject flex text-lg items-center gap-2  font-bold lg:text-4xl text-blue-800 fle">
                                <div className='w-6 h-6 bg-blue-800 rounded-full'></div>
                                <p>2rims web frontend</p>
                            </div>
                            <LinkComp title="Read More" link={'https://github.com/rivopelu/2rims-travel-web'}/>
                        </dir>

                        <p className='lg:text-2xl'>this is a static website built with react-js, tailwindCss, I'm trying
                            to
                            make a web design from a ui designed by viktor Ewing as a UI/UX designer</p>
                    </div>

                    <img src={CoverHomePng}
                         className='lg:w-[70%] rounded-2xl outline outline-4 outline-gray-500 lg:mt-16 lg:mx-auto'
                         alt="rivo booking app"/>

                </div>

                <div className={"pt-10"}>
                    <GarisComp className='mt-4'/>

                    <div className="row  w-full pt-10  mb-7">
                        <dir
                            className='flex lg:flex-row  flex-col  lg:items-center items-start gap-3 lg:gap-0  mb-5 w-full justify-start lg:justify-between'>

                            <div
                                className="titileProject flex text-lg items-center gap-2  font-bold lg:text-4xl text-blue-800 fle">
                                <div className='w-6 h-6 bg-blue-800 rounded-full'></div>
                                <p>Chat App Front-end</p>
                            </div>
                            <LinkComp title="Read More" link={'https://github.com/rivopelu/waweb-clone'}/>
                        </dir>

                        <p className='lg:text-2xl'>this is a chat application built with reactJs technology and
                            tailwindCss as a CSS framework. the design of this application I tried to take a reference
                            from the ui/ux design made by indra yoga.</p>
                    </div>

                    <img src={chatAppImg}
                         className='lg:w-[70%] rounded-2xl outline outline-4 outline-gray-500 lg:mt-16 lg:mx-auto'
                         alt="rivo booking app"/>

                </div>
            </div>


        </>
    )
}

export default RecentProject1
