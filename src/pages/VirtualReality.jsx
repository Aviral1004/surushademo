import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"
import { IoLogoInstagram } from "react-icons/io";


const VirtualReality = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]'>
      <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='h-[45vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center bg-blue-500'>
            <h2 className='text-3xl lg:text-4xl ml-4 lg:ml-[2rem] mt-[-0.5rem] lg:mt-[0.5rem] text-white font-bold lg:font-extrabold'>
              Levelling up the Digital Transformation 
            </h2>
            <div className='w-[90vw] mt-0 lg:mt-2 flex flex-col lg:flex-row lg:items-center justify-start ml-8 lg:w-[60vw]'>
                <LinkRouter to={"/"} className='ml-[-0.5rem] uppercase text-gray-200 font-semibold mt-8 lg:mt-0 hover:text-white transition-all duration-500 lg:ml-8'>
                    Home
                </LinkRouter>
                <LinkRouter to={"/portfolio"} className='uppercase text-gray-200 font-semibold mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-[-0.5rem] lg:ml-8'>
                    PORTFOLIO
                </LinkRouter>
                <p className='h-[100%] font-bold text-white ml-[-0.5rem] lg:ml-8 mt-8 lg:mt-8'>
                  Levelling up the Digital Transformation 
                </p>
            </div>
      </motion.div>
      <div className='mt-12 w-[90vw] lg:w-[90vw] h-[50vh] lg:h-[16vh] mx-auto border-b border-b-black flex flex-col lg:flex-row items-start lg:items-end justify-between'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              PUBLISHED:
            </p>
            <p className='font-semibold'>
              January 08, 2024
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='lg:ml-12 lg:-translate-x-0 mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CATEGORY:
            </p>
            <p className='font-semibold'>
              Product Engineering
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='mx-0 ml-4 lg:ml-12 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CLIENT:
            </p>
            <p className='font-semibold mr-48 lg:mr-28'>
              Fixcel
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='mt-[-3rem] lg:mt-0 w-[100vw] lg:w-[20vw] h-[15vh] lg:h-[100%] flex'>
            <a href="https://www.linkedin.com/company/72980242/admin/feed/posts/" target='_blank' rel="noreferrer" className='mt-12 w-8 h-8 mx-4 bg-blue-500 text-white rounded-full hover:-translate-y-1 transition-all duration-800'>
              <div><FaLinkedinIn className='mx-auto mt-2 ' /></div>
            </a>
            <a href="https://www.facebook.com/share/NhxB7ohaxXFDuBdV/?mibextid=qi2Omg" target='_blank' rel="noreferrer" className='mt-12 w-8 h-8 mx-4 bg-blue-800 rounded-full text-white hover:-translate-y-1 transition-all duration-800'>
              <div><FaFacebookF className='mx-auto mt-2 ' /></div>
            </a>
            <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer" className='mt-12 w-8 h-8 mx-4 bg-red-600 rounded-full text-white hover:-translate-y-1 transition-all duration-800'>
              <div><IoMdMail className='mx-auto mt-2 ' /></div>
            </a>
            <a href="https://www.instagram.com/surushatechnologies?igsh=MW43eG82dHdsazFwNw==" target='_blank' rel="noreferrer" className='mt-12 text-gray-600 lg:text-gray-100 lg:scale-125 ml-4 w-8 h-8 bg-[#A1348E] rounded-full hover:-translate-y-1 transition-all duration-800'><IoLogoInstagram className="mt-2 mx-auto" /></a>
          </motion.div>
      </div>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}}p className='text-3xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Levelling up the Digital Transformation</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Overview</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>Parmaco Group's Fixcel, a leading name in prefabricated steel building structures, plays a key role in the construction industry.</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Problem Statement</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>Though every organization operates uniquely, a common challenge unites them: securing a reliable and efficient information management system to thrive in today's competitive environment. Fixcel, with its innovative business model, faced limitations in its existing IT infrastructure, heavily relying on legacy systems.</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Objectives</motion.p>
      <div className='w-[90vw] mx-auto min-h-[25vh] flex flex-col lg:flex-row items-center justify-between'>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='w-[90vw] h-[18vh] border border-black rounded-md text-[0.9rem] text-gray-500 leading-loose shadow-lg mt-8 lg:mt-0 lg:mr-6'>
          <p className='ml-6 lg:ml-4 mt-2 lg:mt-6'>
          To optimize operations, ensure regulatory compliance, and future-proof their digital foundation, organizations are seeking innovative solutions.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='w-[90vw] h-[22vh] lg:h-[18vh] border border-black rounded-md text-[0.9rem] text-gray-500 leading-loose shadow-lg mt-8 lg:mt-0'>
          <p className='ml-6 lg:ml-8 mt-2 lg:mt-4'>
            Seeking to enhance their agility and adaptability in the face of evolving business demands, Fixcel embarked on the development of an Enterprise Resource Planning (ERP) system.
          </p>
        </motion.div>
      </div>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-3xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>How did Surusha Technology helped Fixcel</motion.p>
      <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='mt-8 w-[90vw] mx-auto min-h-[30vh] flex flex-col lg:flex-row items-center justify-between'>
        
        <div className='w-[90vw] lg:w-1/3 h-[60vh] border border-gray-300 mt-4 lg:mt-0 lg:mx-2'>
          <FaCheck className='h-12 w-12 p-3 ml-6 lg:ml-12 mt-8 bg-blue-500 text-white rounded-full' />
          <p className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose mb-12 '>
            Aligned with Industry 4.0 principles, the new platform empowers Fixcel with real-time insights, enabling faster decision-making, streamlined project planning, and enhanced forecasting capabilities for continued leadership in their domain.
          </p>
        </div>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='w-[90vw] lg:w-1/3 h-[60vh] border border-gray-300 mx-2 mt-8 lg:mt-0'>
          <FaCheck className='h-12 w-12 p-3 ml-6 lg:ml-12 mt-8 bg-blue-500 text-white rounded-full' />
          <p className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose mb-12 '>
            Fixcel's custom-built ERP system fosters operational flexibility, ensures regulatory compliance, and empowers the organization with agility and digital readiness. This future-proof foundation positions Fixcel for sustainable growth.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1}} className='w-[90vw] lg:w-1/3 h-[60vh] border border-gray-300 mx-4 mt-8 lg:mt-0'>
          <FaCheck className='h-12 w-12 p-3 ml-6 lg:ml-12 mt-8 bg-blue-500 text-white rounded-full' />
          <p className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-4 lg:mx-16 leading-loose '>
            The implemented ERP system automates core business processes, encompassing project planning, production, monitoring, logistics, purchasing, inventory management, and dynamic Takt control. This holistic approach streamlines operations and enhances efficiency.
          </p>
        </motion.div>
      </motion.div>
      <div className='w-[90vw] h-[0.1rem] bg-black mx-auto mt-12'>
      </div>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-3xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Processes</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>Requirement Gathering</motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Through collaborative workshops, Surusha Technology and Fixcel delved into the company's business processes, pinpointing areas ripe for automation and efficiency gains. This joint effort involved understanding daily operations, workflow, and customer needs. The analysis revealed the requirement for a bespoke, modern ERP system to seamlessly integrate and streamline project planning, production planning, logistics, purchasing, and inventory management.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
      Opting for the MERN stack, Surusha Technology crafted a robust, scalable, and efficient ERP system capable of handling Fixcel's intricate business processes. The integrated modules automate operational workflows, empowering swift and informed decision-making.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Integration
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        A meticulously crafted implementation plan, outlining timelines, resource allocation, and key milestones, kickstarted the process. Through a collaborative effort, the Surusha Technology team developed and integrated all ERP modules within six months. Constant communication and close collaboration with Fixcel ensured the system aligned perfectly with their requirements and facilitated a smooth transition from the legacy system.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.5}} className='text-2xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Education & Training
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-8 lg:mx-16 leading-loose'>
        Recognizing the crucial role of user adoption, Surusha Technology provided comprehensive training to equip the Fixcel team with the skills to navigate the new system seamlessly. This ongoing support ensures continued stability, addresses any challenges, and fosters continuous improvement.
      </motion.p>
      <motion.p initial={{opacity: 0, transform:"translateY(35%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 0.4}} className='text-4xl font-bold mt-6 ml-[1.2rem] lg:ml-16 mx-16 lg:mx-0'>
        Results & Achievements
      </motion.p>
      <ul className='list-disc ml-4'>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Changed project planning and production planning for the good</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Efficiently monitor and control of the production processes</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.7}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Streamlined logistics and purchasing management</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Upgraded inventory management</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.9}}li className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Adaptive takt time management</motion.li>
        <motion.li initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1}} className='ml-[1.3rem] mx-8 lg:ml-16 text-[0.9rem] text-gray-500 mt-6 lg:mx-16 leading-normal'>Provision for disaster recovery/exception handling</motion.li>
      </ul>
      <div className='w-[90vw] h-[0.1rem] bg-gray-500 mx-auto mt-12'>
          <hr />
        </div>
        <div className='mt-8 mb-32 lg:mb-16 w-[90vw] mx-auto h-[25vh]'>
          <a href="/portfolio/customer-experience">
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.5}} className='group w-[30vw] lg:w-[16vw] h-[75%] ml-8 lg:ml-4 flex items-center justify-end text-center'>
            <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-4 ml-4 lg:ml-0 mr-4'>
                <FaArrowLeftLong className='text-white' />
              </div>
            <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-2 group-hover:-translate-x-1 transition-all duratiion-800'>
              <p className='text-[0.8rem] lg:text-[0.95rem] font-semibold text-end'>
                Award winning Digital platform for consulting clients
              </p>
              <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                November 15, 2023
              </p>
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

export default VirtualReality