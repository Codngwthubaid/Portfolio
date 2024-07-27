import React from 'react'
import DownArrow from '../DownArrow/downArrow'

const Experience = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div><DownArrow /></div>
                <div className='mt-10 flex justify-center items-center text-[90px] text-white'>
                    <div>&laquo; </div>
                    <div>Experienec</div>
                    <div>&raquo;</div>
                </div>
                <div>
                    <div className='text-[#cac068] flex justify-center flex-col items-center'>
                      <div>Experienced Full Stack Developer adept at building robust,</div>
                      <div>scalable web applications with expertise in modern technologies and innovative solutions.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
