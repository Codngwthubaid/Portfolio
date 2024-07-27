import React from 'react'
import DownArrow from '../DownArrow/downArrow'

const about = () => {
  return (
    <>
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
          <button>
              <div className='bg-[#4baed8] text-white text-xl py-3 px-5 hover:bg-[#9a99ff] '>&laquo; more &raquo;</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default about
