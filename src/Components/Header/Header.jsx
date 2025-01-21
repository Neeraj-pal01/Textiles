import React from 'react'
import bannerImg from '../../assets/bannerImg.png';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Header() {
  return (
    <>
    <div className='relative '>

       <div className='-z-10 '>
        <img className='' src={bannerImg} alt="BannerImg" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#155152] from-20%  opacity-80 z-0"></div>
      <div className=' absolute hidden sm:flex flex-col items-start gap-4 text-white top-1/3 left-[10%] md:top-1/4 md:left-[15%] text-start w-1/4 '>
        <h3 className='border md:p-2 p-1 bg-[#1B6F70] border-white text-nowrap'>WELCOME TO THE RAJVEER TEXTILES</h3>
        <h1 className='lg:text-6xl lg:text-wrap text-nowrap md:text-3xl text-xl font-sora font-bold'>Premium Bedsheets</h1>
        <p className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi.</p>
        <button className="flex border md:p-3 bg-[#1B6F70] border-white items-center gap-2 text-nowrap">
            <Link to="/shop-all" className="flex items-center gap-2">
              VIEW MORE CATEGORIES<MdOutlineKeyboardArrowRight />
            </Link>
          </button>
      </div>
    </div>
    </>
  )
}
