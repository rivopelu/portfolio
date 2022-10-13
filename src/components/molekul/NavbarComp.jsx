import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BrandLogo, } from '../atoms'
// import ProfileMenu from './ProfileMenu'
import './style/Navbar.scss'


const NavbarComp = () => {
    const [color, setColor] = useState(false)

    const url = window.location.href







    const changeColor = () => {
        if (url === "http://localhost:3000/") {

            if (window.scrollY >= 90) {
                setColor(true)
            } else {
                setColor(false)
            }
        }
    }

    window.addEventListener('scroll', changeColor)
    const [klikToggle, setKlikToggle] = useState(true)

    const onClickToggle = () => {
        setKlikToggle(!klikToggle)

    }

    const NavbarLink = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Project', link: '/project' },

    ]
    return (
        <div className={`fixed  z-40 navbarComp py-3 w-full flex items-center justify-center   ${color ? 'bg-white border-b' : 'bg-transparent text-white colorNavbar'} bg-white`}>
            <div className="containerMain  flex justify-between  ">

                <Link to='/' className="brand lg:text-2xl ">
                    <BrandLogo className={color ? "bg-blue-600" : 'bg-white'} />
                </Link>
                <div id="navMenu" onClick={onClickToggle} className={`${klikToggle ? '' : 'active'} z-50`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`kanan ${klikToggle ? '' : 'kanan-active'} flex lg:items-center`}>
                    <ul className='navlist lg:flex lg:gap-3'>
                        {
                            NavbarLink.map((item) => (

                                <li key={item.id}><NavLink activeclassname='active ' className='lg:hover:text-main-orange duration-200' to={item.link}>{item.title}</NavLink></li>
                            ))
                        }
                    </ul>


                </div>
            </div>
        </div >
    )
}

export default NavbarComp


