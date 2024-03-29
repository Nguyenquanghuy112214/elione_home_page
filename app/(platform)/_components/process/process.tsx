import { icons } from '@/public/img'
import Image from 'next/image'
import React from 'react'

function Process() {
  return (
    <div className=' container'>
        <div data-aos="fade-up"  data-aos-duration="1000" className=' text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14'>Lộ trình học tại elione</div>
        <div data-aos="zoom-in"  data-aos-duration="1000"  data-aos-delay="300">
            <Image src={icons.banner1} width={4000} height={500} alt='img' className=' w-full sm:h-[300px] md:h-[700px] object-cover'/>
        </div>
    </div>
  )
}

export default Process