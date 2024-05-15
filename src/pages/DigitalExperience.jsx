import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"

const DigitalExperience = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]'>
      <motion.div initial={{opacity: 0, transform:"translateX(10%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.2, duration: 0.3}} id="dg1" className='h-[45vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-4 lg:ml-[2rem] mt-[-0.5rem] lg:mt-[-1.5rem] text-white font-bold lg:font-extrabold'>
              Unlock Growth: Navigate Digital Excellence 
            </h2>
            <div className='w-[90vw] mt-0 lg:mt-8 flex flex-col lg:flex-row lg:items-center justify-start ml-8 lg:w-[50vw]'>
                <LinkRouter to={"/"} className='ml-[-0.5rem] uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 lg:ml-8'>
                    Home
                </LinkRouter>
                <LinkRouter to={"/portfolio"} className='uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-[-0.5rem] lg:ml-8'>
                    PORTFOLIO
                </LinkRouter>
                <p className='h-[100%] font-bold text-white ml-[-0.5rem] lg:ml-8 mt-8 lg:mt-0'>
                  Unlock Growth: Navigate Digital Excellence
                </p>
            </div>
      </motion.div>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-4 leading-loose'>
        Retta is a leading professional services group in the Nordics with a focus on the brokerage and management of apartments, properties, and offices.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Retta saw a strategic opportunity in providing loans to housing companies. This initiative could empower them to establish key performance indicators (KPIs), quality standards, and service levels from the outset.  By facilitating streamlined contract management, Retta's approach could also mitigate potential risks for partnering financial institutions.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Starting Point
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Previously, Retta relied on manual processes involving Excel spreadsheets to track and manage the tendering status of loans for housing companies. This approach necessitated the creation of separate analyses, drawing data from various sources across the organization. This resulted in inefficiencies, data redundancy, and delays. Additionally, prioritizing loan applications manually proved to be a laborious and time-consuming task.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Seeking to streamline their laborious processes and empower future growth, Retta required a swift solution that would optimize operations and establish a digital-ready platform.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.3}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Basics of Streamlining
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Following comprehensive analysis and information gathering, our team strategically opted to develop a custom web application tailored to Retta's specific needs. This tailored solution empowered Retta to: 
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Prioritize loan applications based on your specific criteria.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Gain instant access to comprehensive information and insightful analyses on housing companies.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Facilitate seamless communication between housing managers, banks, and other stakeholders through a centralized platform.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Manage the loaning process from start to end.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.9}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        The project commenced with a meticulously crafted plan outlining timelines, resource allocation, and clear milestones. Through collaborative efforts, the team successfully developed the application within an efficient six-month timeframe, ensuring seamless integration and functionality across all modules.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.3}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Feedback from the client
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose italic font-semibold'>
        "At Retta, we're committed to fostering a more sustainable, profitable, and responsible real estate sector. Finding a partner who shares these values was crucial, and our collaboration with Surusha Technology has been highly rewarding. Our joint journey has transcended a typical "IT project" to become a collaborative problem-solving and value-creation exercise, driven by a business-centric approach and a focus on measurable results. We appreciated the team's flexibility, efficiency, and collaborative spirit."
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose font-semibold'>
        -Luari Phillips, Chief Strategy / Accelaration / Development / Information Officer
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.3}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        A positive transformation  
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        By transitioning from manual tendering to a digital solution, Retta has embarked on a transformative journey. Our solutions have empowered them to streamline operations, elevate service offerings, and achieve significant efficiency gains.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        By drawing on our expertise in product development and cutting-edge IT application development, we've collaborated with Retta to unlock new revenue streams. This collaborative effort has also led to a reduction in support requirements and associated costs.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        We excel at collaborating with clients to understand their unique needs and craft custom IT solutions that propel their business forward.
      </motion.p>
      <div className='w-[90vw] h-[0.1rem] bg-gray-500 mx-auto mt-12'>
          <hr />
      </div>
      <div className='mt-8 mb-24 w-[90vw] flex items-center justify-between mx-auto h-[25vh]'>
          <a href="/portfolio/bringing-it-and-business-together">
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-6 lg:ml-0 group w-[30vw] lg:w-[16vw] h-[75%] flex items-center justify-end text-center'>
              <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-4 ml-4 lg:ml-0 mr-4'>
                <FaArrowLeftLong className='text-white' />
              </div>
              <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-0 lg:mr-0 group-hover:translate-x-1 transition-all duratiion-800'>
                <p className='text-[0.95rem] font-semibold text-end'>
                  Unifying IT and Business Together
                </p>
                <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                  March 03, 2024 
                </p>
              </div>
            </motion.div>
          </a>
          <a href="/portfolio/data-analytics">
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='group w-[30vw] lg:w-[16vw] h-[75%] ml-[28vw] lg:ml-[56vw] flex items-center justify-end text-center'>
            <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-2 lg:mr-0 group-hover:-translate-x-1 transition-all duratiion-800'>
              <p className='text-[0.95rem] font-semibold text-left'>
                Leveraging Data and Analytics to drive sutainable initiatives
              </p>
              <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                January 08, 2024 
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
        <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"dg1"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default DigitalExperience