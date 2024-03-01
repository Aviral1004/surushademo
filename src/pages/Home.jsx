import React from 'react'
import Loop from '../assets/loop.mp4';
import Home2 from '../components/Home2.jsx';
import CustomerBrands from '../components/CustomerBrands.jsx';
import Feedbacks from '../components/Feedbacks.jsx';
import { Link as LinkRouter } from 'react-router-dom';
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

const Home = () => {

  // const handleMouseEnter = () => {
  //   gsap.to("#child::before", { width: "100%" });
  // };
  
  // const handleMouseLeave = () => {
  //   gsap.to("#child::before", { width: "0%" });
  // };
  // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

  return (
    <div className='w-full min-h-[100vh]'>
      <div className=''>
        <div className='flex flex-col'>
          <video src={HomeBg} autoPlay loop muted className='opacity-76 mt-14 md:mt-0 scale-150 md:scale-100' />
              <span className='absolute top-40 left-0 uppercase md:top-72 md:left-28 text-white font-extrabold text-3xl text-center md:text-7xl z-40'>
                achieve more with less
              </span>
              <span className='absolute text-white top-64 left-20 z-40 md:text-4xl md:top-[65vh] md:left-[32vw] text-center'>
                Technology Made Simple!
              </span>
        </div>
        <div className='flex flex-col flex-wrap h-[250vh] md:h-[150vh] md:min-h-[100vh] mx-2 md:mx-36 my-[-8rem] md:mt-[-12rem] items-center justify-around md:justify-center'>
          {/* Change it to define the strategy of sursusha tech for ai&ml, full stack and staffing criteria */}
          <p className='italic leading-8 text-slate-500 mx-2 mt-32 md:mt-[16rem] mt-[-3rem] md:my-4 text-center'>
            We, at Surusha Technology, are passionate about harnessing the transformative power of artificial intelligence and machine learning. Our team of expert developers leverages cutting-edge algorithms and industry knowledge to craft custom AI & ML applications tailored to your unique needs. Whether it's streamlining operations, enhancing customer experiences, or unlocking valuable insights from your data, we collaborate with you to achieve your specific goals.
          </p>

          <p className='italic leading-8 text-slate-500 mx-2 mt-[-24rem] md:my-4 text-center'>
            We understand the importance of crafting seamless digital experiences that empower businesses to connect with their audience on a deeper level. Our full-stack developers possess expertise in both front-end and back-end development, ensuring smooth integration and a cohesive user journey across all platforms. We employ agile methodologies and prioritize user-centric design throughout the development process, guaranteeing visually appealing, intuitive, and functionally robust websites and mobile applications.
          </p>

          <p className='italic leading-8 text-slate-500 mx-2 mt-[-24rem] md:my-4 text-center'>
            Identifying the right IT talent can be a daunting task. Surusha Technology simplifies this process by providing access to a network of skilled and experienced IT professionals. We take the time to understand your specific needs and match you with individuals who possess the perfect combination of technical expertise and cultural fit. Whether you require temporary assistance or a long-term partner, we are dedicated to finding the perfect talent to seamlessly integrate with your existing team and propel your business forward.
          </p>
        </div>  
      </div>
      <Home2 />
      <div className='flex h-[50vh] md:h-[60vh] w-[95vw] flex-col md:flex-row justify-center md:justify-around text-center md:items-start mt-[50vh] md:mt-[-20vh]'>
        <CustomerBrands title={"Our Partners"} />
        {/* <div className='md:w-2 h-[10rem] md:h-[15rem] md:bg-blue-500' />
        <CustomerBrands title={"Indian Customers"} /> */}
      </div>
      <Feedbacks />
      <div className='h-[130vh] md:h-[100vh] w-[100vw] flex flex-col md:flex-row'>
        <div className='h-[25vh] md:h-[100vh] w-full md:w-[55vw] md:items-center md:justify-center'>
          <img src="https://routadigital.com/wp-content/uploads/2020/03/image1-home2.png" alt="" className='mt-12 md:mt-24 md:h-[80%] md:w-[100%] object-center' />
        </div>
        <div className='h-[25vh] md:h-[100vh] w-full md:w-[50vw] md:items-start text-left md:justify-center'>
          <p className='px-6 md:px-16 text-blue-500 mt-[12vh] md:mt-[8vh] font-semibold text-[1.1rem]'>
            DRIVING SOFTWARE INNOVATION TOGETHER
          </p>
          <p className='px-6 md:px-16 md:mr-12 mt-8 md:mt-8 font-extrabold tracking-tight text-4xl text-left'>
            Meet your business & sustainability goals with Surusha Technology
          </p>
          <p className='px-6 md:px-16 mt-4 md:mt-8 text-gray-500 leading-loose text-left'>
            Many leading enterprises, SMEs, and technology challengers choose Surusha Technology as their trusted partner. From early business planning and conceptualization to service support and maintenance, our solutions promote digital transformation, speed up business results and enable companies to reach their sustainability goals.
          </p>
          <p className='px-6 md:px-16 mt-4 md:mt-4 text-gray-500 leading-loose text-left'>
            We are proud to be a trusted partner for businesses and organizations that are committed to creating a more sustainable future with us.
          </p>
          <LinkRouter className='px-6 md:px-16'>
            <button className='bg-blue-500 mt-0 md:mb-0 px-8 py-3 text-center text-white font-semibold text-[1.2rem] uppercase'>
                Learn More
            </button>
          </LinkRouter>
        </div>
      </div>
      <div className='mt-20 lg:mt-28 min-h-[100vh] lg:h-[160vh] w-[100vw] flex flex-col items-start justify-center bg-gray-100'>
        <div className='mt-[0rem] lg:mt-12 w-[100vw] h-[35vh] flex flex-col justify-center items-center lg:justify-around lg:items-center'>
          <div>
            <span className='text-blue-500 text-[0.85rem] text-3xl mx-2 font-bold'>
              // 
            </span>
            <span className='text-blue-500 text-[0.85rem] text-3xl mr-4 font-bold'>
              BUSINESS BENEFITS
            </span>
          </div>
          <p className='mb-28 text-4xl font-bold'>
            Why Choose Us
          </p>
        </div>
        <div className='w-[100vw] min-h-[100vh] lg:h-[125vh] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center'>
          <div className='w-7/8 lg:w-[40vw] h-5/6 flex flex-col items-center justify-start mx-12'>
            <div id='parent'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4' />
              <span className='ml-12 lg:mx-28 font-semibold'>Ease of Doing Business</span>
              <div id='child' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We prioritize understanding our customers' needs and build strong, collaborative partnerships with them. These partnerships are founded on a shared commitment to each other's success. We provide comprehensive support throughout the entire process and co-own data and intellectual property, fostering mutual growth and achieving success together.
              </p>
            </div>
            <div id='parent1'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16' />
              <span className='mx-8 lg:mx-24 font-semibold'>Commitment to the Quality</span>
              <div id='child1' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We prioritize quality and adhere to rigorous standards that emphasize meticulous attention to detail, precision, and reliability in every project. Our well-established processes guarantee consistent quality while fostering technical excellence and shared ownership, leading to improved outcomes and trustworthy client relationships.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-[20vw] h-full lg:h-[80vh]'>
            <img src={OfficeLady} alt="" className='w-full lg:w-[100%] md:h-full object-contain lg:object-cover' />
          </div>
          <div className='w-[40vw] flex flex-col items-center justify-around mx-16'>
            <div id='parent2'>
              <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16 lg:mt-0' />
              <span className='w-full mx-[3.5rem] lg:mx-40 font-semibold'>Cost Efficiency</span>
              <div id='child2' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                We believe in transparent and competitive pricing, ensuring our clients see a significant return on their investment. We provide adaptable and cost-effective IT solutions that streamline business operations. Our approach combines both on-site and offshore resources, maximizing efficiency and accelerating the return on your investment.
              </p>
            </div>
            <div id='parent3'>
            <img src={Badge} alt="Badge Image" className='mx-28 lg:mx-56 mb-4 mt-16' />
              <span className='mx-[3rem] lg:mx-36 font-semibold'>Change in speed</span>
              <div id='child3' className='mt-4 w-full h-[0.15rem] bg-gray-300' />
              <p className='mt-4 text-center leading-loose'>
                Leveraging our comprehensive knowledge base and skilled workforce, we empower SMEs and large corporations to achieve their goals swiftly. We offer them access to top-notch resources, expert guidance, and cutting-edge technology, all tailored to their specific needs. By utilizing pre-built, scalable, and modular components, we accelerate product launch timelines and deliver the desired results rapidly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='techIndex' className='min-h-[130vh] w-[100vw] flex flex-col lg:flex-row lg:justify-center lg:items-center bg-gradient-to-r from-blue-500 to-sky-400'>
        <div className='w-[100vw] lg:w-[40vw] lg:h-full min-h-[100vh] flex flex-col items-start justify-center'>
          <div className='flex mx-12 text-white font-semibold text-[0.85rem] mb-2'>
            <span>
              //  
            </span>
            <span>
              TECHNOLOGY INDEX
            </span>
          </div>
          <p className='text-white md:text-3xl font-extrabold mx-12'>
            A comprehensive suite of IT services designed to foster collaboration and understanding between Tech and Business teams.
          </p>
          <p className='mx-12 text-[0.9rem] mt-4 text-white font-semibold'>            
            Leverage our expertise and cutting-edge technology to transform your business and stay ahead of the curve.
          </p>
          <div className='w-full h-[30vh] flex flex-col items-start mx-12 mt-4'>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Consulting</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>AI & ML Development</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Web Development</span>
              </div>
              <div className='flex my-3'>
                <IoCheckmarkDone className='text-white font-bold scale-110 mt-1' /> <span className='ml-6 text-white font-semibold'>Support & Maintenance</span> 
              </div>
          </div>
        </div>
        <div className='w-[100vw lg:w-[60vw] lg:h-full min-h-[100vh] flex items-center justify-center mx-auto'>
          <div className='flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-16 w-full lg:w-3/4 lg:h-full mx-0 lg:mx-4'>
            <LinkRouter to={"/"}>
              <div className='devops hover:bg-blue-700 border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500'>
                <img src={Devops} alt="" className='h-12 w-12 invert' />
                <span className='uppercase text-white text-[0.6rem] mt-4 font-semibold'>devops</span>
              </div>
            </LinkRouter>

            <LinkRouter to={"/"}>
            <div className='devops hover:bg-blue-800 border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={Enterprise} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>enterprise architecture</span>
            </div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <div className='devops hover:bg-blue-800 border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={DesignDev} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>UI design & development</span>
            </div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <div className='devops hover:bg-blue-800 border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={CloudComputing} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>cloud computing</span>
            </div>
            </LinkRouter> 
            <LinkRouter to={"/"}>
            <div className='devops hover:bg-blue-800 border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0'>
              <img src={Blockchain} alt="" className='h-12 w-12 invert' />
              <span className='uppercase text-white text-[0.6rem] mt-8 font-semibold'>Blockchain Development</span>
            </div>
            </LinkRouter>
            <LinkRouter to={"/"}>
            <div className='hover:bg-blue-800 devops border border-white shadow-sm h-44 lg:h-40 w-72 lg:w-44 flex flex-col justify-center m-auto items-center hover:scale-125 transition-all duration-500 mt-8 lg:mt-0 mb-52 lg:mb-0'>
              <img src={Seo} alt="" className='h-12 w-12 invert' />
              <span className=' uppercase text-white text-[0.6rem] mt-8 font-semibold'>seo & email marketing</span>
            </div>
            </LinkRouter>
          </div>
        </div>
      </div>
      <div className='mt-[0rem] lg:mt-0 w-[100vw] lg:w-[85vw] h-[40vh] lg:h-[35vh] bg-gradient-to-r from-blue-500 to-sky-400 mx-auto -translate-y-[17vh] '>
        <img src={Handshake} alt="" className='h-full w-full object-cover filter opacity-50 -z-50' />
        <div className='w-[80vw] h-5/6 mx-auto flex flex-col lg:flex-row -translate-y-[32vh]'>
          <div className='w-2/3 h-full flex flex-col items-start justify-center'>
            <span className='w-[90vw] mt-0 lg:mx-12 text-white text-[0.8rem] lg:text-xl'>
              Start your journey with a partner who shares your vision.
            </span>
            <span className='w-[90vw] mx-0 lg:mx-12 text-white text-4xl lg:text-5xl font-bold mt-4'>
              Let's do this together
            </span>
          </div>
          <div className='w-[85vw] lg:w-1/3 ml-[-4rem] lg:mr-0 h-full flex items-center justify-end'>
            <LinkRouter>
              <button className='uppercase text-center text-blue-500 mx-16 bg-white px-10 py-4 lg:px-8 lg:py-5 text-[0.9rem] font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500'>
                contact us
              </button>
            </LinkRouter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home