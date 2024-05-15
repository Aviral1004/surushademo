import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"

const CustomerExperience = () => {
  return (
    <div id="cx1" className='w-[100vw] min-h-[100vh]'>
      <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.9}} className='h-[45vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center bg-blue-500'>
            <h2 className='text-3xl lg:text-4xl ml-4 lg:ml-[2rem] mt-[-0.5rem] lg:mt-[0.5rem] text-white font-bold lg:font-extrabold'>
              Award winning Digital platform for consulting clients 
            </h2>
            <div className='w-[90vw] mt-0 lg:mt-2 flex flex-col lg:flex-row lg:items-center justify-start ml-8 lg:w-[60vw]'>
                <LinkRouter to={"/"} className='ml-[-0.5rem] uppercase text-gray-200 font-semibold mt-8 lg:mt-0 hover:text-white transition-all duration-500 lg:ml-8'>
                    Home
                </LinkRouter>
                <LinkRouter to={"/portfolio"} className='uppercase text-gray-200 font-semibold mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-[-0.5rem] lg:ml-8'>
                    PORTFOLIO
                </LinkRouter>
                <p className='h-[100%] font-bold text-white ml-[-0.5rem] lg:ml-8 mt-8 lg:mt-8'>
                  Award winning Digital platform for consulting clients
                </p>
            </div>
      </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='flex w-[90vw] mx-auto mt-8'>
        <div className='px-2 lg:px-0 w-20 h-10 lg:ml-[-1rem] mr-4 border border-gray-200 font-extrabold text-blue-500 text-2xl'><p className='lg:ml-[0.35rem] mt-[0.2rem]'>N</p></div>
        <div className='ml-[0.05rem] lg:ml-[-0.5rem] lg:mx-8 text-[0.9rem] text-gray-500 leading-loose'>ordic Shiatsu Centre offers shiatsu therapy, a traditional Japanese healing practice designed to enhance your overall health and well-being. Led by Francis Javier, the only certified shiatsu therapist in Finland with over 20 years of experience, Nordic Shiatsu Centre provides personalized treatments to help you achieve optimal health and vitality.</div>
        </motion.div>
        <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-28 leading-loose'>
          Driven by a vision to create a positive and memorable experience for clients, Francis, the founder of Nordic Shiatsu Centre, sought a trusted partner to elevate their digital presence. Through collaboration with Surusha Technology, the Centre's website now boasts a modern and user-friendly interface, allowing visitors to effortlessly navigate and find the information they seek.
        </motion.p>
        <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        The new Shiatsu Centre website offers:
        </motion.p>
        <ul className='list-disc'>
          <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[2rem] mx-8 lg:ml-20 text-[0.9rem] text-gray-500 mt-8 lg:mx-28 leading-loose'>
            The implementation of an intuitive booking system empowers clients to seamlessly schedule appointments at their convenience, eliminating the need to wait on hold or navigate complex booking processes. This enhanced functionality streamlines the client experience and fosters greater convenience.
          </motion.li>
          <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-20 leading-loose'>
            By implementing a mobile-responsive design, the website adapts seamlessly to various screen sizes, ensuring optimal viewing and user experience across smartphones, tablets, and desktops. This ensures everyone can easily access the information and services offered, regardless of their chosen device.
          </motion.li>
        </ul>
        <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-24 leading-loose'>
          Francis' vision for an improved client experience has come to fruition with the new website. Streamlined online booking has demonstrably boosted the conversion rate and operational efficiency. This translates to a notable surge in inquiries and sales, fueling Francis' optimism for continued growth in the future.
        </motion.p>
        <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-24 leading-loose'>
          With over two decades in business, Francis understands the crucial role of a website that reflects a brand's identity and values in today's digital landscape. While an existing website served its purpose, it lacked features crucial for contemporary online experiences. Notably, the lack of mobile responsiveness created a barrier for users accessing the site from smartphones and tablets.
        </motion.p>
        <div className='mt-8 flex w-[90vw] mx-auto'>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-5xl text-blue-500 ml-[-1rem] mt-[-0.5rem] mx-4'>
            <RiDoubleQuotesL />
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-0 mx-0 lg:ml-0 text-xl mt-0 lg:mx-16 leading-relaxed'>
            "I was particularly impressed by your approachable communication style, adherence to established deadlines, and inclusive design approach. You always took the time to provide comprehensive answers to my questions and ensured I was actively involved at every stage. The final product speaks volumes. The website beautifully embodies the essence of our center, perfectly capturing the serenity and tranquility we offer our clients. I am confident it will play a vital role in attracting new clients and showcasing the unique services we provide."
          </motion.p>
        </div>
        <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[4rem] mx-8 lg:ml-28 text-[0.9rem] font-semibold text-gray-400 mt-2 lg:mx-16 leading-loose tracking-wide'>
          -FRANCIS JAVIER
        </motion.p>
        <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-24 leading-loose'>
          Seeking to align its digital presence with its core values, Nordic Shiatsu Centre partnered with Surusha Technology to craft a digital experience that embodies the clinic's commitment to exceptional service and client well-being.
        </motion.p>
        <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-28 leading-loose'>
        Leveraging WordPress, an open-source content management system, the Surusha team collaborated with Francis to build the new website. This user-friendly platform empowers Francis to effortlessly manage his website content. Furthermore, through a collaborative approach, an effective SEO strategy was developed to enhance the website's visibility in Google search results, potentially attracting a wider audience. To further streamline the user experience, an intuitive booking system was implemented, allowing clients to seamlessly schedule appointments and make inquiries.
        </motion.p>
        <div className='w-[90vw] h-[0.1rem] bg-gray-500 mx-auto mt-12'>
          <hr />
        </div>
        <div className='mt-8 mb-24 w-[90vw] flex items-center justify-between mx-auto h-[25vh]'>
          <a href="/portfolio/data-analytics">
            <motion.div initial={{opacity: 0, transform:"translateX(-30%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-6 lg:ml-0 group w-[30vw] lg:w-[16vw] lg:h-[75%] flex items-center justify-end text-center'>
              <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-4 ml-4 lg:ml-0 mr-4'>
                <FaArrowLeftLong className='text-white' />
              </div>
              <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-0 lg:mr-0 -translate-x-2 group-hover:translate-x-1 transition-all duratiion-800'>
                <p className='text-[0.8rem] lg:text-[0.95rem] font-semibold text-end'>
                  Leveraging Data and Analytics to drive sustainable initiatives
                </p>
                <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                  January 08, 2024 
                </p>
              </div>
            </motion.div>
          </a>
          <a href="/portfolio/app-for-virtual-reality">
            <motion.div initial={{opacity: 0, transform:"translateX(30%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='group w-[30vw] lg:w-[16vw] h-[75%] ml-[28vw] lg:ml-[56vw] flex items-center justify-end text-center'>
            <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-2 lg:mr-0 translate-x-2 group-hover:-translate-x-2 transition-all duratiion-800'>
              <p className='text-[0.8rem] lg:text-[0.95rem] font-semibold text-left'>
                Levelling up the Digital Transformation
              </p>
              <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                August 07, 2023 
              </p>
            </div>
            <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-4 lg:mb-8 ml-4 lg:ml-0 mr-4'>
              <FaArrowRightLong className='text-white' />
            </div>
            </motion.div>
          </a>
      </div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
        </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(25%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(35%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.6}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"cx1"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default CustomerExperience