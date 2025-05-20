import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)

            }else{
                setIsScroll(false)

            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-90%]'>
        <Image src = {assets.header_bg_color} alt = '' className = 'w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg: px-8 xl: px-[8%] py-4 flex items-centre justify-between z-50 ${isScroll ? "bg-white/30 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href='#top'>
            <img src = 'https://res.cloudinary.com/dwh7xuupf/image/upload/v1747734646/coShop_dkcsrs.svg' alt = 'logo' className='w-30 cursor-pointer -ml-10 mr-14 mt-3'/>
            </a>
    {/*<div className="w-full flex justify-center">
  <input
    type="text"
    placeholder="Search..."
    className="lg:ml-15 pl-8 pr-20 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
    <svg
      className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
    </svg>
  </div>
  */}

<div className="flex items-center gap-6">
  {/* Login Button */}
  <button className="hidden lg:block px-10 py-3 border border-gray-500 rounded-full text-sm font-medium hover:bg-gray-100 transition
  cursor-pointer">
    Login
  </button>

  {/* Sign Up Button */}
  <button style={{ backgroundColor: '#6b11cb' }}
  className="px-10 py-3 text-white rounded-full text-sm font-medium hover:bg-black-700 transition
  cursor-pointer"
  >
    SignUp
  </button>
</div>

{/* mobile menu */}
            <ul ref = {sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                
                <div className = 'absolute right-6 top-6' onClick = {closeMenu}>
                    <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Ovo' onClick = {closeMenu} href='#top'> Home </a></li>
                <li><a className='font-Ovo' onClick = {closeMenu} href='#about'> About me </a></li>
                <li><a className='font-Ovo' onClick = {closeMenu} href='#services'> Serivces </a></li>
                <li><a className='font-Ovo' onClick = {closeMenu} href='#work'> My work </a></li>
                <li><a className='font-Ovo' onClick = {closeMenu} href='#contact'> Contact me </a></li>                
            </ul>
    </nav>
    </>
  )
}

export default Navbar