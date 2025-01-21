import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../App.css'


export default function Footer() {
  return (
    <>
      <footer className='bg-[#F0F0F0] '>
        <div className='lg:w-4/5 mx-auto flex flex-col border-b border-gray-500 pb-10 pt-5 gap-y-5'>
          <div className='flex justify-around items-center text-[#1B6F70] pb-5  text-center md:flex-nowrap flex-wrap gap-y-10'>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-full bg-[#1b6f7066] w-16 h-16 flex items-center justify-center '>
                <div className='rounded-full bg-[#1B6F70] w-12 h-12 flex items-center justify-center  '>
                  <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                </div>
              </div>
              <h1 className='text-base lg:text-lg font-semibold'>FREE AND FAST DELIVERY</h1>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-full bg-[#1b6f7066] w-16 h-16 flex items-center justify-center'>
                <div className='rounded-full bg-[#1B6F70] w-12 h-12 flex items-center justify-center '>
                  <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="13" rx="2" width="4" height="6" />  <rect x="16" y="13" rx="2" width="4" height="6" />  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />  <path d="M18 19a6 3 0 0 1 -6 3" />
                  </svg>
                </div>
              </div>
              <h1 className='text-base lg:text-lg font-semibold'>24/7 CUSTOMER SERVICE</h1>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <div className='rounded-full bg-[#1b6f7066] w-16 h-16 flex items-center justify-center'>
                <div className='rounded-full bg-[#1B6F70] w-12 h-12 flex items-center justify-center '>
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h1 className='text-base lg:text-lg font-semibold'>MONEY BACK GUARANTEE</h1>
              <p>We return money within 30 days</p>
            </div>
          </div>

          <div className='flex justify-between list-none flex-wrap gap-y-10 px-3 md:px-0'>
            <div className='flex flex-col grow lg:grow-0 w-full lg:w-fit items-center text-center gap-5'>
              <img className='max-w-20' src={logo} alt="logo" />
              <p className='max-w-sm  text-gray-500 text-wrap'>We have cloths that suits your style and which you're proud to wear. From women to men</p>
              {/* facebook instagram youtube  */}
              <div className=' flex gap-5 items-center '>
                <Link>
                  <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                    <svg className="h-5 w-5 " viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </li>
                </Link>
                <Link>
                  <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                  </li>
                </Link>
                <Link>
                  <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </li>
                </Link>
                <Link>
                  <li className='p-3 shadow-lg rounded-full border-2 hover:-translate-y-3 delay-100 duration-300'>
                    <svg className="h-5 w-5 stroke-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                  </li>
                </Link>
              </div>
            </div>
            <div  className='flex flex-col items-center gap-5'>
              <h1>COMPANY</h1>
              <li><Link>About</Link></li>
              <li><Link>Features</Link></li>
              <li><Link>Works</Link></li>
              <li><Link>Career</Link></li>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <h1 > HELP</h1>
              <li><Link>Customer Support</Link></li>
              <li><Link>Deleviry Details</Link></li>
              <li><Link>Terms & Conditions</Link></li>
              <li><Link>Privacy Policy</Link></li>
            </div>
            <div className='flex flex-col items-center  gap-5'>
              <h1> CATEGORY</h1>
              <li><Link>Bed Sheet</Link></li>
              <li><Link>Bed Sheet</Link></li>
              <li><Link>Bed Sheet</Link></li>
              <li><Link>Bed Sheet</Link></li>
            </div>
            <div className='flex flex-col items-center gap-5'>
              <h1 > RESOUESES</h1>
              <li><Link>Free Ebook</Link></li>
              <li><Link>Development Tutorial</Link></li>
              <li><Link>How To Blog</Link></li>
              <li><Link>Youtube Playlist</Link></li>
            </div>
          </div>
        </div>
        {/* copyright part */}
        <div className='text-center text-gray-500 h-24 flex items-center justify-center font-semibold'>
          <p>© Copyright Rajveer Textiles. All Rights Reserved</p>  
        </div>
      </footer>

    </>
  )
}
