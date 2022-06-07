import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style/btn.scss'
const LinkComp = ({ title, link }) => {
    return (
        <a href={link} target='_blank' className={`LinkComp flex items-center gap-2 text-blue-700 hover:text-cyan-900 cursor-pointer`}>
            <div>

                {title}
            </div>
            <FontAwesomeIcon className='icon' icon={faArrowRight} />
        </a>
    )
}

export default LinkComp