import React from 'react'
import Link from 'next/link'

const Experience = () => {
  return (
    <>
      <main>
        <div className='flex flex-col justify-center items-center '>
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

          <div>
            {/* First */}
            <div className='flex gap-x-10  w-[80vw] mt-[10vh]'>
              <div className='w-[25vw] flex flex-col justify-center items-center text-3xl underline text-white'>
                <Link href="https://prodigyinfotech.dev/" target='_blank'>
                  <div>Prodigy InfoTech</div>
                  <div>Web Dev Inter</div>
                </Link>
              </div>
              <div className=' w-[55vw] text-[#cac068]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ratione fugit nam voluptatum eum mollitia aut aspernatur sint? Beatae nisi nostrum explicabo? Dolorum ut iusto nihil? Sit dolore optio temporibus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi distinctio tenetur quas exercitationem, deleniti iusto nesciunt voluptatibus ex perspiciatis impedit ea. Sed voluptas laudantium unde illo fugit autem dolores quia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique veniam aut? Quam sit aspernatur debitis ut. Magni nostrum ipsum laborum obcaecati eaque, distinctio reprehenderit molestiae eius incidunt, magnam dicta.</div>
            </div>

            {/* Second */}
            <div className='flex gap-x-10  w-[80vw] mt-[10vh]'>
              <div className='w-[25vw] flex flex-col justify-center items-center text-3xl underline text-white'>
                <Link href="https://www.codsoft.in/" target='_blank'>
                  <div>CodSoft Company</div>
                  <div>Web Dev Inter</div>
                </Link>
              </div>
              <div className=' w-[55vw] text-[#cac068]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem ratione fugit nam voluptatum eum mollitia aut aspernatur sint? Beatae nisi nostrum explicabo? Dolorum ut iusto nihil? Sit dolore optio temporibus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi distinctio tenetur quas exercitationem, deleniti iusto nesciunt voluptatibus ex perspiciatis impedit ea. Sed voluptas laudantium unde illo fugit autem dolores quia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique veniam aut? Quam sit aspernatur debitis ut. Magni nostrum ipsum laborum obcaecati eaque, distinctio reprehenderit molestiae eius incidunt, magnam dicta.</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Experience

