import React from 'react'
import FooterBg from '../assets/footerBg.png';
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from '../assets/logoSurushaTech.png';
import { Link as LinkRouter } from 'react-router-dom';
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className='footerBkg w-[100vw] min-h-[75vh] flex flex-col'>
      <div className='w-7/8 h-[75%] flex lg:flex-row flex-col lg:items-start lg:justify-center'>
        <div className='w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto flex flex-col items-center justify-center'>
        <div className='ml-[-12rem] lg:ml-0 -translate-y-16 lg:-translate-y-0 flex items-center flex-row md:w-1/3'>
        <a href={"/"} className='flex items-center flex-row w-full outline-none border-none focus:outline-none focus:border-none'>
          <img src={Logo} className='size-12 md:size-16' alt="" />
          <div className='flex flex-col'>
            <span className='text-[22px] md:text-3xl text-indigo-900 tracking-tight font-extrabold outline-none border-none'>SURUSHA</span>
            <span className='text-xs ml-2.5 md:ml-6 mt-[-10px] md:mt-[-8px] text-indigo-900 tracking-tight font-bold outline-none border-none'>TECHNOLOGY</span>
          </div>
        </a>  
        </div>
        <span className='ml-[-10rem] mt-[-2rem] text-gray-600 lg:text-gray-500 text-[0.9rem] lg:ml-24 lg:mt-6'>Find us on Social Media</span>
        <div className='ml-[1.5rem] w-full flex mt-4 lg:mt-8 lg:ml-52'>
          <a href="#" className='text-gray-600 lg:text-gray-500 ml-4 hover:text-sky-600'><FaLinkedinIn /></a>
          <a href="#" className='text-gray-600 lg:text-gray-500 ml-4 hover:text-sky-600'><FaTwitter /></a>
          <a href="#" className='text-gray-600 lg:text-gray-500 ml-4 hover:text-sky-600'><FaFacebookF /></a>
          <a href="#" className='text-gray-600 lg:text-gray-500 ml-4 hover:text-sky-600'><IoLogoInstagram /></a>
        </div>  
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto flex flex-col items-center justify-center'>
          <h2 className='text-[2rem] text-blue-600 font-extralight'>
            Services
          </h2>
          <LinkRouter>
            <p className='text-gray-500 mt-8 hover:text-sky-600'>
              Advisory & Consulting
            </p>
          </LinkRouter>
          <LinkRouter>
            <p className='text-gray-500 mt-4 hover:text-sky-600'>
              Product Engineering
            </p>
          </LinkRouter>
          <LinkRouter>
            <p className='text-gray-500 mt-4 hover:text-sky-600'>
              Digital Transformation
            </p>
          </LinkRouter>
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto flex flex-col items-center justify-center'>
          <h2 className='text-[2rem] text-blue-600 font-extralight'>
            Company
          </h2>
          <a href='#' download>
            <p className='text-gray-500 mt-8 hover:text-sky-600'>
              Company Profile
            </p>
          </a>
          <a href='https://surushatechnology.com/' target='_blank' rel="noreferrer">
            <p className='text-gray-500 mt-4 hover:text-sky-600'>
              Our Website
            </p>
          </a>
          <a href='https://surushatutorials.blogspot.com/' target='_blank' rel="noreferrer">
            <p className='text-gray-500 mt-4 hover:text-sky-600'>
              Our Blogs
            </p>
          </a>
        </div>
        <div className='mt-8 lg:mt-0 w-[100vw] lg:w-[22vw] h-50vh lg:h-[60vh] mx-auto mr-[2.25rem] flex flex-col items-center justify-start'>
          <h2 className='text-[2rem] text-blue-600 font-extralight lg:mt-[6.5rem]'>
            Newsletter
          </h2>
          <div className='mt-8 mb-8 lg:mb-0'>
            <input type="email" id="" className='h-[3rem] px-4 text-white outline-none border-none hover:outline-none focus:outline-none placeholder-white py-4 bg-blue-900 w-[70vw] lg:w-[15vw]' placeholder='Your Email' />
            <button className='h-12 px-3.5 py-3.5 bg-blue-600 text-white hover:text-blue-600 hover:bg-white transition-all duration-500 border border-blue-600 hover:border-none'>
              <LiaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-[25%]'>
        <div className='h-[0.05rem] bg-gray-400 w-5/6 mx-auto' />
        <div className='mb-8 lg:mb-0 mt-8 w-full flex flex-col lg:flex-row items-center justify-center text-center'>
          <span className='text-gray-600 text-[0.9rem] mx-2'>Copyright © 2024</span> <span className='font-bold mt-4 lg:mt-0 mx-2'>Surusha Technology</span> <span className='text-[0.9rem] text-gray-600 font-bold mt-4 lg:mt-0 mx-2'>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer