import { icons } from '@/public/img'
import Image from 'next/image'
import React from 'react'

function Process() {
  return (
    <div className=' container'>
        <div className=' text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-10'>Lộ trình học tại elione</div>
        <div>
            <Image src={icons.banner1} width={4000} height={500} alt='img' className=' w-full sm:h-[300px] md:h-[500px] object-cover'/>
        </div>
    </div>
  )
}

export default Process