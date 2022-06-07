import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BrandLogo } from '../atoms'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FooterComp = () => {
    return (
        <div className='w-full bg-blue-600 text-gray-300 h-32 flex items-center justify-center'>
            <div className='text-center flex items-center flex-col gap-2'>
                <BrandLogo className={'bg-gray-300'} />
                <p>Made with <FontAwesomeIcon icon={faHeart} /> Rivo Pelu</p>

            </div>
        </div>
    )
}

export default FooterComp