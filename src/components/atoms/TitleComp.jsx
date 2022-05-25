import React from 'react'

const TitleComp = ({ title, className }) => {
    return (
        <h1 className={`text-3xl text-blue-800 font-bold lg:text-center ${className}`}>{title}</h1>
    )
}

export default TitleComp