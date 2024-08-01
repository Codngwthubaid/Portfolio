import React from 'react'
import Link from 'next/link'

const DownArrow = () => {
  return (
    <>
      <div className='mt-10 w-fit text-2xl rounded-full px-5 hover:text-[#6EC1E4] hover:bg-[#3c3c3c]'>
        <Link href="/" className='flex rotate-[90deg]'>
          <div>=</div>
          <div>=</div>
          <div>&gt;</div>
        </Link>
      </div>
    </>
  )
}

export default DownArrow
