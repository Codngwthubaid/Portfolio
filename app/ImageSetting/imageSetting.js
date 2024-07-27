import React from 'react'
import Image from 'next/image';
import Laptop from '@/public/imgs/Laptop.jpg'
import SetUp from '@/public/imgs/SetUp.jpg'

const ImageSetting = () => {
    return (
        <>
            <div className='flex h-[400px] justify-around mt-16'>
                <Image
                className='rounded-3xl'
                    src={Laptop}
                    width={500}
                    height={300}
                    alt="Laptop"
                />
                <Image
                className='rounded-3xl dropShadow;'
                    src={SetUp}
                    width={500}
                    height={300}
                    alt="SetUp"
                />
            </div>
        </>
    )
}

export default ImageSetting
