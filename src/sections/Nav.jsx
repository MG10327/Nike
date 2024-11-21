import React from 'react'
import {headerLogo} from "../assets/images/index"
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <headers className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((nav) =>
                    <li key={nav.label}>
                        <a href={nav.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{nav.label}</a>
                    </li>
                )}
            </ul>
        </nav>
    </headers>
  )
}

export default Nav