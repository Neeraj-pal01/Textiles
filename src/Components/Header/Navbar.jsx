import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FiMenu } from "react-icons/fi";
import '../../App.css'


export default function Navbar() {
  const [bool, setbool] = useState(false)
  return (
    <>
      <nav>
        <div className=' bg-black text-white h-10 flex items-center justify-around'>
          <div className='flex items-center'>
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span> +380961381876 </span>
          </div>

          {/* facbook instagram youtube linkdin */}
          <div className='list-none flex gap-5 items-center'>
            <Link>
              <li >
                <svg className="h-5 w-5 " viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </li>
            </Link>
            <Link>
              <li >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
              </li>
            </Link>
            <Link>
              <li >
                <svg className="h-5 w-5 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </li>
            </Link>
            <Link>
              <li className=''>
                <svg className="h-5 w-5 text-white stroke-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </li>
            </Link>

          </div>
        </div>
        <div className='flex items-center h-14 md:h-20  md:justify-around '>

          <li className='list-none md:w-auto w-full flex items-center justify-between lg:hidden gap-10 '>
            <img className='max-w-20 w-14 md:w-full' src={logo} alt="logo" />
            <span className='justify-self-end relative cursor-pointer'>
              <FiMenu size={35} onClick={() => setbool(!bool)} />
              {bool && <div className='absolute z-10 right-0 top-11  md:top-14  bg-gray-50 rounded-md shadow-md  text-gray-700 flex items-center justify-center'>
                <ul className='flex flex-col gap-2 p-2 gap-y-2 text-nowrap text-sm'>
                  <input placeholder='Search...' className='md:hidden shadow-md rounded-full p-2 border'></input>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/bed-sheet-set">BedSheet Set</NavLink></li>
                  <li><NavLink to="/cotton-duvet-cover">Cotton Duvet Cover</NavLink></li>
                  <li><NavLink to="/bed-skirt">Bed Skirt</NavLink></li>
                  <li><NavLink to="/pillow-cover-set">Pillow Cover Set</NavLink></li>
                  <li><NavLink to="/more">More..</NavLink></li>
                </ul>
              </div>}
            </span>
          </li>

          <ul className=" hidden lg:flex items-center gap-7">
            <li>
              <img className='max-w-20' src={logo} alt="logo" />
            </li>

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/bed-sheet-set">BedSheet Set</NavLink></li>
            <li><NavLink to="/cotton-duvet-cover">Cotton Duvet Cover</NavLink></li>
            <li><NavLink to="/bed-skirt">Bed Skirt</NavLink></li>
            <li><NavLink to="/pillow-cover-set">Pillow Cover Set</NavLink></li>
            <li><NavLink to="/more">More..</NavLink></li>
          </ul>
          <ul className=' hidden sm:flex items-center gap-8 justify-evenly'>
            {/* Search Input */}
            <div className='relative flex'>
              <li className=''>
                <input className='shadow-md rounded-full p-2 border' type="text" placeholder="Search..." />
              </li>
              {/* search Icon  */}
              <li className='absolute right-0 self-center rounded-full bg-[#097173] p-3 '>
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </li>
            </div>
            {/* wishList Icon */}
            <div className='hidden md:block'>
              <li className='relative'>
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                <span className="rounded-full bg-[#097173] text-xs h-5 w-5 text-center text-white absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">3</span>
              </li>
            </div>
            <div className='hidden md:block'>

              {/* Bag Icon */}
              <li className='relative '>
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />  <line x1="3" y1="6" x2="21" y2="6" />  <path d="M16 10a4 4 0 0 1-8 0" /></svg>
                <span className="rounded-full bg-[#097173] text-xs h-5 w-5 text-center  text-white absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">12</span>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}
