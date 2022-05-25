import React from 'react'
import { CardComp, TitleComp } from '../../components'
import htmlImg from './img/skills/html.png'
import nodeImg from './img/skills/node.png'
import figmaImg from './img/skills/figma.png'
import dbImg from './img/skills/db.png'
import expressImg from './img/skills/express.png'
import gitImg from './img/skills/git.png'
import nativeImg from './img/skills/native.png'
import nextImg from './img/skills/next.png'
import reactImg from './img/skills/react.png'
const SkillsSection = () => {

    const skilData = [
        { title: 'HTML, CSS, Javascript', sub: "Basic Web Development", img: htmlImg },
        { title: 'NodeJs', sub: "javascript runtime environment ", img: nodeImg },
        { title: 'ReactJs', sub: "javascript library for frontend development", img: reactImg },
        { title: 'NextJs', sub: "ReactJs Frame Work for full stack development", img: nextImg },
        { title: 'ExpressJs', sub: "Backend framework to make rest API", img: expressImg },
        { title: 'MongoDb & MySql', sub: "Databses", img: dbImg },
        { title: 'React Native', sub: "Mobile Development", img: nativeImg },
        { title: 'Adobe Xd & Figma', sub: "UI/UX Design", img: figmaImg },
        { title: 'Git + Github', sub: "Repositories & collaboration", img: gitImg },
    ]

    return (
        <div className='mt-7' id='skillSection'>
            <TitleComp title='My Skills' />
            <p className='text-sm text-gray-600 lg:text-center'>my skills in programming and in web development</p>
            <div className="cardSection pt-6">
                <div className="row flex flex-col lg:flex-row gap-2 lg:gap-10  lg:justify-center flex-wrap lg:px-40">
                    {
                        skilData.map((item, i) => (

                            <CardComp key={i} className='cursor-pointer cardSkils duration-200 flex items-center gap-2 lg:flex-col rounded-lg lg:w-fit lg:text-center  lg:items-center lg:h-60' >
                                <img src={item.img} className='w-40 lg:w-64 rounded-lg lg:rounded-t-lg  duration-200' alt="adsf" />
                                <div className='my-auto pr-1 lg:pr-0 lg:w-64 px-2'>

                                    <p className='font-bold text-sm lg:text-xl text-gray-800'>{item.title}</p>
                                    <p className='text-xs lg:text-sm text-gray-700'>{item.sub}</p>
                                </div>
                            </CardComp>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default SkillsSection