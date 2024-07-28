"use client"
import React, { useState, useEffect } from 'react'
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';
import VideoTV from '@/public/imgs/VideoTV.png';
import DownArrow from './DownArrow/page';
import VideoFirst from '../components/VideoFirst'
import VideoSecond from '../components/VideoSecond'

const page = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])


  const el = React.useRef(null);
  const firstTyped = React.useRef(null);
  const secondTyped = React.useRef(null);
  const thirdTyped = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer',],
      typeSpeed: 50,
    });
    const typedFirst = new Typed(firstTyped.current, {
      strings: ['_front-end developer'],
      typeSpeed: 50,
    });
    const typedSecond = new Typed(secondTyped.current, {
      strings: ['_back-end developer'],
      typeSpeed: 50,
    });
    const typedThird = new Typed(thirdTyped.current, {
      strings: ['_full stack developer'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
      typedFirst.destroy();
      typedSecond.destroy();
      typedThird.destroy();
    };
  }, []);


  return (
    <>
      <main>
        {/* Home-Section */}
        <section>
          <div className=' h-[40vh]'>
            <div className='flex flex-col justify-center items-center gap-3 mt-8'>
              <div className='text-white text-lg '>// HI, I'M Ubaid, A...</div>
              <div className='text-white text-[60px] flex'>
                <div className='text-[100px]'>&laquo; </div>
                <div className="App text-[100px] text-[#cac068]">
                  <span ref={el} />
                </div>
                <div className='text-[100px]'>&raquo;</div>
              </div>
            </div>
          </div>
        </section>

        {/* About-Section */}
        <section>
          <div className='flex flex-col justify-center items-center'>
            <div><DownArrow /></div>
            <div className='mt-10 flex justify-center items-center text-[90px] text-white'>
              <div>&laquo;</div>
              <div>about_me</div>
              <div>&raquo;</div>
            </div>
            <div>
              <div className='text-[#cac068]'>
                <div>Accomplished Full Stack Developer adept in HTML, CSS, JavaScript, React, Node.js, and MongoDB.</div>
                <div>Demonstrates exceptional intelligence and ingenuity in crafting sophisticated web solutions.</div>
              </div>
            </div>
            <div className='mt-10 flex justify-around items-center'>
              <div className='w-[45vw] p-10 text-white underline text-3xl'>...I have over a year of experience in web development, with a strong background in both front-end and back-end technologies;</div>
              <div className='w-[40vw] p-10 text-[#cac068]'> …As a highly proficient Full Stack Developer, I exhibit an extraordinary amalgamation of talent, intelligence, and ingenuity. My expertise spans the entire spectrum of web development, from crafting intuitive front-end interfaces to architecting robust back-end systems. With a keen eye for detail and an unwavering commitment to excellence, I consistently deliver innovative solutions that surpass client expectations. My intellectual prowess and adaptability empower me to navigate the ever-evolving technological landscape with ease, ensuring the deployment of cutting-edge applications. I am dedicated to continuous learning and growth, always striving to elevate my craft to new heights;</div>
            </div>

            <div className='flex justify-center items-center'>
              <Link className='bg-[#4baed8] text-white text-xl py-3 px-5 hover:bg-[#9a99ff]' href="/">&laquo; more &raquo;</Link>
            </div>
          </div>
        </section>

        {/* Portfolio-Section */}
        <section>
          <div className='flex flex-col justify-center items-center'>
            <div><DownArrow /></div>
            <div className='mt-10 flex justify-center items-center text-[90px] text-white'>
              <div>&laquo; </div>
              <div>portfolio</div>
              <div>&raquo;</div>
            </div>
            <div>
              <div className='text-[#cac068]'>
                <div>Full Stack Developer with exceptional proficiency, intelligence, and creativity,</div>
                <div>delivering high-standard, innovative solutions for modern web applications.</div>
              </div>
            </div>
          </div>

          {/* Display-Cards */}
          <div className='py-[5vh] my-[5vh] flex flex-col gap-y-[5vw] '>
            <div className='flex justify-evenly items-center gap-x-10'>
              <div className='flex flex-col items-start justify-start w-[30vw]'>
                <div className='mt-10 flex justify-center items-center text-3xl text-white underline'>
                  <div>...PswdNU</div>
                </div>
                <div className='text-[#cac068]'>
                PswdNU is a sophisticated password manager application built using React.js and Tailwind CSS. Designed to offer maximum security and user convenience, PswdNU supports both local storage and database versions, allowing users to choose their preferred method of storing passwords. The application ensures a seamless and intuitive user experience, combining modern aesthetics with robust functionality. With PswdNU, managing passwords becomes effortless, secure, and efficient, reflecting the best practices in web development and data security.
                </div>
              </div>
              <div className='w-[40vw] flex'>
                {isClient ?
                  <div className='relative left-4 mx-auto'>
                    <Image
                      className='rounded-3xl'
                      src={VideoTV}
                      width={400}
                      height={300}
                      alt="VideoTV"
                    />
                    <VideoFirst />
                  </div> : 'Prerendered'}
              </div>
            </div>
            <div className='flex justify-evenly items-center gap-x-10'>
              <div className=' w-[40vw] flex'>
                {isClient ?
                  <div className='relative left-4 mx-auto'>
                    <Image
                      className='rounded-3xl'
                      src={VideoTV}
                      width={400}
                      height={300}
                      alt="VideoTV"
                    />
                    <VideoSecond />
                  </div> : 'Prerendered'}
              </div>
              <div className='flex flex-col items-start justify-start w-[30vw]'>
                <div className='mt-10 flex justify-center items-center text-3xl text-white underline'>
                  <div>...NUTask</div>
                </div>
                <div className='text-[#cac068]'>
               NUTask is a highly efficient to-do list application developed using React.js and Tailwind CSS. This application offers the flexibility of both local storage and database versions, ensuring your tasks are accessible and securely stored based on your preference. With a user-friendly interface, NUTask allows for easy task management, helping you stay organized and productive. Its robust features and modern design make it a valuable tool for individuals seeking an effective solution for managing their daily tasks and projects.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ServicesProvider-Section */}
        <section>
          <div>
            <div className='flex flex-col justify-center items-center'>
              <div><DownArrow /></div>
            </div>
            <div className='mt-10 flex justify-center items-center text-[90px] text-white'>
              <div>&laquo;</div>
              <div>services</div>
              <div>&raquo;</div>
            </div>
            <div className='flex justify-center items-center '>
              <div className='text-[#cac068]'>
                <div>Expert Full Stack Developer providing innovative, high-standard web solutions,</div>
                <div>showcasing exceptional skills and intelligence in modern web technologies.</div>
              </div>
            </div>
          </div>

          <div>
            <div className='mt-20'>
              <div className="App text-[80px] text-[#9a99ff] border border-[#3c3c3c] flex justify-center hover:bg-[]">
                <span>&nbsp;</span>
                <span className='hover:text-[#5f5dd6]' ref={firstTyped} />
                <span>&nbsp;</span>
              </div>
              <div className="App text-[80px] text-[#6EC1E4] border border-[#3c3c3c] flex justify-center hover:bg-[]">
                <span>&nbsp;</span>
                <span className='hover:text-[#4baed8]' ref={secondTyped} />
                <span>&nbsp;</span>
              </div>
              <div className="App text-[80px] text-[#cac068] border border-[#3c3c3c] flex justify-center ">
                <span>&nbsp;</span>
                <span className='hover:text-[#c3b539]' ref={thirdTyped} />
                <span>&nbsp;</span>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-10'>
            <Link className='bg-[#4baed8] text-white text-xl py-3 px-5 hover:bg-[#9a99ff]' href="/">&laquo; all_services &raquo;</Link>
          </div>
        </section>

      </main>
    </>
  )
}

export default page