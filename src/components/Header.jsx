import { useState } from "react"
import React from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
      setNav(!nav);
  }
  return (
    <div>{/* Header Section */}
    <header id='header' className=" py-8">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className='px-8'>
          <h1 className="text-white font-bold text-2xl">Burger Place</h1>
        </div>
        {/* Navigation Links */}
        <div>
          <ul className="hidden md:flex justify-around">
            <li className="text-white hover:text-gray-300 p-8 text-xl font-bold ">HOME</li>
            <li className="text-white hover:text-gray-300 p-8 text-xl font-bold ">PRODUCT</li>
            <li className="text-white hover:text-gray-300 p-8 text-xl font-bold ">ABOUT</li>
            <li className="text-white hover:text-gray-300 p-8 text-xl font-bold ">CONTACT</li>
          </ul>
        </div>
        <div onClick={handleNav} className='mr-6 block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} cla />}
        </div>
        <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-screen bg-[#000300] border-r border-gray-950 ease-in-out duration-500' : 'fixed left-[-100%]  duration-1000'}>
          <h1 className='text-3xl font-bold text-[#00df9a] p-6 hover:cursor-pointer'>React.</h1>
          <ul className=' items-center uppercase'>
            <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Home</li>
            <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Produc</li>
            <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>About</li>
            <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  )
}
export default Header