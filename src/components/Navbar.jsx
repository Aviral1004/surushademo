import React, { useRef, useState } from 'react'
import Logo from '../assets/logoSurushaTech.png';
import { Link as LinkRouter } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, X } from 'lucide-react';
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  return (
  <>
    <div className='max-w-screen h-22 md:h-36 bg-white flex flex-col'>
      <div className='hidden md:flex items-center justify-between h-10 w-[100%] bg-blue-500 text-[0.8rem] text-white'>
        <div className='hidden md:flex ml-8'>
        <IoMdMail className='my-auto mr-4' />
        <span>techsurusha@gmail.com</span>
        </div>
        <div className="hidden md:flex items-center justify-evenly mr-20">
          <span>
            Driven by ambition, we craft solutions that push boundaries.
          </span>
          <a href="" className='hidden md:mx-8' target='_blank' rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="" className='hidden md:mx-4' target='_blank' rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className='max-w-screen h-22 md:h-24 bg-white flex flex-row items-center justify-between p-4 md:p-10'>
      <div className='flex items-center flex-row md:w-1/3'>
        <a href={"/"} className='flex items-center flex-row md:w-1/3 outline-none border-none focus:outline-none focus:border-none'>
          <img src={Logo} className='size-12 md:size-16' alt="" />
          <div className='flex flex-col'>
          <span className='text-[22px] md:text-3xl text-indigo-900 tracking-tight font-extrabold outline-none border-none'>SURUSHA</span>
          <span className='text-xs ml-2.5 md:ml-6 mt-[-10px] md:mt-[-8px] text-indigo-900 tracking-tight font-bold outline-none border-none'>TECHNOLOGY</span>
        </div>
        </a>
        
      </div>
      <div className='flex flex-row gap-x-26 md:w-2/3 items-center justify-center'>
        <ul className="md:flex-row md:flex md:space-x-4 hidden items-center">
          
          <li className='relative outine-none border-none focus:outline-none focus:border-none' onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            {/* onMouseMove={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)} */}
            <LinkRouter id='aboutLink' to="/about" className="text-gray-500 font-bold hover:text-indigo-600 transition-all px-3 py-2 rounded" >
              About
            </LinkRouter>
            {aboutOpen && <motion.ul id='dropdown' 
            animate={{
                    x: 0,
                    y: [40, -1.2],
                    scale: 1,
                    }} 
                    transition={{ duration: 0.25, delay: 0.1 }} 
                    className='flex flex-col p-6 items-start justify-center opacity-1 absolute visible top-12 z-50 bg-white w-80 h-48 font-semibold border shadow-sm -translate-x-36'>
              <li className='my-3 w-5/6'>
                <LinkRouter className='px-3 my-[5px] uppercase about1 hover:text-indigo-600 hover:translate-x-3 transition-all' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span>Our Story</span>
                </LinkRouter>
              </li>
              <li className='my-3 w-4/5 transition-all hover:translate-x-3 duration-500'>
                <LinkRouter className='px-3 my-[5px] uppercase hover:text-indigo-600 about1' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Who we are</span>
                </LinkRouter>
              </li>
              <li className='my-3 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <LinkRouter className='px-3 my-[5px] uppercase hover:text-indigo-600 about1' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Our Management</span>
                </LinkRouter>
              </li>
            </motion.ul>}
          </li>
          <li className='relative outline-none border-none focus:outline-none focus:border-none' onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => (setServiceOpen(false))}>
            <LinkRouter to="/services" className="text-gray-500 font-bold hover:text-indigo-600 transition-all px-3 py-2 rounded">
              Services
            </LinkRouter>
            {
              serviceOpen && 
              <motion.ul animate={{
                x: 0,
                y: [40, -1.2],
                scale: 1,
                }} 
                transition={{ duration: 0.25, delay: 0.1 }} 
                className={serviceOpen ? "-translate-y-22 flex flex-col p-6 items-start justify-center absolute top-12 z-50 bg-white w-80 h-48 font-semibold border shadow-sm" : '-translate-y-100'} >
              <li className='my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <LinkRouter className='px-3 my-[5px] uppercase hover:text-indigo-600 about1' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Advisory & Consulting</span>
                </LinkRouter>
              </li>
              <li className='my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <LinkRouter className='px-3 my-[5px] uppercase hover:text-indigo-600 about1' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Product Engineering</span>
                </LinkRouter>
              </li>
              <li className='my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <LinkRouter className='px-3 my-[5px] uppercase hover:text-indigo-600 about1' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Digital Transformation</span>
                </LinkRouter>
              </li>
            </motion.ul>
            }
          </li>
          <li className='outline-none border-none focus:outline-none focus:border-none'>
            <LinkRouter to="/portfolio" className="text-gray-500 font-bold hover:text-indigo-600 transition-all px-3 py-2 rounded">
              Portfolio
            </LinkRouter>
          </li>
          <li className='outline-none border-none focus:outline-none focus:border-none'>
            <a href="https://surushatutorials.blogspot.com/" target="_blank" rel="noreferrer" className="text-gray-500 font-bold hover:text-indigo-600 px-3 py-2 transition-all">
              Blogs
            </a>
          </li>
          <li className='outline-none border-none focus:outline-none focus:border-none'>
            <LinkRouter to="/contact" className="text-gray-500 font-bold hover:text-indigo-600 px-3 py-2 transition-all">
              Contact
            </LinkRouter>
          </li>
          <LinkRouter to="/getQuote" className='md:w-30 md:ml-14 outline-none border-none focus:outline-none focus:border-none'>
          <button className='flex flex-row items-center bg-indigo-600 hover:bg-indigo-800 transition-all px-4 py-4 text-white font-bold'>Get a Quote<TiArrowRight className='ml-1' /></button> 
        </LinkRouter>
        </ul>
        <div>
          <div className='flex md:hidden items-center mx-3'>
            <IoSearch className='mx-6 size-6' />
            <button onClick={toggleNavbar}>
              {isOpen ? "" : <Menu />}
            </button>
          </div>
        </div>

      </div>
      </div>
    </div>
    {isOpen && 
        <section className={isOpen ? 'z-50 text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 w-[80vw]' : "hidden"}>
          <FaArrowRightLong className={isOpen ? "translate-x-0" : 'mt-0 ml-7 mb-8 text-2xl cursor-pointer -translate-x-full transition-all'} onClick={()=> setIsOpen(!isOpen)} />
          <ul className="w-4/4 pl-0 justify-start h-[100vh] top-0 z-1 flex flex-col items-start my-4">
            
            <li className='my-2'>
              <LinkRouter to="/about" className="flex justify-between items-center px-3 py-0 rounded" >
                <span onClick={() => setIsOpen(false)}>About</span>
                {
                  aboutOpen ? 
                    (<IoCaretDownOutline className='h-4' onClick={()=> setAboutOpen(false)} />)
                      : 
                    (<IoCaretForwardOutline className='h-4' onClick={()=> setAboutOpen(true)} />)
                }
              </LinkRouter>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
              {aboutOpen && (
                <div className='w-full h-40 relative flex flex-col justify-around items-start ml-8'>
                  <LinkRouter className='px-3 my-[5px]' onClick={() => setIsOpen(false)}>
                    Our Story
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                  <LinkRouter className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Who we are
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                  <LinkRouter className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Our Management
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                </div>
              )}
              
            </li>
            <li className='my-2'>
              <LinkRouter to="/services" className="flex justify-between items-center px-3 py-0 rounded">
              <span onClick={() => setIsOpen(false)}>Services</span>
              {
                  serviceOpen ? 
                    (<IoCaretDownOutline className='h-4' onClick={()=> setServiceOpen(false)} />)
                      : 
                    (<IoCaretForwardOutline className='h-4' onClick={()=> setServiceOpen(true)} />)
                }
              </LinkRouter>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
              {serviceOpen && (
                <div className='w-full h-40 relative flex flex-col justify-around items-start ml-8'>
                  <LinkRouter className='px-3 my-[5px]' onClick={() => setIsOpen(false)}>
                    Advisory & Consulting
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                  <LinkRouter className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Product Engineering
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                  <LinkRouter className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Digital Transformation
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </LinkRouter>
                </div>
              )}
            </li>
            <li className='my-2'>
              <LinkRouter to="/portfolio" className="px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
                Portfolio
              </LinkRouter>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
            </li>
            <li className='my-2'>
              <a href="https://surushatutorials.blogspot.com/" target="_blank" rel="noreferrer" className="px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
                Blogs
              </a>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
            </li>
            <li className='my-2'>
              <LinkRouter to="/contact" className="px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
                Contact
              </LinkRouter>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
            </li>
            <LinkRouter to="/getQuote" className='md:w-30 md:ml-14 my-2' onClick={() => setIsOpen(false)}>
              <button className='flex flex-row items-center bg-indigo-600 px-4 py-3 text-white space-x-1 font-bold'>
                Get a Quote
                <TiArrowRight className='ml-1' />
              </button> 
            </LinkRouter>
          </ul>
        </section>
    }
  </>
  )
}

export default Navbar