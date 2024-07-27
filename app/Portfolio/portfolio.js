import React from 'react'
import DownArrow from '../DownArrow/downArrow'

const page = () => {
  return (
    <>
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
      <div className='border border-green-800 my-10'>
        <div className='flex justify-center'>
          <div className='border border-blue-500  flex w-[43vw]'>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quisquam inventore eos dicta nobis provident iusto molestias, aut vero quasi, possimus voluptatibus blanditiis quis itaque iure, fugit a fuga! Maxime!</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quisquam inventore eos dicta nobis provident iusto molestias, aut vero quasi, possimus voluptatibus blanditiis quis itaque iure, fugit a fuga! Maxime!</div>
          </div>
          <div className='border border-blue-500 w-[43vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni labore rem ex voluptate esse ipsum architecto laborum vero eos eum sequi maiores explicabo quidem id veritatis, accusamus dolorum optio.</div>
        </div>
        <div className='flex justify-center'>
          <div className='border border-green-500 w-[43vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni labore rem ex voluptate esse ipsum architecto laborum vero eos eum sequi maiores explicabo quidem id veritatis, accusamus dolorum optio.</div>
          <div className='border border-green-500 flex w-[43vw]'>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quisquam inventore eos dicta nobis provident iusto molestias, aut vero quasi, possimus voluptatibus blanditiis quis itaque iure, fugit a fuga! Maxime!</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quisquam inventore eos dicta nobis provident iusto molestias, aut vero quasi, possimus voluptatibus blanditiis quis itaque iure, fugit a fuga! Maxime!</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
