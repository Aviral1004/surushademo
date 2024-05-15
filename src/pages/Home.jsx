import React from 'react'
import Loop from '../assets/loop.mp4';
import Home2 from '../components/Home2.jsx';
import CustomerBrands from '../components/CustomerBrands.jsx';
import Feedbacks from '../components/Feedbacks.jsx';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import OfficeLady from '../assets/officeLady.png';
import Badge from '../assets/badge.png';
import { IoCheckmarkDone } from "react-icons/io5";
import Devops from '../assets/devops.png';
import Enterprise from '../assets/enterprise.png';
import DesignDev from '../assets/designDev.png';
import CloudComputing from '../assets/cloudComputing.png';
import Blockchain from '../assets/blockchain.png';
import Seo from '../assets/seo.png';
import Handshake from '../assets/handshake.jpg';
import HomeBg from '../assets//homeBg.mp4';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";
import CorporateLady1 from '../assets/corporateLady1.png'
import { IoMdMail } from "react-icons/io";
import HomeCollage from "../assets/homeCollage21.png"

const Home = () => {

  return (
    <div className='w-[100vw] max-w-[100vw] min-h-[100vh] overflow-x-hidden'>
      <div className=''>
        <div className='flex flex-col'>
          <video src={HomeBg} autoPlay loop muted id='homeTop' className='z-30 opacity-76 mt-14 lg:mt-0 scale-150 lg:scale-100' />
              <motion.span initial={{opacity: 0, transform:"translateY(50%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:1, duration: 1}} className='absolute top-40 left-0 uppercase lg:top-72 lg:left-28 text-white font-extrabold text-3xl text-center lg:text-7xl z-40'>
                achieve more with less
              </motion.span>
              <motion.span initial={{opacity: 0, transform:"translateY(70%)"}} animate={{opacity: 1, transform:"translateY(0)"}} transition={{delay:1, duration: 1.2}} className='absolute text-white top-64 left-20 z-40 lg:text-4xl lg:top-[65vh] lg:left-[32vw] text-center'>
                Technology Made Simple!
              </motion.span>
        </div>
        <div className='flex flex-col flex-wrap h-[250vh] lg:h-[150vh] lg:min-h-[100vh] mx-2 lg:mx-36 my-[-8rem] lg:mt-[-12rem] items-center justify-around lg:justify-center'>
          {/* Change it to define the strategy of sursusha tech for ai&ml, full stack and staffing criteria */}
          <motion.p initial={{opacity: 0, transform:"translateX(-30%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='italic leading-8 text-slate-500 mx-2 lg:mt-[16rem] mt-[-1rem] lg:my-4 text-center'>
            We, at Surusha Technology, are passionate about harnessing the transformative power of artificial intelligence and machine learning. Our team of expert developers leverages cutting-edge algorithms and industry knowledge to craft custom AI & ML applications tailored to your unique needs. Whether it's streamlining operations, enhancing customer experiences, or unlocking valuable insights from your data, we collaborate with you to achieve your specific goals.
          </motion.p>

          <motion.p initial={{opacity: 0, transform:"translateX(30%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.6}} className='italic leading-8 text-slate-500 mx-2 mt-[-24rem] lg:my-4 text-center'>
            We understand the importance of crafting seamless digital experiences that empower businesses to connect with their audience on a deeper level. Our full-stack developers possess expertise in both front-end and back-end development, ensuring smooth integration and a cohesive user journey across all platforms. We employ agile methodologies and prioritize user-centric design throughout the development process, guaranteeing visually appealing, intuitive, and functionally robust websites and mobile applications.
          </motion.p>

          <motion.p initial={{opacity: 0, transform:"translateX(-30%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.7, duration: 0.7}} className='italic leading-8 text-slate-500 mx-2 mt-[-24rem] lg:my-4 text-center'>
            Identifying the right IT talent can be a daunting task. Surusha Technology simplifies this process by providing access to a network of skilled and experienced IT professionals. We take the time to understand your specific needs and match you with individuals who possess the perfect combination of technical expertise and cultural fit. Whether you require temporary assistance or a long-term partner, we are dedicated to finding the perfect talent to seamlessly integrate with your existing team and propel your business forward.
          </motion.p>
        </div>  
      </div>
      <Home2 />
      <div className='mx-14 lg:mx-48 h-[20vh] lg:h-[20vh] w-[70vw] mt-[35vh] lg:mt-[-25vh]'>
        <motion.h2 initial={{opacity: 0, transform:"translateX(25%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='text-center text-5xl mb-8 font-bold'>Our Partners</motion.h2>
        <CustomerBrands />
      </div>
      <Feedbacks />
      <div className='h-[130vh] lg:h-[100vh] w-[100vw] flex flex-col lg:flex-row'>
        <div className='h-[25vh] lg:h-[100vh] w-full lg:w-[55vw] lg:items-center lg:justify-center'>
          <motion.img initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} src={HomeCollage} alt="" className='mt-12 lg:mt-24 mx-auto lg:h-[80%] lg:w-[80%] object-center' />
        </div>
        <div className='h-[25vh] lg:h-[100vh] w-full lg:w-[50vw] lg:items-start text-left lg:justify-center'>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='px-6 lg:px-16 text-blue-500 mt-[12vh] lg:mt-[8vh] font-semibold text-[1.1rem]'>
            DRIVING SOFTWARE ESTABLISHMENT TOGETHER
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='px-6 lg:px-16 lg:mr-12 mt-8 lg:mt-8 font-extrabold tracking-tight text-4xl text-left'>
            Meet your business & visionary goals with Surusha Technology
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='px-6 lg:px-16 mt-4 lg:mt-8 text-gray-500 leading-loose text-left'>
          Many leading organizations, including established companies, growing startups, and innovative tech firms, trust Surusha Technology as their digital transformation partner.  Our comprehensive services, from initial planning and concept development to ongoing support and maintenance, empower businesses to achieve their digital goals faster and more sustainably.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='px-6 lg:px-16 mt-4 lg:mt-4 text-gray-500 leading-loose text-left'>
            We are honored to partner with businesses and organizations dedicated to building a more sustainable future, sharing our commitment to environmental responsibility.
          </motion.p>
          <motion.a initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} href='/services' className='px-6 lg:px-16'>
            <button className='bg-blue-500 mt-0 lg:mb-0 lg:mt-4 hover:bg-sky-500 transition-all duration-800 px-8 py-3 text-center text-white font-semibold text-[1.1rem] uppercase'>
                Learn More
            </button>
          </motion.a>
        </div>
      </div>
      <div className='mt-44 lg:mt-28 min-h-[100vh] lg:h-[160vh] w-[100vw] flex flex-col items-start justify-center bg-gray-100'>
        <div className='mt-[0rem] lg:mt-12 w-[100vw] h-[35vh] flex flex-col justify-center items-center lg:justify-around lg:items-center'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}}>
            <span className='text-blue-500 text-[0.85rem] text-3xl mx-2 font-bold'>
              // 
            </span>
            <span className='text-blue-500 text-[0.85rem] text-3xl mr-4 font-bold'>
              BUSINESS BENEFITS
            </span>
          </motion.div>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mb-28 text-4xl font-bold'>
            Why Choose Us
          </motion.p>
        </div>
        <div className='w-[100vw] min-h-[100vh] lg:h-[125vh] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center'>
          <div className='w-7/8 lg:w-[40vw] h-5/6 flex flex-col items-center justify-start mx-12'>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} id='parent'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4' />
              <span className='mx-auto lg:mx-28 font-semibold'>Ease of Doing Business</span>
              <div id='child' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We prioritize understanding our customers' needs and build strong, collaborative partnerships with them. These partnerships are founded on a shared commitment to each other's success. We provide comprehensive support throughout the entire process and co-own data and intellectual property, fostering mutual growth and achieving success together.
              </p>
            </motion.div>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} id='parent1'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16' />
              <span className='mx-auto lg:mx-24 font-semibold'>Commitment to the Quality</span>
              <div id='child1' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We prioritize quality and adhere to rigorous standards that emphasize meticulous attention to detail, precision, and reliability in every project. Our well-established processes guarantee consistent quality while fostering technical excellence and shared ownership, leading to improved outcomes and trustworthy client relationships.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-full lg:w-[20vw] h-full lg:h-[80vh]'>
            <img src={CorporateLady1} alt="" className='w-full lg:w-[100%] lg:h-full object-contain lg:object-cover' />
          </motion.div>
          <div className='w-[40vw] flex flex-col items-center justify-around mx-16'>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} id='parent2'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16 lg:mt-0' />
              <span className='w-[100%] mx-auto lg:mx-40 font-semibold'>Cost Efficiency</span>
              <div id='child2' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We believe in transparent and competitive pricing, ensuring our clients see a significant return on their investment. We provide adaptable and cost-effective IT solutions that streamline business operations. Our approach combines both on-site and offshore resources, maximizing efficiency and accelerating the return on your investment.
              </p>
            </motion.div>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} id='parent3'>
            <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16' />
              <span className='mx-auto lg:mx-36 font-semibold'>Change in speed</span>
              <div id='child3' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                Leveraging our comprehensive knowledge base and skilled workforce, we empower SMEs and large corporations to achieve their goals swiftly. We offer them access to top-notch resources, expert guidance, and cutting-edge technology, all tailored to their specific needs. By utilizing pre-built, scalable, and modular components, we accelerate product launch timelines and deliver the desired results rapidly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div id='techIndex' className='min-h-[130vh] w-[100vw] flex flex-col lg:flex-row lg:justify-center lg:items-center bg-gradient-to-r from-blue-400 to-sky-400'>
        <div className='w-[100vw] lg:w-[40vw] lg:h-full min-h-[100vh] flex flex-col items-start justify-center'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='flex mx-12 text-white font-semibold text-[0.85rem] mb-2'>
            <span>
              //  
            </span>
            <span>
              TECHNOLOGY INDEX
            </span>
          </motion.div>
          <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-white lg:text-3xl font-extrabold mx-12'>
            A comprehensive suite of IT services designed to foster collaboration and understanding between Tech and Business teams.
          </motion.p>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mx-12 text-[0.9rem] mt-4 text-white font-semibold'>            
            Leverage our expertise and cutting-edge technology to transform your business and stay ahead of the curve.
          </motion.p>
          <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-full h-[30vh] flex flex-col items-start mx-12 mt-4'>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>AI & ML Development</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Web Development</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Consulting</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Support & Maintenance</span> 
              </div>
          </motion.div>
        </div>
        <div className='w-[100vw lg:w-[60vw] lg:h-full min-h-[100vh] flex items-center justify-center mx-auto'>
          <div className='flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-16 w-full lg:w-3/4 lg:h-full mx-0 lg:mx-4'>
          <LinkRouter to={"/"}>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='devops hover:bg-[#0596FF] bg-[#047DD7] border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={Enterprise} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>AI and ML Development</span>
            </motion.div>
            </LinkRouter>
            <LinkRouter to={"/"}>
              <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='devops hover:bg-[#0596FF] bg-[#047DD7] border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500'>
                <img src={Devops} alt="" className='h-12 w-12 invert' />
                <span className='uppercase text-white text-[0.6rem] mt-4 font-semibold'>devops</span>
              </motion.div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='devops hover:bg-[#0596FF] bg-[#047DD7] border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={DesignDev} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>UI design & development</span>
            </motion.div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='devops hover:bg-[#0596FF] bg-[#047DD7] border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={CloudComputing} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>Talent acquisition</span>
            </motion.div>
            </LinkRouter> 
            <LinkRouter to={"/"}>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='devops hover:bg-[#0596FF] bg-[#047DD7] border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={Blockchain} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>Blockchain Development</span>
            </motion.div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='hover:bg-[#0596FF] bg-[#047DD7] devops border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0 mb-52 lg:mb-0'>
              <img src={Seo} alt="" className='h-12 w-12 invert' />
              <span className=' uppercase text-white text-[0.6rem] mt-8 font-semibold'>seo & email marketing</span>
            </motion.div>
            </LinkRouter>
          </div>
        </div>
      </div>
      <div className='mt-[0rem] lg:mt-0 w-[100vw] lg:w-[85vw] h-[40vh] lg:h-[35vh] bg-gradient-to-r from-blue-500 to-sky-400 mx-auto -translate-y-[17vh] '>
        <img src={Handshake} alt="" className='h-full w-full object-cover filter opacity-50 -z-50' />
        <div className='w-[80vw] h-5/6 mx-auto flex flex-col lg:flex-row -translate-y-[32vh]'>
          <div className='w-2/3 h-full flex flex-col items-start justify-center'>
            <motion.span initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-[90vw] mt-0 lg:mx-12 text-white text-[0.8rem] lg:text-xl'>
              Start your journey with a partner who shares your vision.
            </motion.span>
            <motion.span initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-[90vw] mx-0 lg:mx-12 text-white text-4xl lg:text-5xl font-bold mt-4'>
              Let's do this together
            </motion.span>
          </div>
          <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-[85vw] lg:w-1/3 ml-[-4rem] lg:mr-0 h-full flex items-center justify-end'>
            <a href='/contact'>
              <button className='uppercase text-center text-blue-500 mx-16 bg-white px-10 py-4 lg:px-8 lg:py-5 text-[0.9rem] font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500'>
                contact us
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.7}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.9}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 1.1}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"homeTop"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default Home