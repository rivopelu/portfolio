import React from 'react'

const Container = ({ children, className, id }) => {
    return (
        <div className="bg-slate-100 w-full flex items-center justify-center">

            <div className={`containerMain   ${className}`} id={id}>
                {children}
            </div>
        </div>
    )
}

export default Container