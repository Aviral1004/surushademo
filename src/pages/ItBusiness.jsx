import React, {useEffect} from 'react'
import { Link as LinkRouter } from 'react-router-dom';

import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import {Link as LinkScroll} from "react-scroll"

const ItBusiness = () => {

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Scroll to the element with the specified ID
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div id="it1" className='w-[100vw] min-h-[100vh]'>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-[45vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-center bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-1.5rem] lg:mt-0 text-white font-bold lg:font-extrabold'>
            Bringing IT And Business Together 
            </h2>
            <div className='w-[100vw] mt-4 flex flex-col lg:flex-row lg:items-center justify-start ml-8 lg:w-[50vw]'>
                <LinkRouter to={"/"} className='uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-8'>
                    Home
                </LinkRouter>
                <LinkRouter to={"/portfolio"} className='uppercase font-semibold text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500 ml-8'>
                    PORTFOLIO
                </LinkRouter>
                <p className='h-[100%] font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                Bringing IT And Business Together
                </p>
            </div>
        </motion.div>
        <div className='mt-12 w-[90vw] lg:w-[90vw] h-[28vh] lg:h-[16vh] mx-auto border-b border-b-black flex flex-col lg:flex-row items-end justify-between'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              PUBLISHED:
            </p>
            <p className='font-semibold'>
              March 03, 2024
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='-translate-x-10 lg:-translate-x-0 mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CATEGORY:
            </p>
            <p className='font-semibold'>
              Product Engineering
            </p>
          </motion.div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.6}} className='mx-4 text-[0.9rem] mb-6'>
            <p className='text-gray-500 font-semibold'>
              CLIENT:
            </p>
            <p className='font-semibold'>
              Apex Largest Automotive Manufacturer
            </p>
          </motion.div>
        </div>
        <div className='mt-12 w-[90vw] lg:w-[90vw] mx-20 min-h-[100vh] flex flex-col items-start'>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='ml-[-3.5rem] lg:ml-0 text-[0.9rem] font-bold text-gray-500'>
            How Did Surusha Technology Empower a Leading Automaker to Enhance Enterprise Architecture Capabilities?
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='ml-[-3.5rem] mx-16 lg:ml-0 text-[0.9rem] text-gray-500 mt-8 lg:mx-4 leading-loose'>
            The automotive industry is rapidly evolving, shifting away from traditional car manufacturing towards digitally connected solutions and integrated platforms. This transformation fuels the rise of software-defined vehicles (SDVs). Recent market research indicates the global SDV market could witness substantial growth, projected to achieve a CAGR of 22.1% between 2024 and 2033.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.6}} className='text-[0.9rem] text-gray-500 mt-8 ml-[-3.5rem] mx-16 lg:ml-0  lg:mx-4 leading-loose'>
            Recognizing the industry's rapid shift, automotive leaders are initiating strategic transformations to boost their software capabilities. This necessitates a departure from conventional hardware-focused approaches, restructuring of internal teams, and targeted capital investments. Understanding the significance of this evolution, a top automotive player partnered with Surusha Technology to implement future-focused technological changes, driving transformation and growth.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.7, duration: 0.7}} className='text-[0.9rem] text-gray-500 mt-8 ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-4 leading-loose'>
            The limitations of the existing tool in maintaining consistent and accurate data led to the proliferation of alternative documentation methods across departments. Teams resorted to using tools like PowerPoint, Visio, and others, creating information silos. This lack of standardization and governance resulted in redundancy, data loss, hampered productivity, and increased costs. Furthermore, the absence of a consolidated view of business processes and information hindered innovation and prolonged decision-making processes.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-xl font-bold mt-6 ml-[-3.5rem] lg:ml-0 mx-16 lg:mx-0'>
            Unlocking Growth: Building a Future-Proof Digital Foundation
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className='text-[0.9rem] text-gray-500 mt-8 ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-4 leading-loose'>
            Our expert team thoroughly evaluated the existing Enterprise Architecture (EA) toolchain. To address its limitations, we opted to design a custom-built, comprehensive EA solution. This tailored tool seamlessly integrates business capabilities, processes, and both information and data models. There were compelling reasons to develop a custom solution rather than relying on a commercial off-the-shelf (COTS) product.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className="mt-6 text-[0.9rem] ml-[-3.5rem] lg:ml-0 text-gray-500 font-semibold">
            CONTROL
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
            Developing a custom EA tool empowers the customer with unmatched control over functionality, development roadmap, and system integrations. This ensures continuous alignment with the organization's evolving needs, priorities, and those of its ecosystem partners.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className="mt-6 text-[0.9rem] text-gray-500 font-semibold ml-[-3.5rem] lg:ml-0">DEVELOPER EXPERIENCE</motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
            Building models that visualize the connections between systems, processes, and data empowers developers with a holistic perspective. This enables them to make well-informed decisions regarding designing and implementing new systems or refining existing ones. Additionally, generating API-based schemas (data models or individual data objects) can further benefit developers by providing a clear understanding of data structure and facilitating efficient system integration.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className="mt-6 text-[0.9rem] text-gray-500 font-semibold ml-[-3.5rem] lg:ml-0">
            DEPLOYMENT SUCCESS
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
          Rolling-out EA Tools is an involved process. Typically, organizations start with focused scope, targeting specific areas to address immediate requirements, such as replacing a critical tool or driving digitalization within a particular business domain. This in turn justifies the fact that the investment in EA tools has direct business impact, and is not just an IT exercise.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.6}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
            A phased approach, through proof-of-concept (POC) projects or a series of smaller initiatives, ensures the allocated budget delivers tangible value from the outset. Our flexible EA tool licensing model aligns with each phase's usage requirements, enabling organizations to only pay for what they need. This cost-effective approach allows for granting access to business users, fostering high adoption at minimal cost. Additionally, access for architects can be focused on users actively involved in modeling and data gathering, optimizing resource allocation.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className="mt-6 text-[0.9rem] text-gray-500 font-semibold ml-[-3.5rem] lg:ml-0">
            LOW OPEX
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
          Compared to potentially high costs associated with commercial EA tools, including ongoing licensing and maintenance fees, our custom tool's flexible licensing model significantly minimizes operational expenses.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-xl font-bold mt-6 ml-[-3.5rem] lg:ml-0'>
          Feedback from our customer:
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}}p className="mt-6 text-[0.9rem] text-gray-500 font-semibold ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
            "We are writing to express our profound appreciation for your exceptional work on developing our full-stack animated website. From the very beginning, your team's dedication and expertise have exceeded our expectations. We were particularly impressed by your Technical mastery and Creative spark."
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.6}} className="mt-6 text-[0.9rem] text-gray-500 font-semibold ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">– Head of Enterprise Architecture</motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-xl font-bold mt-6 ml-[-3.5rem] lg:ml-0'>Valuable Impacts</motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
          Surusha Technology's EA tool has had a transformative impact on the auto major's decision-making and organizational visibility. The ability to model potential scenarios across business processes, capabilities, applications, and technology now allows for thorough impact analysis prior to implementation. This results in collaborative, data-driven decision-making. Additionally, the tool significantly enhances visibility by providing stakeholders with a clear lexicon of business concepts and their relationships, promoting a shared understanding of the organization's architecture. Customization and integration capabilities ensure the tool seamlessly aligns with the company's unique needs and existing systems like ServiceNow CMDB, avoiding vendor lock-in. Finally, centralized governance features allow for efficient change control and ensure stakeholders always access the latest architectural information.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-xl font-bold mt-6 ml-[-3.5rem] lg:ml-0'>
            Conclusion
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
          Surusha Technology's partnership with the auto major demonstrates the power of EA tools to promote agility, innovation, and alignment within organizations. By integrating tools and enabling collaboration between IT and business teams, organizations can effectively manage complexity, reduce risk, and seize new opportunities within an ever-evolving business environment.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.6}} className="text-[0.9rem] text-gray-500 mt-6 leading-loose ml-[-3.5rem] mx-16 lg:ml-0 lg:mx-0">
          Surusha Technology offers a comprehensive EA solution, including advisory services (scoping, analysis of current and future states, and a prioritized project roadmap) alongside tool implementation and data migration. This ensures optimal deployment by providing expert guidance during critical phases and facilitating knowledge transfer to enhance the existing EA team's skillset.
          </motion.p>
        </div>
        <div className='w-[90vw] h-[0.1rem] bg-gray-500 mx-auto mt-12'>
          <hr />
        </div>
        <div className='mt-8 mb-24 w-[90vw] mx-auto h-[25vh]'>
          <a href="/portfolio/digital-experience">
            <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.5}} className='group w-[30vw] lg:w-[16vw] h-[75%] ml-[60vw] lg:ml-[72vw] flex items-center justify-end text-center'>
            <div className='w-[30vw] lg:w-[15vw] h-[100%] mt-2 lg:mr-0 group-hover:-translate-x-1 transition-all duratiion-800'>
              <p className='text-[0.95rem] font-semibold text-left'>
                Unlocking Growth: Journey to Digital Experience
              </p>
              <p className='mt-2 text-[0.8rem] font-semibold text-gray-500'>
                March 05, 2024 
              </p>
            </div>
            <div className='bg-blue-500 px-4 py-12 lg:px-2 lg:py-6 rounded-full mb-8 ml-4 lg:ml-0 mr-4'>
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
        <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.6}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"it1"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default ItBusiness