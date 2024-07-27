import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Insta from '../app/Assets/Insta.png'
// import Twitter from '../app/Assets/Twitter.png'
// import Facebook from '../app/Assets/Facebook.png'
// import Linkedin from '../app/Assets/Linkedin.png'
import Insta from '../public/icons/Insta.png'
import Twitter from '../public/icons/Twitter.png'
import Facebook from '../public/icons/Facebook.png'
import Linkedin from '../public/icons/Linkedin.png'


const Footer = () => {
  return (
    <>
      <div className='flex justify-between pt-2 px-3 border border-[#424242] mt-20'>
        <div className=' text-[#cac068] text-lg underline'>
          <div>
            <Link href="/">Copyright © 2024 Ubaid Portfolio</Link>
          </div>
        </div>

        <div className=' flex h-20 justify-evenly pt-2 gap-x-5'>
          <div>
            <Link href="https://www.instagram.com/codngwthubaid/" target='_blank' title='Instagram'>
              <Image
                src={Insta}
                width={25}
                height={25}
                alt="SetUp"
              />
            </Link>
          </div>
          <div>
            <Link href="https://x.com/codngwthubaid" target='_blank' title='Twitter'>
              <Image
                src={Twitter}
                width={25}
                height={25}
                alt="SetUp"
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.facebook.com/profile.php?id=61552959045561" target='_blank' title='Facebook'>
              <Image
                src={Facebook}
                width={25}
                height={25}
                alt="SetUp"
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/codngwthubaid/" target='_blank' title='Linkedin'>
              <Image
                src={Linkedin}
                width={25}
                height={25}
                alt="SetUp"
              />
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
