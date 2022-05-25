/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowRight, faEnvelope, faMap, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Linkedin from './img/linkedin.png'
import ig from './img/ig.png'
import fb from './img/fb.png'
import github from './img/github.png'
import wa from './img/wa.png'
import rivo from './img/rivo.png'
import { AboutSection, Container } from '../../components'
import SkillsSection from './SkillsSection'

const HomePage = () => {

    const IconSosmed = [
        { link: 'https://github.com/rivopelu', icon: github },
        { link: 'https://www.linkedin.com/in/praysingzky-richardo-rivo-pelu-061146234/', icon: Linkedin },
        { link: 'https://www.instagram.com/prysngrchrd_/', icon: ig },
        { link: 'https://www.facebook.com/rivo.pelu/', icon: fb },
        { link: '#', icon: wa },
    ]


    return (
        <>
            <div className='homePage min-h-screen w-full flex flex-col   relative'>
                <div className="kanan pt-12 bg-blue-500 right-0 absolute w-full lg:w-[40%] h-full z-[-10]"></div>
                <div className="kiri pt-12 bg-blue-600 left-0 lg:w-[60%] w-full absolute h-full z-[-10]"></div>
                <div className="flex flex-col items-center justify-center lg:h-screen lg:pb-12 px-[20px]">

                    <div className="containerMain pt-12 relative ">
                        <div className="homeTitle text-4xl font-bold pt-10 lg:text-6xl text-white border-b pb-2 border-gray-400 lg:w-[30%]">
                            <p>Praysingzky </p>
                            <p>R. Rivo Pelu</p>
                        </div>
                        <div className="homeSubTitle pt-2 text-2xl text-blue-200 lg:text-4xl">
                            <p>I'm Rivo Pelu,</p>
                            <p>a front-end developer</p>
                        </div>
                        <p className='pt-2 text-blue-200'>
                            What separates design from art is that design is meant to be… functional.
                        </p>

                        <div className="btnGroup flex pt-5 gap-2">
                            <button className='btnBorder border-2 duration-200 text-white px-4 py-1'>About Me
                                <FontAwesomeIcon className='iconBtnBorder pl-2' icon={faArrowRight} />

                            </button>
                            <button className='btnBorder border-2 duration-200 text-white px-4 py-1'>My Project
                                <FontAwesomeIcon className='iconBtnBorder pl-2' icon={faArrowRight} />

                            </button>

                        </div>

                        <div className="sosmedGroup flex w-[90%] gap-6 pt-5">
                            {IconSosmed.map((item, i) => (

                                <a href={item.link} target='_blank' className='flex hover:scale-125 duration-150' key={i} rel="noreferrer"><img src={item.icon} alt="" /></a>
                            ))}
                        </div>

                    </div>
                    <img src={rivo} className={'lg:absolute bottom-0 lg:h-[650px] flex translate-x-16 lg:translate-x-0 right-0'} alt="rivopelu" />

                </div>
                <div className="bawah bg-blue-800 w-full bottom-0 lg:absolute flex items-center justify-center lg:py-4 ">
                    <div className="containerMain flex flex-col lg:flex-row gap-6 lg:gap-0 py-3 lg:justify-between">
                        <div className="item flex items-center gap-4 ">
                            <FontAwesomeIcon icon={faMapPin} className='text-blue-100 h-9' />
                            <p className='text-blue-50'>Kakenturan satu, maesa, bitung city, north sulawesi, indonesia</p>
                        </div>
                        <div className="item flex items-center gap-4 ">
                            <FontAwesomeIcon icon={faEnvelope} className='text-blue-100 h-9' />
                            <p className='text-blue-50'>
                                <div>Mail me</div>
                                <p>rivopelu12@gmail.com</p>
                            </p>
                        </div>
                        <div className="item flex items-center gap-4 ">
                            <FontAwesomeIcon icon={faPhone} className='text-blue-100 h-9' />
                            <p className='text-blue-50'>
                                <p>Contact Me Via Phone</p>
                                <p>+62 853 9414 6901</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Container className='py-5'>

                <AboutSection />
                <SkillsSection />
            </Container>

        </>

    )
}

export default HomePage