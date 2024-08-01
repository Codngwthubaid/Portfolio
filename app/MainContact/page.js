"use client"
import React from 'react'
import Typed from 'typed.js';
import Link from 'next/link';

const MainContact = () => {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["freelancing","freelancing","freelancing","freelancing","freelancing","freelancing","freelancing","freelancing","freelancing","freelancing"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <main>
        {/* <MapProvider>
          <MapComponent />
        </MapProvider> */}

        <div className='w-[80vw] sm:w-[60vw] flex mx-auto flex-col justify-center items-center'>
          <div className='flex justify-center items-center text-[100px] '>
            <div className='text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&laquo;</div>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px] text-[#4baed8]">
              <span ref={el} />
            </div>
            <div className='text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&raquo;</div>
          </div>
          <div className='text-[#cac068] text-3xl text-center'>...I have over a year of experience in web development, with a strong background in both front-end and back-end technologies;</div>
          <div className=' mt-5 w-[80vw] sm:w-[50vw] text-cente'>
            …As a highly proficient Full Stack Developer, I exhibit an extraordinary amalgamation of talent, intelligence, and ingenuity. My expertise spans the entire spectrum of web development, from crafting intuitive front-end interfaces to architecting robust back-end systems. With a keen eye for detail and an unwavering commitment to excellence, I consistently deliver innovative solutions that surpass client expectations. My intellectual prowess and adaptability empower me to navigate the ever-evolving technological landscape with ease, ensuring the deployment of cutting-edge applications. I am dedicated to continuous learning and growth, always striving to elevate my craft to new heights.
          </div>
        </div>

        <div className='sm:flex my-[5vh]'>
          <div className='border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[30vw] text-center p-5 text-2xl flex flex-col'>
            <div className='text-[#cac068] '>_phone</div>
            <div className=' hover:text-[#4baed8]'>+91-75350-05331</div>
          </div>
          <div className='border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[30vw] text-center p-5 text-2xl flex flex-col'>
            <div className='text-[#cac068] '>_email</div>
            <div className=' hover:text-[#4baed8]'><Link href="">codngwthubaid@gmail.com</Link></div>
          </div>
          <div className='border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[30vw] text-center p-5 text-2xl flex flex-col'>
            <div className='text-[#cac068] '>_address</div>
            <div className=' hover:text-[#4baed8]'>Rampur, UP, India</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainContact
