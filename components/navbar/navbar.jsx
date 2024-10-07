import React from 'react'

const Navbar = () => {
  return (
    <div className=" z-[100] flex flex-row items-center justify-center mt-10">
        <div className="flex flex-center items-center justify-center gap-5 ">
            <a href="" className=" font-medium text-[#FFFFFF] text-sm">Home</a>
            <a href=""className=" font-medium text-[#FFFFFF] text-sm">Features</a>
            <a href=""className=" font-medium text-[#FFFFFF] text-sm">Pricing</a>
            <a href=""className=" font-medium text-[#FFFFFF] text-sm"> Blog</a>
            <a href=""className=" font-medium text-[#FFFFFF] text-sm"> Be</a>
        </div>
    </div>
  )
}

export default Navbar