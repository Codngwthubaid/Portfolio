"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import Typed from 'typed.js';
import clsx from 'clsx';
import Pwsd from '@/public/imgs/Pwsd.png';
import Todo from '@/public/imgs/Todo.png';
import Halalify from '@/public/imgs/Halalify.png'

const page = () => {

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])


  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio", "portfolio"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center text-[90px]'>
            <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&laquo;</div>
            <div>&nbsp;</div>
            <div className=" text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px ]text-[#4baed8]">
              <span ref={el} />
            </div>
            <div>&nbsp;</div>
            <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&raquo;</div>
          </div>
          <div>
            <div className='text-[#cac068] m-[5vw]'>
              <div>Full Stack Developer with exceptional proficiency, intelligence, and creativity,</div>
              <div>delivering high-standard, innovative solutions for modern web applications.</div>
            </div>
          </div>

          <div className='sm:flex mt-10 gap-x-5'>
            <div className='p-1 border-2 text-[#9a99ff] border-[#9a99ff] hover:text-[#cac068] hover:border-[#cac068] mb-4 w-[80vw] text-center sm:w-fit'>all projects</div>
            <div className='p-1 border-2 text-[#9a99ff] border-[#9a99ff] hover:text-[#cac068] hover:border-[#cac068] mb-4 w-[80vw] text-center sm:w-fit'>full-stack projects</div>
            <div className='p-1 border-2 text-[#9a99ff] border-[#9a99ff] hover:text-[#cac068] hover:border-[#cac068] mb-4 w-[80vw] text-center sm:w-fit'>front-end projects</div>
            <div className='p-1 border-2 text-[#9a99ff] border-[#9a99ff] hover:text-[#cac068] hover:border-[#cac068] mb-4 w-[80vw] text-center sm:w-fit'>back-end projects</div>
          </div>
        </div>

        <div className='py-[5vh] my-[5vh] flex flex-col gap-y-[5vw] '>
          <div className='flex flex-col'>
            <div className='flex justify-evenly items-center gap-x-10 flex-col sm:flex-row'>
              <div className=' m-[5vw]  flex flex-col items-start justify-start sm:w-[30vw]'>
                <div className='flex justify-center items-center text-3xl  underline '>
                  <div>...PswdNU</div>
                </div>
                <div className='text-[#cac068]'>
                  PswdNU is a sophisticated password manager application built using React.js and Tailwind CSS. Designed to offer maximum security and user convenience, PswdNU supports both local storage and database versions, allowing users to choose their preferred method of storing passwords. The application ensures a seamless and intuitive user experience, combining modern aesthetics with robust functionality. With PswdNU, managing passwords becomes effortless, secure, and efficient, reflecting the best practices in web development and data security.
                </div>
              </div>
              <div className='sm:w-[40vw] flex justify-center items-center'>
                {isClient ?
                  <div className='relative p-5 rounded-xl hover:bg-[#3a3a3a]'>
                    <Image
                      src={Pwsd}
                      alt="Picture of the author"
                      className={clsx(
                        'border-2 border-[#3c3c3c] rounded-xl',

                        'sm:w-[35vw] sm:h-36', // small screens and up
                        'md:w-[35vw] md:h-48', // medium screens and up
                        'lg:w-[35vw] lg:h-[200px]', // large screens and up
                        'xl:w-[35vw] xl:h-[225px]' // extra-large screens and up
                      )}
                    />
                  </div> : 'Prerendered'}
              </div>
            </div>
            <div className='flex justify-evenly items-center gap-x-10 flex-col sm:flex-row'>
              <div className='sm:w-[40vw] flex justify-center items-center'>
                {isClient ?
                  <div className='relative sm:left-4 p-5 rounded-xl hover:bg-[#3a3a3a]'>
                    <Image
                      src={Todo}
                      alt="Picture of the author"
                      className={clsx(
                        'border-2 border-[#3c3c3c] rounded-xl',
                        'sm:w-[35vw] sm:h-36', // small screens and up
                        'md:w-[35vw] md:h-48', // medium screens and up
                        'lg:w-[35vw] lg:h-[200px]', // large screens and up
                        'xl:w-[35vw] xl:h-[225px]' // extra-large screens and up
                      )}
                    />
                  </div> : 'Prerendered'}
              </div>
              <div className='m-[5vw] flex flex-col items-start justify-start sm:w-[30vw]'>
                <div className='flex justify-center items-center text-3xl  underline'>
                  <div>...NUTask</div>
                </div>
                <div className='text-[#cac068]'>
                  NUTask is a highly efficient to-do list application developed using React.js and Tailwind CSS. This application offers the flexibility of both local storage and database versions, ensuring your tasks are accessible and securely stored based on your preference. With a user-friendly interface, NUTask allows for easy task management, helping you stay organized and productive. Its robust features and modern design make it a valuable tool for individuals seeking an effective solution for managing their daily tasks and projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
