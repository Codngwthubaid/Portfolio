"use client"
import React from 'react'
import Typed from 'typed.js';
import DownArrow from '../DownArrow/page';

const Resume = () => {
  const el = React.useRef(null);
  const i1 = React.useRef(null);
  const i2 = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["resume", "resume", "resume", "resume", "resume", "resume", "resume", "resume", "resume", "resume", "resume", "resume"],
      typeSpeed: 50,
    });
    const typedi1 = new Typed(i1.current, {
      strings: ["front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer"],
      typeSpeed: 50,
    });
    const typedi2 = new Typed(i2.current, {
      strings: ["front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer", "front-end developer"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
      typedi1.destroy();
      typedi2.destroy();
    };
  }, []);

  return (
    <>
      <section>
        <div className='mt-10 flex justify-center items-center text-[110px] '>
          <div className='text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px] '>&laquo;</div>
          <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px] text-[#4baed8]">
            <span ref={el} />
          </div>
          <div className='text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px] '>&raquo;</div>
        </div>
        <div className='flex justify-center items-center '>
          <div className='text-[#cac068] mx-5'>
            <div>Expert Full Stack Developer providing innovative, high-standard web solutions,</div>
            <div>showcasing exceptional skills and intelligence in modern web technologies.</div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col justify-center items-center '>
          <div><DownArrow /></div>
          <div className='mt-10 flex justify-center items-center text-[90px] '>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&laquo; </div>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">experienec</div>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&raquo;</div>
          </div>
          <div>
            <div className='text-[#cac068] flex justify-center flex-col items-center mx-5'>
              <div>Experienced Full Stack Developer adept at building robust,</div>
              <div>scalable web applications with expertise in modern technologies and innovative solutions.</div>
            </div>
          </div>
        </div>

        <div className='mt-[10vh]'>
          <div className='sm:flex w-[80vw] mx-auto mb-3'>
            <div className='sm:flex justify-around items-center w-[80vw] sm:w-[45vw] border border-[#3c3c3c]'>
              <div className=' text-xl w-[70vw] sm:w-[10vw] text-center'>1April-31April/2024</div>
              <div className='flex justify-center  text-center items-center text-4xl  w-[70vw] sm:w-[35vw]'>
                <div>&laquo;</div>
                <div>&nbsp;</div>
                <div className="text-[#9a99ff]">
                  <span ref={i1} />
                </div>
                <div>&nbsp;</div>
                <div>&raquo;</div>
              </div>
            </div>
            <div className='w-[80vw] sm:w-[55vw] text-[#cac068] text-lg p-3 border border-[#3c3c3c]'>
              <div className=' text-xl'>&#47;&#47; Prodigy InfoTech - Inter</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis dolorum soluta officia aspernatur fugiat voluptates dolorem! Odio nam quod at praesentium quaerat nulla rerum sint ratione, ab quia eaque.
              </div>
            </div>
          </div>
          <div className='sm:flex w-[80vw] mx-auto mb-3'>
            <div className='sm:flex justify-around items-center w-[80vw] sm:w-[45vw] border border-[#3c3c3c]'>
              <div className=' text-xl w-[70vw]  sm:w-[10vw] text-center'>15June-15July/2024</div>
              <div className='flex justify-center  text-center items-center text-4xl  w-[70vw] sm:w-[35vw]'>
                <div>&laquo;</div>
                <div>&nbsp;</div>
                <div className="text-[#9a99ff]">
                  <span ref={i2} />
                </div>
                <div>&nbsp;</div>
                <div>&raquo;</div>
              </div>
            </div>
            <div className='w-[80vw] sm:w-[55vw] text-[#cac068] text-lg p-3 border border-[#3c3c3c]'>
              <div className=' text-xl'>&#47;&#47; CodSoft - Inter</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis dolorum soluta officia aspernatur fugiat voluptates dolorem! Odio nam quod at praesentium quaerat nulla rerum sint ratione, ab quia eaque.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col justify-center items-center '>
          <div><DownArrow /></div>
          <div className='mt-10 flex justify-center items-center text-[90px] '>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&laquo; </div>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">skills</div>
            <div className="text-[35px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&raquo;</div>
          </div>
          <div>
            <div className='text-[#cac068] flex justify-center flex-col items-center mx-5'>
              <div>Experienced full stack developer proficient in HTML, CSS, JavaScript, React, Node.js,</div>
              <div>Express.js, Next.js, and database management, delivering robust and scalable solutions.</div>
            </div>
          </div>
        </div>

        <div className='my-[5vh]'>
          <div className='sm:flex'>
            <div className='p-10 border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[45vw] mb-3'>
              <div className='text-[#9a99ff] text-2xl'>#1</div>
              <div className='text-[#cac068] text-3xl'>_html , _css and _js</div>
              <div className=' text-lg'>Proficient full stack developer with extensive expertise in HTML, CSS, and JavaScript. Adept at creating dynamic, responsive web applications that deliver exceptional user experiences. Skilled in leveraging modern frameworks and libraries to build efficient, scalable solutions, ensuring seamless front-end and back-end integration.</div>
            </div>
            <div className='p-10 border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[45vw] mb-3'>
              <div className='text-[#9a99ff] text-2xl'>#2</div>
              <div className='text-[#cac068] text-3xl'>_bootstrap , _tailwindCSS</div>
              <div className=' text-lg'>Experienced full stack developer with specialized skills in Bootstrap and Tailwind CSS. Expert in crafting sleek, responsive web designs and efficient layouts. Proficient in leveraging these frameworks to build modern, user-friendly interfaces, ensuring seamless integration and consistent performance across various devices and platforms.</div>
            </div>
          </div>
          <div className='sm:flex'>
            <div className='p-10 border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[45vw] mb-3'>
              <div className='text-[#9a99ff] text-2xl'>#3</div>
              <div className='text-[#cac068] text-3xl'>_reactJS , _nextJS</div>
              <div className=' text-lg'>Proficient full stack developer with expertise in ReactJS and NextJS. Skilled in building dynamic, high-performance web applications. Adept at utilizing these frameworks for server-side rendering, seamless user experiences, and efficient state management, ensuring robust and scalable solutions tailored to meet diverse business needs.</div>
            </div>
            <div className='p-10 border border-[#3c3c3c] w-[80vw] mx-auto sm:w-[45vw] mb-3'>
              <div className='text-[#9a99ff] text-2xl'>#4</div>
              <div className='text-[#cac068] text-3xl'>_nodeJS , _expressJS & mongoBD</div>
              <div className=' text-lg'>Experienced full stack developer proficient in NodeJS, ExpressJS, and MongoDB. Skilled in building scalable, high-performance backend solutions, RESTful APIs, and efficient database management. Adept at leveraging these technologies to create robust and secure web applications, ensuring seamless data flow and optimal server performance.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
const metadata = {
  title: "Resume - Ubaid's Portfolio",
  description: "Hey, My Name is Ubaid, and I'm a Web developer currently pursing BCA degree. With a passion for coding and love for creativity. I have embarked on this existing journey to explore the vast world of the Web Developement.",
};