import React, { useState } from 'react'
import Logo from '../assets/logoSurushaTech.png';
import { Link as LinkRouter } from 'react-router-dom';
import { TiArrowRight } from "react-icons/ti";
import { Menu, X } from 'lucide-react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  return (
  <>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.4, duration: 0.4}} className='max-w-screen h-22 lg:h-36 bg-white flex flex-col'>
      <div className='hidden lg:flex items-center justify-between h-10 w-[100%] bg-blue-500 text-[0.8rem] text-white'>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer" className='hidden lg:flex ml-12'>
          <motion.div initial={{opacity: 0, transform:"translateX(-25%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.6}} className='hidden lg:flex'>
            <IoMdMail className='my-auto mr-4' />
            <motion.span initial={{opacity: 0, transform:"translateX(-35%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.8}}>techsurusha@gmail.com</motion.span>
          </motion.div>
        </a>
        <div className="hidden lg:flex items-center justify-evenly mr-20">
          <motion.span initial={{opacity: 0, transform:"translateY(45%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.5, duration: 1}}>
            Driven by ambition, we craft solutions that push boundaries.
          </motion.span>
          <motion.a initial={{opacity: 0, transform:"translateX(45%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 1.3}} href="https://www.linkedin.com/company/72980242/admin/feed/posts/" className='hidden lg:block lg:mx-4' target='_blank' rel="noreferrer">
            <FaLinkedinIn />
          </motion.a>
          <motion.a initial={{opacity: 0, transform:"translateX(35%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 1.5}} href="https://www.facebook.com/share/NhxB7ohaxXFDuBdV/?mibextid=qi2Omg" className='hidden lg:block lg:mx-4' target='_blank' rel="noreferrer">
            <FaFacebookF />
          </motion.a>
          <motion.a initial={{opacity: 0, transform:"translateX(35%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 1.5}} href="https://www.instagram.com/surushatechnologies?igsh=MW43eG82dHdsazFwNw==" className='hidden lg:block lg:mx-4' target='_blank' rel="noreferrer">
            <FaInstagram />
          </motion.a>
        </div>
      </div>
      <div onMouseLeave={() => {setAboutOpen(false), setServiceOpen(false)} } className='z-40 max-w-screen h-22 lg:h-24 bg-white flex flex-row items-center justify-between p-4 lg:p-10'>
      <div className='flex items-center flex-row lg:w-1/4'>
        <a href={"/"} onMouseEnter={() => {setAboutOpen(false), setServiceOpen(false)}} className='flex items-center flex-row lg:w-1/4 outline-none border-none focus:outline-none focus:border-none'>
          <motion.img initial={{opacity: 0, transform:"translateX(-35%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.8, duration: 0.8}} src={Logo} className='size-12 lg:size-16' alt="" />
          <div className='flex flex-col'>
          <motion.span initial={{opacity: 0, transform:"translateX(-50%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.8, duration: 0.8}} className='text-[22px] lg:text-3xl text-blue-500 tracking-tight font-extrabold outline-none border-none'>SURUSHA</motion.span>
          <motion.span initial={{opacity: 0, transform:"translateX(-50%)"}} animate={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.8, duration: 0.8}} className='text-xs ml-2.5 lg:ml-6 mt-[-10px] lg:mt-[-3px] text-blue-500 tracking-tight font-bold outline-none border-none'>TECHNOLOGY</motion.span>
          <motion.span initial={{opacity: 0, transform:"translateY(35%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:1, duration: 1.8}} className='mb-[-0.6rem] lg:ml-4 font-semibold text-[0.6rem] text-gray-500'>Purpose | People | Performance</motion.span>
        </div>
        </a>
        
      </div>
      <div className='flex flex-row gap-x-26 lg:w-3/4 items-center justify-center'>
        <ul className="lg:flex-row lg:flex lg:space-x-4 hidden items-center">
          {/* onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)} */}
          <motion.li initial={{opacity: 0, transform:"translateY(25%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} className='relative outine-none border-none focus:outline-none focus:border-none' onClick={() => {setAboutOpen(true)}} onMouseEnter ={() => {setServiceOpen(false)}}>
            {/* onMouseMove={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}  to="/about"*/}
            <LinkRouter id='aboutLink' className="text-gray-500 font-bold hover:text-blue-500 transition-all px-6 py-2 rounded flex">
              <span className="mr-2">About</span> <IoCaretDownOutline className="mt-1 -mr-6" />
            </LinkRouter>
            {aboutOpen && <motion.ul id='dropdown' 
            animate={{
                    x: 0,
                    y: [40, -1.2],
                    scale: 1,
                    }} 
                    transition={{ duration: 0.25, delay: 0.1 }} onMouseLeave={()=>setAboutOpen(false)} 
                    className='flex flex-col p-6 items-start justify-center opacity-1 absolute visible top-12 z-50 bg-white w-80 h-36 font-semibold border shadow-sm -translate-x-36'>
              <li className='my-3 w-5/6'>
                <a href='/about/#ourStory' className='px-3 my-[5px] uppercase about1 hover:text-blue-500 hover:translate-x-3 transition-all text-[0.85rem]' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span>Our Story</span>
                </a>
              </li>
              <li className='my-3 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <a href='/about/#management' className='px-3 my-[5px] uppercase hover:text-blue-500 about1 text-[0.85rem]' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Our Management</span>
                </a>
              </li>
            </motion.ul>}
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateY(35%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} className='relative outline-none border-none focus:outline-none focus:border-none' onMouseEnter={() => {setAboutOpen(false)}} onClick={() => {setServiceOpen(true)}}>
            <LinkRouter className="text-gray-500 font-bold hover:text-blue-500 transition-all px-3 py-2 rounded flex">
            <span className="mr-2">Services</span> <IoCaretDownOutline className="mt-1" />
            </LinkRouter>
            {
              serviceOpen && 
              <motion.ul animate={{
                x: 0,
                y: [40, -1.2],
                scale: 1,
                }} 
                transition={{ duration: 0.25, delay: 0.1 }} 
                className={serviceOpen ? "-translate-y-22 flex flex-col p-6 items-start justify-center absolute top-12 z-50 bg-white w-80 h-44 font-semibold border shadow-sm" : '-translate-y-100'} >
              <li className='my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <a href='/services/#productEng' className='px-3 my-[5px] uppercase hover:text-blue-500 about1 text-[0.85rem]' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Product Engineering</span>
                </a>
              </li>
              <li className='my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <a href='/services/#consulting' className='px-3 my-[5px] uppercase hover:text-blue-500 about1 text-[0.85rem]' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Advisory & Consulting</span>
                </a>
              </li>
              
              <li className='group my-2 w-7/8 transition-all hover:translate-x-3 duration-500'>
                <a href='/services/#digital' className='px-3 my-[5px] uppercase group-hover:text-blue-500 about1 text-[0.85rem]' onClick={() => setIsOpen(false)}>
                <span className='hidden slash'>//</span><span className=''>Digital Transformation</span>
                </a>
              </li>
            </motion.ul>
            }
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateY(40%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} onMouseEnter = {() => {setServiceOpen(false)}} className='outline-none border-none focus:outline-none focus:border-none'>
            <LinkRouter to="/portfolio" className="text-gray-500 font-bold hover:text-blue-500 transition-all duration-500 px-3 py-2 rounded">
              Portfolio
            </LinkRouter>
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateY(45%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} className='outline-none border-none focus:outline-none focus:border-none'>
            <a href="https://surushatutorials.blogspot.com/" target="_blank" rel="noreferrer" className="text-gray-500 font-bold hover:text-blue-500 px-3 py-2 transition-all duraton-500">
              Blogs
            </a>
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateY(50%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} className='outline-none border-none focus:outline-none focus:border-none'>
            <a href="#" className="text-gray-500 font-bold hover:text-blue-500 px-3 py-2 transition-all duration-500">
              Careers
            </a>
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateY(25%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.8, duration: 0.8}} className='outline-none border-none focus:outline-none focus:border-none'>
            <LinkRouter to="/contact" className="text-gray-500 font-bold hover:text-blue-500 px-3 py-2 transition-all">
              Contact
            </LinkRouter>
          </motion.li>
          <LinkRouter to="/getaQuote" className='lg:w-30 lg:ml-14 outline-none border-none focus:outline-none focus:border-none'>
          <motion.button initial={{opacity: 0, transform:"translateY(25%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.8, duration: 0.8}} className='flex flex-row items-center bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-800 px-4 py-4 text-white font-bold text-[0.8rem]'>Get a Quote<TiArrowRight className='ml-1' /></motion.button> 
        </LinkRouter>
        <LinkRouter className='lg:w-30 lg:ml-14 outline-none border-none focus:outline-none focus:border-none'>
          <motion.button initial={{opacity: 0, transform:"translateY(25%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.8, duration: 0.8}} className='flex flex-row items-center bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-800 px-8 py-4 text-white font-bold text-[0.85rem]'>LMS<TiArrowRight className='ml-1' /></motion.button> 
        </LinkRouter>
        </ul>
        <div>
          <div className='flex lg:hidden items-center mx-3'>
            <button onClick={toggleNavbar}>
              {isOpen ? "" : <Menu />}
            </button>
          </div>
        </div>

      </div>
    </div>
    </motion.div>
    {isOpen && 
        <section className={isOpen ? 'z-50 text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 w-[80vw]' : "hidden"}>
          <FaArrowRightLong className={isOpen ? "translate-x-0" : 'mt-0 ml-7 mb-8 text-2xl cursor-pointer -translate-x-full transition-all'} onClick={()=> setIsOpen(!isOpen)} />
          <ul className="w-4/4 pl-0 justify-start h-[100vh] top-0 z-1 flex flex-col items-start my-4">
            
            <li className='my-2'>
              <LinkRouter className="flex justify-between items-center px-3 py-0 rounded" >
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
                  <a href="/about/#ourStory" className='px-3 mt-[-1rem]' onClick={() => setIsOpen(false)}>
                    Our Story
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </a>
                  <a href="/about/#management" className='px-3 py-0 mt-[-3rem]' onClick={() => setIsOpen(false)}>
                    Our Management
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </a>
                </div>
              )}
              
            </li>
            <li className='my-2'>
              <LinkRouter className="flex justify-between items-center px-3 py-0 rounded">
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
                  <a href="/services/#productEng" className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Product Engineering
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </a>
                  <a href="/services/#consulting" className='px-3 my-[5px]' onClick={() => setIsOpen(false)}>
                    Advisory & Consulting
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </a>
                  <a href="/services/#digital" className='px-3 py-0 my-[5px]' onClick={() => setIsOpen(false)}>
                    Digital Transformation
                    <hr className='w-[11.3rem] h-0.5 bg-slate-500 mt-3' />
                  </a>
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
              <a href="#" className="px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
                Careers
              </a>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
            </li>
            <li className='my-2'>
              <LinkRouter to="/contact" className="px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
                Contact
              </LinkRouter>
              <hr className='w-[14rem] h-0.5 bg-slate-500 mt-3' />
            </li>
            <LinkRouter to="/getaQuote" className='lg:w-30 lg:ml-14 my-2' onClick={() => setIsOpen(false)}>
              <button className='flex flex-row items-center bg-blue-500 hover:bg-blue-400 px-4 py-3 text-white space-x-1 font-bold'>
                Get a Quote
                <TiArrowRight className='ml-1' />
              </button> 
            </LinkRouter>
            <LinkRouter to="/getaQuote" className='lg:w-30 lg:ml-14 my-2' onClick={() => setIsOpen(false)}>
              <button className='flex flex-row items-center bg-blue-500 hover:bg-blue-400 px-10 py-3 text-white space-x-1 font-bold'>
                LMS
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