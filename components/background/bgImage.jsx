import React from 'react'
import Image from 'next/image'
const BackgroundImage = () => {
  return (
    <div className=" absolute z-50  flex flex-row items-center justify-center  h-full w-full ">
        <Image className='w-full h-full' src='/Image.png' height={720} width={1080}></Image>
    </div>
  )
}

export default BackgroundImage