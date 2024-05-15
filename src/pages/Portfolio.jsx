import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaArrowUpLong } from "react-icons/fa6";
import Port1pic from '../assets/port1pic1.jpg';
import Port2pic from '../assets/port2pic2.jpg';
import Port3pic from '../assets/port3pic3.jpg';
import Port4pic from '../assets/port4pic11.jpg';
import Port5pic from '../assets/port5pic5.jpg';
import Brochure from '../assets/SurushaTechBrochure.pdf';
import FeedbackSlide from '../components/FeedbackSlide.jsx';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";


const Portfolio = () => {
  return (
    <div id='portfolioTop' className='min-h-[100vh] w-[100vw] m-0 p-0'>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-[20vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-between lg:flex-row bg-blue-500'>
            <LinkRouter to={"/portfolio"}>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-1.5rem] lg:mt-8 text-white font-bold lg:font-extrabold'>
               Portfolio 
            </h2>
            </LinkRouter>
            <div className='flex items-center justify-start ml-8 lg:w-[20vw]'>
                <LinkRouter to={"/"} className='uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500'>
                    Home
                </LinkRouter>
                <p className='uppercase font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                    Portfolio
                </p>
            </div>
        </motion.div>
        <div className='w-[100vw] min-h-[110vh]'>
            <div className='mt-16 lg:mt-0 w-[100vw] h-[50vh] flex flex-col items-center justify-center'>
                <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} classsName="w-[100vw]">
                    <span className='text-[0.9rem] text-blue-500 font-semibold'>
                        //    
                    </span>
                    <span className='text-[0.9rem] text-blue-500 font-semibold'>
                        LATEST CASE STUDIES
                    </span>    
                </motion.div>
                <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-4xl font-extrabold mb-12 mt-2'>
                    The Success Stories
                </motion.p>
                <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-[0.9rem] text-gray-500 mx-4 lg:mx-28 leading-loose'>
                    In this section, we showcase our company's proven track record of delivering effective IT solutions by sharing real-life client success stories. We delve into the specific challenges encountered by our clients, outline our tailored approach to resolving them, and illustrate the positive outcomes achieved. These case studies demonstrate our ability to understand and address the unique IT needs of our clients, fostering successful partnerships.
                </motion.div>        
            </div>
            <div className='mt-16 lg:mt-0 w-[100vw] min-h-[85vh] flex flex-col'>
                <div className='w-[100vw] min-h-[100vh] lg:min-h-[40vh] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center'>
                    <LinkRouter to="/portfolio/bringing-it-and-business-together">
                    <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                        <img src={Port1pic} alt="" className='object-cover h-[100%] w-[100%]' />
                        <div className='overlay'>
                            <p className='text-xl text-white font-bold text-center mt-6'>
                                Unify Business and IT with a Centralized, Dynamic Knowledge Base.    
                            </p>    
                        </div>
                    </motion.div>
                    </LinkRouter>
                    <div className='mt-16 lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mr-16'>
                        <LinkRouter to="/portfolio/digital-experience">
                        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                        <img src={Port2pic} alt="" className='object-cover h-[100%] w-[100%]' />
                        <div className='overlay'>
                            <p className='text-xl text-white font-bold text-center mt-6'>
                                Unlock Growth: Navigate Digital Excellence   
                            </p>    
                        </div>
                            </motion.div>
                        </LinkRouter>
                    </div>
                    <div className='mt-[-1rem] lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                        <LinkRouter to="/portfolio/data-analytics">
                            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.6}} className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port3pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Leveraging data and analytics to drive sustainable initiatives.  
                                </p>    
                            </div>
                            </motion.div>
                        </LinkRouter>
                    </div>
                </div>
                <div className='mt-[-1rem] lg:mt-8 lg:mb-20 w-[100vw] min-h-[100vh] lg:min-h-[40vh] flex flex-col lg:flex-row lg:items-start lg:justify-center'>
                <div className='w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                    <LinkRouter to="/portfolio/customer-experience">
                        <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port4pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Award-winning digital platform for consulting clients.  
                                </p>    
                            </div>
                        </motion.div>
                    </LinkRouter>
                </div>
                    <div className='mt-[-1rem] lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                        <LinkRouter to="/portfolio/app-for-virtual-reality">
                            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port5pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Levelling up the digital transformation  
                                </p>    
                            </div>
                            </motion.div> 
                        </LinkRouter>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-56 lg:mb-0 h-[25vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center items-center lg:flex-row bg-blue-500'>
            <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mb-2 text-3xl lg:text-5xl font-extrabold text-white lg:mx-6'>
                Excited to know more?
            </motion.p>
            <motion.a initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} href={Brochure} target='_blank' rel="noreferrer" download="Surusha Technology Brochure" className='px-10 py-4 bg-white text-[0.9rem] text-blue-500 font-semibold opacity-95 hover:opacity-100 transitiona-all duration-500'>
                DOWNLOAD OUR PORTFOLIO HERE
            </motion.a>
        </div>
        <div className='w-[100vw] h-[10vh] bg-gray-200'></div>
        <div className='portfolioBg w-[100vw] h-[150vh] flex flex-col items-center justify-start'>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-[100vw] h-[5vh] flex items-center justify-center'>
                <span className='text-[1rem] mx-2 mt-24 text-blue-500 font-bold'>
                    //
                </span>
                <span className='text-[1.1rem] mt-24 text-blue-500 font-bold'>
                    OUR CLIENTS
                </span>
            </motion.div>
            <motion.h2 initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mx-8 lg:mx-0 mt-16 text-3xl lg:text-4xl font-extrabold'>
                We are trusted in 15+ Countries Worldwide
            </motion.h2>
            <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.5, duration: 0.5}} className='mt-[30rem] lg:mt-0 w-[100vw] min-h-[100vh]'>
                <FeedbackSlide />
            </motion.div>
        </div>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"portfolioTop"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default Portfolio