"use client"
import React from 'react'
import Link from 'next/link'
import Typed from 'typed.js';
import DownArrow from '../DownArrow/downArrow';

const Home = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer', '_full stack developer', '_front-end developer', '_back-end developer',],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
    return (
        <>
            <div className=' h-[41vh]'>
                <div className='flex flex-col justify-center items-center gap-3 mt-8'>
                    <div className='text-white text-lg '>// HI, I'M Ubaid, A...</div>
                    <div className='text-white text-[60px] flex'>
                        <div className='text-[100px]'>&laquo; </div>
                        <div className="App text-[100px] text-[#cac068]">
                            <span ref={el} />
                        </div>
                        <div className='text-[100px]'>&raquo;</div>
                    </div>
                   <div><DownArrow/></div>
                </div>
            </div>
        </>
    )
}

export default Home
