"use client"
import React from 'react'
import Typed from 'typed.js';
import DownArrow from '../DownArrow/page';

const About = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["about_me", "about_me", "about_me", "about_me", "about_me", "about_me", "about_me", "about_me", "about_me", "about_me", "about_me"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <main>
        <div className='w-[80vw] sm:w-[60vw] flex mx-auto flex-col justify-center items-center'>
          <div className='flex justify-center items-center text-[100px] '>
            <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&laquo;</div>
            <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px] text-[#4baed8]">
              <span ref={el} />
            </div>
          <div className="text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]">&raquo;</div>
          </div>
          <div className='text-[#cac068] text-3xl text-center'>...I have over a year of experience in web development, with a strong background in both front-end and back-end technologies;</div>
          <div className=' mt-5 w-[80vw] sm:w-[50vw] text-cente'>
            …As a highly proficient Full Stack Developer, I exhibit an extraordinary amalgamation of talent, intelligence, and ingenuity. My expertise spans the entire spectrum of web development, from crafting intuitive front-end interfaces to architecting robust back-end systems. With a keen eye for detail and an unwavering commitment to excellence, I consistently deliver innovative solutions that surpass client expectations. My intellectual prowess and adaptability empower me to navigate the ever-evolving technological landscape with ease, ensuring the deployment of cutting-edge applications. I am dedicated to continuous learning and growth, always striving to elevate my craft to new heights.
          </div>
          <div>
            <DownArrow/>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-[80px] ">
            <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&laquo;</div>
            <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>what drives my work</div>
            <div className='text-[40px] sm:text-[60px] md:text-[70px] lg:text-[90px]'>&raquo;</div>
          </div>
          <div className='sm:flex'>
            <div className='p-10 border border-[#3c3c3c] sm:w-[45vw]'>
              <div className='text-[#9a99ff] text-2xl'>#1</div>
              <div className='text-[#cac068] text-3xl'>_team work</div>
              <div className=' text-lg'>Teamwork is the foundation of success, fostering collaboration, trust, and mutual support. By working together, we leverage diverse skills and perspectives to achieve common goals and drive innovation.</div>
            </div>
            <div className='p-10 border border-[#3c3c3c] sm:w-[45vw]'>
              <div className='text-[#9a99ff] text-2xl'>#2</div>
              <div className='text-[#cac068] text-3xl'>_innovation</div>
              <div className=' text-lg'>Innovation is the engine of progress, pushing boundaries and creating new possibilities. It thrives on creativity and a willingness to challenge the status quo, leading to transformative advancements and solutions.</div>
            </div>
          </div>
          <div className='sm:flex'>
            <div className='p-10 border border-[#3c3c3c] sm:w-[45vw]'>
              <div className='text-[#9a99ff] text-2xl'>#3</div>
              <div className='text-[#cac068] text-3xl'>_excellence</div>
              <div className=' text-lg'>Excellence is the pursuit of the highest standards in every endeavor. It requires dedication, attention to detail, and a commitment to continuous improvement, resulting in outstanding performance and exceptional outcomes.</div>
            </div>
            <div className='p-10 border border-[#3c3c3c] sm:w-[45vw]'>
              <div className='text-[#9a99ff] text-2xl'>#4</div>
              <div className='text-[#cac068] text-3xl'>_hard work</div>
              <div className=' text-lg'>Hard work is the key to achieving success, embodying perseverance, dedication, and resilience. It transforms ambition into reality, enabling individuals and teams to overcome challenges and reach their fullest potential.</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About

