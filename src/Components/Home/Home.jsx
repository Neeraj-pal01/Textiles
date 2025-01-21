import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BedSheet from '../../assets/ProductsImg/bedSheet.png'
import BedSkirt from '../../assets/ProductsImg/bedSkirt.png'
import CottonDuvexCover from '../../assets/ProductsImg/cottonDuvexCover.png'
import PillowCover from '../../assets/ProductsImg/pillowCover.png'
import sofaCover from '../../assets/ProductsImg/sofaCover.png'





export default function Home() {
  const imgs = [{ "img": BedSheet, name: "BadSheet" }, { img: BedSkirt, name: "Bed Skirt" }, { img: CottonDuvexCover, name: "Cotton Duvex Cover" }, { img: PillowCover, name: "Pillow Cover" }, { img: sofaCover, name: "Sofa Cover" }]
  return (
    <>
      <Header />
      {/* Top Categories  */}
      <section className='w-[94%] lg:w-4/5 mx-auto '>
        <div className='py-5 flex flex-col gap-4'>
          <span className='bg-cyan-400/20 p-2 max-w-fit font-semibold text-center text-[#1B6F70]'>CATEGORIE</span>
          <h1>Top Categories</h1>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 lg:grid-cols-5  items-center justify-center md:justify-between '>
            {imgs.map((i) => (
              <div className='max-w-56 max-h-96 relative '>
                <img className='w-full h-full object-cover' src={i.img} alt={i.name} />
                <span className='absolute bottom-0 bg-[#1b6f70b7] py-4 text-center font-medium text-white w-full'>{i.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
        </div>
      </section>


      {/* Today's Offer   */}
      <section className='w-[94%] lg:w-4/5 mx-auto '>
        <div className='py-5 flex flex-col gap-4'>
          <span className='bg-cyan-400/20 p-2 max-w-fit font-semibold text-center text-[#1B6F70]'>ARRIVAL</span>
          <div className='flex items-center justify-between'>
            <h1>Today's Offer</h1>
            <button className="flex bg-[#1B6F70] text-white md:p-2  items-center gap-2">
              <Link to="/shop-all" className="flex items-center gap-2">
                SHOP ALL <MdOutlineKeyboardArrowRight />
              </Link>
            </button>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-5 justify-center md:justify-between  items-center'>
          {imgs.slice(0, 4).map((i) => (
            <div className='border border-gray-500 max-w-64 gap-5 flex flex-col'>
              <div className='max-h-80 relative flex flex-col gap-x-5'>
                <img className='max-h-80 object-cover' src={i.img} alt={i.name} />
                <span className='absolute bottom-0 bg-black py-2 text-center font-medium text-white w-full'>Add to Cart</span>
              </div>
              <div className='flex flex-col text-center self-center '>
                <span className='text-[#1B6F70] text-xs self-start'>NEW ITEMS</span>
                <h3 className='font-semibold text-lg'>New {i.name}</h3>
                <span className='text-[#1B6F70] text-sm p-1'><strike>$15.00</strike> $12.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* All Products  */}
      <section className='w-[94%] lg:w-4/5 mx-auto '>
        <div className='py-5 flex flex-col gap-4'>
          <span className='bg-cyan-400/20 p-2 max-w-fit font-semibold text-center text-[#1B6F70]'>ARRIVAL</span>
          <div className='flex items-center justify-between'>
            <h1>All Products</h1>
            <button className="flex bg-[#1B6F70] text-white md:p-2 items-center gap-2">
              <Link to="/shop-all" className="flex items-center gap-2">
                SHOP ALL <MdOutlineKeyboardArrowRight />
              </Link>
            </button>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 items-center justify-center md:justify-between gap-5'>
          {[...imgs,...imgs].slice(0,8).map((i) => (
            <div className='border border-gray-500 max-w-64 gap-5 flex flex-col'>
              <div className='max-h-80 relative flex flex-col gap-x-5'>
                <img className='max-h-80 object-cover ' src={i.img} alt={i.name} />
                <span className='absolute bottom-0 bg-black py-2 text-center font-medium text-white w-full'>Add to Cart</span>
                <span className='absolute top-2 left-1 bg-[#1B6F70] p-1 text-center text-xs rounded-2xl border border-white text-white'>10% OFF</span>
              </div>
              <div className='flex flex-col text-center self-center '>
                <span className='text-[#1B6F70] text-xs self-start'>NEW ITEMS</span>
                <h3 className='font-semibold text-lg'>New {i.name}</h3>
                <span className='text-[#1B6F70] text-sm p-1'><strike>$15.00</strike> $12.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>



    </>
  )
}
