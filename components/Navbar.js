import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='flex justify-between items-center px-10'>
                    <div className='w-fit flex flex-col items-end py-5'>
                        <div className=' flex flex-row text-white text-2xl gap-x-3'>
                            <div>//</div>
                            <div>Ubaid</div>
                        </div>
                        <div className='text-xl text-[#9a99ff]'>Web_Dev</div>
                    </div>
                    <ul className='flex  mx-5 text-2xl gap-x-8 text-[#cac068]'>
                        <li className='hover:text-[#9a99ff] '>
                            <Link href="/">_home</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/About">_about</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/Portfolio">_portfolio</Link>
                        </li>
                        {/* <li className='hover:text-[#9a99ff]'>
                            <Link href="/Experience">_experience</Link>
                        </li> */}
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/ServicesProvider">_services</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/Resume">_resume</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/MainContact">_contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
