import React from 'react'

const CardComp = ({ className, children }) => {
    return (
        <div className={`bg-white shadow-md border ${className}`}>
            {children}
        </div>
    )
}

export default CardComp