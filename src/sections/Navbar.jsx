import React, { useState } from 'react'
import { navLinks } from '../constants'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toogleMenu = () => { setIsOpen(!isOpen) }

    const navItems = () => {
        return (
            <ul className='nav-ul'>
                {navLinks.map(({ id, name, href }) => {
                    return (
                        <li key={id} className='nav-li'>
                            <a href={href} className='nav-li_a' onClick={() => { }}>
                                {name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <header className='fixed right-0 top-0 left-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center c-space mx-auto py-5'>
                    <a href="/" className='text-neutral-400 text-xl transition-colors font-bold hover:text-white'>
                        Ubaid
                    </a>

                    <button className='text-neutral-400 hover:text-white sm:hidden flex focus:outline-none' aria-label='Toggle Menu' onClick={toogleMenu}>
                        <img
                            className="size-6"
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt="toggle"
                        />
                    </button>

                    <nav className='hidden sm:flex'>
                        {navItems()}
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`} id="menu">
                <nav className='p-5'>
                    {navItems()}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
