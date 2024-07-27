"use client"
import React from 'react'
import Typed from 'typed.js';
import DownArrow from '../DownArrow/downArrow'

const page = () => {
  const firstTyped = React.useRef(null);
  const secondTyped = React.useRef(null);
  const thirdTyped = React.useRef(null);

  React.useEffect(() => {
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
      // Destroy Typed instance during cleanup to stop animation
      typedFirst.destroy();
      typedSecond.destroy();
      typedThird.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <div><DownArrow /></div>
        </div>
        <div className='mt-10 flex justify-center items-center text-[90px] text-white'>
          <div>&laquo; </div>
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
          <button>
              <div className='bg-[#4baed8] text-white text-xl py-3 px-5 hover:bg-[#9a99ff] '>&laquo; all_services &raquo;</div>
          </button>
        </div>
    </>
  )
}

export default page
