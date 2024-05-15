import React from 'react'
import FooterBg from '../assets/footerBg.png';
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from '../assets/logoSurushaTech.png';
import { Link as LinkRouter } from 'react-router-dom';
import { LiaTelegramPlane } from "react-icons/lia";
import { Link as LinkScroll } from 'react-scroll';
import Brochure from '../assets/SurushaTechBrochure.pdf';

const Footer = () => {
  return (
    <footer className='footerBkg w-[100vw] min-h-[75vh] flex flex-col'>
      <div className='w-7/8 h-[75%] flex lg:flex-row flex-col lg:items-start lg:justify-center'>
        <div className='w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto flex flex-col items-center justify-center'>
        <div className='ml-[-12rem] lg:ml-0 -translate-y-16 lg:-translate-y-0 flex items-center flex-row md:w-1/3'>
        <a href={"/"} className='flex items-center flex-row w-full outline-none border-none focus:outline-none focus:border-none'>
          <img src={Logo} className='size-12 md:size-16' alt="" />
          <div className='flex flex-col'>
            <span className='text-[22px] md:text-3xl text-blue-500 tracking-tight font-extrabold outline-none border-none'>SURUSHA</span>
            <span className='text-xs ml-2.5 md:ml-6 mt-[-10px] md:mt-[-8px] text-blue-500 tracking-tight font-bold outline-none border-none'>TECHNOLOGY</span>
          </div>
        </a>  
        </div>
        <span className='ml-[-10rem] mt-[-2rem] text-gray-600 lg:text-blue-500 font-bold text-[0.9rem] lg:ml-24 lg:mt-6'>Find us on Social Media</span>
        <div className='ml-[1.5rem] w-full flex mt-4 lg:mt-8 lg:ml-52'>
          <a href="https://www.linkedin.com/company/72980242/admin/feed/posts/" target='_blank' rel="noreferrer" className='text-gray-600 lg:text-gray-100 lg:scale-125 bg-blue-600 p-2 rounded-full ml-4 hover:-translate-y-1 transition-all duration-800'><FaLinkedinIn /></a>
          {/* <a href="#" target='_blank' rel="noreferrer" className='text-gray-600 lg:text-gray-500 ml-4 hover:text-sky-600'><FaTwitter /></a> */}
          <a href="https://www.facebook.com/share/NhxB7ohaxXFDuBdV/?mibextid=qi2Omg" target='_blank' rel="noreferrer" className='text-gray-600 lg:text-gray-100 lg:scale-125 ml-8 bg-blue-600 p-2 rounded-full hover:-translate-y-1 transition-all duration-800'><FaFacebookF /></a>
          <a href="https://www.instagram.com/surushatechnologies?igsh=MW43eG82dHdsazFwNw==" target='_blank' rel="noreferrer" className='text-gray-600 lg:text-gray-100 lg:scale-125 ml-8 bg-[#A1348E] p-2 mx-auto rounded-full hover:-translate-y-1 transition-all duration-800'><IoLogoInstagram /></a>
        </div>  
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto flex flex-col items-center justify-center'>
          <h2 className='text-[2rem] text-blue-600 font-extralight'>
            Services
          </h2>
          <LinkRouter to='/services#productEng'>
              <p className='text-gray-100 font-semibold mt-8 hover:text-sky-600 transition-all duration-800'>
                Product Engineering
              </p>
          </LinkRouter>
          <LinkRouter to='/services#consulting'>
            <p className='text-gray-100 font-semibold mt-4 hover:text-sky-600 transition-all duration-800'>
              Advisory & Consulting
            </p>
          </LinkRouter>
          <LinkRouter to='/services#digital'>
            <p className='text-gray-100 font-semibold mt-4 hover:text-sky-600 transition-all duration-800'>
              Digital Transformation
            </p>
          </LinkRouter>
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto lg:ml-[-4vw] flex flex-col items-center justify-center'>
          <h2 className='text-[2rem] text-blue-600 font-extralight'>
            Company
          </h2>
          <a href={Brochure} download="Brochure" target='_blank' rel="noreferrer">
            <p className='text-gray-100 font-semibold hover:text-sky-600 transition-all duration-800 mt-8'>
              Company Profile
            </p>
          </a>
          <a href='https://surushatechnology.com/' target='_blank' rel="noreferrer">
            <p className='text-gray-100 font-semibold mt-4 hover:text-sky-600 transition-all duration-800'>
              Our Website
            </p>
          </a>
          <a href='https://surushatutorials.blogspot.com/' target='_blank' rel="noreferrer">
            <p className='text-gray-100 font-semibold mt-4 hover:text-sky-600 transition-all duration-800'>
              Our Blogs
            </p>
          </a>
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto mr-[4rem] flex flex-col items-center lg:items-start justify-start'>
          <h2 className='text-[2rem] text-blue-600 font-extralight lg:mt-[6.5rem]'>
            Newsletter
          </h2>
          <div className='mt-8 mb-8 lg:mb-0'>
            <input type="email" id="" className='h-[3rem] px-4 text-white font-semibold outline-none border-none hover:outline-none focus:outline-none placeholder-white py-4 bg-blue-900 w-[70vw] lg:w-[15vw]' placeholder='Your Email' />
            <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
            <button className='h-12 px-3.5 py-3.5 bg-blue-600 text-white hover:text-blue-600 hover:bg-white transition-all duration-500 border border-blue-600 hover:border-none'>
              <LiaTelegramPlane />
            </button>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full h-[25%]'>
        <div className='h-[0.05rem] bg-gray-400 w-5/6 mx-auto' />
        <div className='mb-8 lg:mb-0 mt-8 w-full flex flex-col lg:flex-row items-center justify-center text-center'>
          <span className='text-gray-500 font-semibold text-[0.9rem] mx-2'>Copyright © 2024</span> <span className='font-bold mt-4 lg:mt-0 mx-2'>Surusha Technology</span> <span className='text-[0.9rem] text-gray-500 font-bold mt-4 lg:mt-0 mx-2'>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer