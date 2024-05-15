import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"

const DataAnalytics = () => {
  return (
    <div id="da1" className='w-[100vw] min-h-[100vh]'>
      <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='h-[45vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-4 lg:ml-[2rem] mt-[-0.5rem] lg:mt-[0.5rem] text-white font-bold lg:font-extrabold'>
              Leveraging Data and Analytics to drive sutainable initiatives 
            </h2>
            <div className='w-[90vw] mt-0 lg:mt-2 flex flex-col lg:flex-row lg:items-center justify-start ml-8 lg:w-[60vw]'>
                <LinkRouter to={"/"} className='ml-[-0.5rem] uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 lg:ml-8'>
                    Home
                </LinkRouter>
                <LinkRouter to={"/portfolio"} className='uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-[-0.5rem] lg:ml-8'>
                    PORTFOLIO
                </LinkRouter>
                <p className='h-[100%] font-bold text-white ml-[-0.5rem] lg:ml-8 mt-8 lg:mt-0'>
                  Leveraging Data and Analytics to drive sutainable initiatives
                </p>
            </div>
      </motion.div>
      <div className='mt-12 w-[90vw] lg:w-[90vw] h-[28vh] lg:h-[16vh] mx-auto border-b border-b-black flex flex-col lg:flex-row items-end justify-between'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              PUBLISHED:
            </p>
            <p className='font-semibold'>
              January 08, 2024
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='lg:ml-12 -translate-x-10 lg:-translate-x-0 mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CATEGORY:
            </p>
            <p className='font-semibold'>
              Product Engineering
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CLIENT:
            </p>
            <p className='font-semibold mr-48 lg:mr-28'>
              Retta
            </p>
          </motion.div>
      </div>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Company Overview</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Retta, a leading professional services group in the Nordics, specializes in brokerage and management of apartments, properties, and offices. They offer a comprehensive suite of real estate solutions for both housing and office space sectors, empowering their clients to navigate the full lifecycle of their real estate needs.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
      Problem Statement
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
      The real estate sector is a significant contributor to global carbon emissions. Retta, a leading property management company in the Nordics, recognizes this and aims to empower property owners with solutions that reduce their environmental impact. Their mission is to guide clients towards responsible decision-making and promote a sustainable future through their services. Here's where ESG reporting becomes a powerful tool. These reports enhance transparency and accountability regarding a company's sustainability efforts. In the real estate context, ESG reports verify a building's energy efficiency based on actual energy consumption and CO2 emissions.  A critical aspect of ESG reporting is calculating energy data effectively. Despite being a major industry player, Retta faced a challenge – a vast amount of energy data scattered across various sites, lacking a centralized system for collection and analysis. This presented a hurdle in generating accurate and efficient ESG reports.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-3xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
      How did Surusha Technology helped Retta
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
      Surusha's team provided a critical solution for Retta: a data lake or data warehouse. This centralized system unifies energy data from various third-party sources, including Metry API, Google Maps API, AccuWeather API, Fingrid, and CO2 Local Power APU. This unified structure, aligned with the agreed-upon architecture, empowers Retta to generate ESG reports using Power BI. The project's key challenge lay in harmonizing the data. Surusha's team had to decipher the format and structure of data from each source and transform it into a consistent format, enabling seamless utilization for ESG reporting.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translate(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Technologies utilised
      </motion.p>
      <ul className='list-disc ml-4'>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-loose'>Azure Blob store for data lake</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Microsoft Power BI for reporting and visualization</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Azure Databrics for data processing engine</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Azure Data Factory (ADF) for ETL solution</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.9}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>SQLServer for database</motion.li>
      </ul>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-3xl font-bold mt-6 ml-[1.2rem] lg:ml-16'>Results and Achievements</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        The data lake solution empowers Retta with clean and reliable energy data, enabling them to strategically steer their efforts towards a sustainable future.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>These help Retta with</motion.p>
      <ul className='list-disc ml-4'>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-loose'>Efficient monitoring and control of the production processes</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Streamlined logistics and purchase management</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Dynamic takt management</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Provision for disaster recovery/exception handling</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.9}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Improved project planning and production planning</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-1 lg:mx-16 leading-loose'>Provision for disaster recovery/exception handling</motion.li>
      </ul>
      <div className='w-[90vw] h-[0.1rem] bg-gray-500 mx-auto mt-12'>
          <hr />
      </div>
      <div className='mt-8 mb-24 w-[90vw] flex items-center justify-between mx-auto h-[25vh]'>
          <a href="/portfolio/digital-experience">
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='ml-6 lg:ml-0 group w-[30vw] lg:w-[16vw] h-[75%] flex items-center justify-end text-center'>
              <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-4 ml-4 lg:ml-0 mr-4'>
                <FaArrowLeftLong className='text-white' />
              </div>
              <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-0 lg:mr-0 group-hover:translate-x-1 transition-all duratiion-800'>
                <p className='text-[0.95rem] font-semibold text-end'>
                  Unlock Growth: Navigate Digital Excellence
                </p>
                <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                  March 01, 2024 
                </p>
              </div>
            </motion.div>
          </a>
          <a href="/portfolio/customer-experience">
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.4}} className='group w-[30vw] lg:w-[16vw] h-[75%] ml-[28vw] lg:ml-[56vw] flex items-center justify-end text-center'>
            <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-2 lg:mr-0 group-hover:-translate-x-1 transition-all duratiion-800'>
              <p className='text-[0.95rem] font-semibold text-left'>
                Award winning Digital platform for consulting clients
              </p>
              <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                November 15, 2023 
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
        <LinkScroll to={"da1"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default DataAnalytics