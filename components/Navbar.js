"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const [isClick, setisClick] = useState(false)

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return (
        <>
            <header>
                <nav className='flex justify-between items-center px-10'>
                    <div className='w-fit flex flex-col items-end py-5'>
                        <div className=' flex flex-row text-2xl gap-x-3'>
                            <div>&#47;&#47;</div>
                            <div>Ubaid</div>
                        </div>
                        <div className='text-xl text-[#9a99ff]'>Web_Dev</div>
                    </div>
                    <ul className='hidden lg:flex mx-5 text-2xl gap-x-8 text-[#cac068]'>
                        <li className='hover:text-[#9a99ff] '>
                            <Link href="/">_home</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/About">_about</Link>
                        </li>
                        <li className='hover:text-[#9a99ff]'>
                            <Link href="/Portfolio">_portfolio</Link>
                        </li>

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

                    <div className='lg:hidden flex  flex-col items-end gap-y-5'>

                        <button className='' onClick={() => { toggleNavbar() }}>
                            {isClick ? (
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                          <g fill="#cac068" fill-Rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" font-size="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g>
                          </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                    <g fill="#cac068" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path></g></g>
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
                {isClick && (
                    <div className='lg:hidden'>
                        <ul className='flex flex-col h-fit md:flex-row justify-evenly text-xl md:h-[10vw] items-start w-[90vw]'>
                            <li className='hover:text-[#9a99ff] '>
                                <Link href="/">_home</Link>
                            </li>
                            <li className='hover:text-[#9a99ff]'>
                                <Link href="/About">_about</Link>
                            </li>
                            <li className='hover:text-[#9a99ff]'>
                                <Link href="/Portfolio">_portfolio</Link>
                            </li>

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
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar
