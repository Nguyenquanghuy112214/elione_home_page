'use client'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

function Parallax({children}:{children:React.ReactNode}) {
  return (
    <ParallaxProvider>{children}</ParallaxProvider>
  )
}

export default Parallax