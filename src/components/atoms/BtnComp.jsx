import React from 'react'
import './style/btn.scss'
const BtnComp = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} className={`px-6 py-1 btnMain bg-blue-700 text-white hover:bg-blue-900 duration-200 active:bg-blue-400 ${className}`}>{children}</button>
    )
}

export default BtnComp