import React from 'react'

const BrandLogo = ({ className }) => {
    return (
        <div className={'flex gap-2 items-center'} to={'/'}>
            <div className={` h-5 w-5 flex rounded-full ${className}`}></div>
            <div className='text-xl lg:text-2xl font-bold'>Rivo Pelu</div>
        </div>
    )
}

export default BrandLogo