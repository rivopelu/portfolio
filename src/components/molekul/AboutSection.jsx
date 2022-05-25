import React from 'react'
import { GarisComp, TitleComp } from '../atoms'
import AboutImg from '../../pages/home/img/undrawAbout.png'
const AboutSection = () => {
    return (
        <div id="aboutSection">
            <TitleComp title='About Me' />

            <div className="section flex flex-col-reverse lg:flex-row w-full">
                <div className="kiri lg:w-[60%] pt-4 lg:pt-0 w-full flex flex-col justify-center">
                    <h1 className='text-xl italic lg:text-2xl text-blue-800 '>Hello there,</h1>
                    <p className='lg:pr-14 '>My full name "Praysingzky Richardo Rivo Pelu" is often called Rivo, I am 19 years old, I was born in Bitung City, North Sulawesi Indonesia, June 6th 2001, I last graduated from Bitung Christian High School in 2019 and after graduating from school I started studying knowledge in programming and starting to focus more on 2020. I have expertise in web development in fullstack javascript programming language with technologies and frameworks such as nodeJs, ReactJs, NextJs, expressJs, and also with PHP programming language with Laravel framework. I have also participated in several experiences in the programming field such as online training, and most recently as a participant in the 2022 Manado Hackathon and have created a project in the health sector for the Manado City government. And I will also always seek experience and continue to hone my programming skills.</p>
                </div>
                <div className="kanan lg:w-[40%]">
                    <img src={AboutImg} className='w-full pt-3 lg:w-[80%]' alt="class" />
                </div>
            </div>

            <GarisComp className='mt-5 lg:mt-0' />
        </div>
    )
}

export default AboutSection