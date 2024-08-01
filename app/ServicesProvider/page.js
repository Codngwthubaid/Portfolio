"use client"
import React from 'react'
import Typed from 'typed.js';

const page = () => {
  const el = React.useRef(null);
  const fd = React.useRef(null);
  const bd = React.useRef(null);
  const fs = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["services", "services", "services", "services", "services", "services", "services", "services", "services", "services"],
      typeSpeed: 50,
    });
    const typedfd = new Typed(fd.current, {
      strings: ["front-end development", "front-end development", "front-end development", "front-end development", "front-end development", "front-end development", "front-end development", "front-end development", "front-end development", "front-end development"],
      typeSpeed: 50,
    });
    const typedbd = new Typed(bd.current, {
      strings: ["back-end development", "back-end development", "back-end development", "back-end development", "back-end development", "back-end development", "back-end development", "back-end development", "back-end development", "back-end development"],
      typeSpeed: 50,
    });
    const typedfs = new Typed(fs.current, {
      strings: ["full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development", "full-stack development"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
      typedfd.destroy();
      typedbd.destroy();
      typedfs.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section>
          <div className='mt-10 flex justify-center items-center text-[90px] '>
            <div className=' text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px  '>&laquo;</div>
            <div className=" text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px  text-[#4baed8]">
              <span ref={el} />
            </div>
            <div className=' text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px] '>&raquo;</div>
          </div>
          <div className='flex justify-center items-center '>
            <div className='text-[#cac068] mx-3'>
              <div>Expert Full Stack Developer providing innovative, high-standard web solutions,</div>
              <div>showcasing exceptional skills and intelligence in modern web technologies.</div>
            </div>
          </div>
        </section>

        <section>
          <div className='mt-[10vh] mx-auto '>
            <div className='sm:flex w-[80vw] mx-auto mb-3'>
              <div className='flex justify-around items-center w-[80vw] sm:w-[45vw] border border-[#3c3c3c]'>
                <div className=' text-2xl w-[10vw] text-center'>#1</div>
                <div className='flex justify-center items-center text-3xl sm:text-4xl  w-[70vw] sm:w-[35vw]'>
                  <div>&laquo;</div>
                  <div>&nbsp;</div>
                  <div className="text-[#9a99ff]">
                    <span ref={fd} />
                  </div>
                  <div>&nbsp;</div>
                  <div>&raquo;</div>
                </div>
              </div>
              <div className='w-[80vw] sm:w-[55vw] text-[#cac068] text-lg p-3 border border-[#3c3c3c]'>Frontend development focuses on creating user-friendly interfaces with HTML, CSS, and JavaScript. It emphasizes responsive design, usability, and aesthetics, ensuring a seamless and engaging user experience across devices.
              </div>
            </div>

            <div className='sm:flex w-[80vw] mx-auto mb-3'>
              <div className='flex justify-around items-center w-[80vw] sm:w-[45vw] border border-[#3c3c3c]'>
                <div className=' text-2xl w-[10vw] text-center'>#2</div>
                <div className='flex justify-center items-center text-3xl sm:text-4xl  w-[70vw] sm:w-[35vw]'>
                  <div>&laquo;</div>
                  <div>&nbsp;</div>
                  <div className="text-[#9a99ff]">
                    <span ref={bd} />
                  </div>
                  <div>&nbsp;</div>
                  <div>&raquo;</div>
                </div>
              </div>
              <div className='w-[80vw] sm:w-[55vw] text-[#cac068] text-lg p-3 border border-[#3c3c3c]'>Backend development involves server-side programming, databases, and APIs. It ensures data processing, storage, and security, providing the essential infrastructure that supports and powers the functionality of web applications.
              </div>
            </div>

            <div className='sm:flex w-[80vw] mx-auto mb-3'>
              <div className='flex justify-around items-center w-[80vw] sm:w-[45vw] border border-[#3c3c3c]'>
                <div className=' text-2xl w-[10vw] text-center'>#3</div>
                <div className='flex justify-center items-center text-3xl sm:text-4xl  w-[70vw] sm:w-[35vw]'>
                  <div>&laquo;</div>
                  <div>&nbsp;</div>
                  <div className="text-[#9a99ff]">
                    <span ref={fs} />
                  </div>
                  <div>&nbsp;</div>
                  <div>&raquo;</div>
                </div>
              </div>
              <div className='w-[80vw] sm:w-[55vw] text-[#cac068] text-lg p-3 border border-[#3c3c3c]'>Fullstack development integrates frontend and backend skills, enabling the creation of complete web applications. Fullstack developers manage everything from user interfaces to server logic, ensuring seamless functionality and optimal performance.</div>
            </div>
          </div>
      </section>
    </main >
    </>
  )
}

export default page

