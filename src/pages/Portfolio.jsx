import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import Port1pic from '../assets/port1pic.jpg';
import Port2pic from '../assets/port2pic.jpg';
import Port3pic from '../assets/port3pic.jpg';
import Port4pic from '../assets/port4pic.jpg';
import Port5pic from '../assets/port5pic.jpg';
import Brochure from '../assets/SurushaTechBrochure.pdf';
import FeedbackSlide from '../components/FeedbackSlide.jsx';

const Portfolio = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] m-0 p-0'>
        <div className='h-[20vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-between lg:flex-row bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-1.5rem] lg:mt-8 text-white font-bold lg:font-extrabold'>
               Portfolio 
            </h2>
            <div className='flex items-center justify-start ml-8 lg:w-[20vw]'>
                <LinkRouter to={"/"} className='uppercase text-gray-500 mt-8 lg:mt-0 hover:text-white transition-all duration-500'>
                    Home
                </LinkRouter>
                <p className='uppercase font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                    Portfolio
                </p>
            </div>
        </div>
        <div className='w-[100vw] min-h-[110vh]'>
            <div className='mt-16 lg:mt-0 w-[100vw] h-[50vh] flex flex-col items-center justify-center'>
                <div classsName="w-[100vw]">
                    <span className='text-[0.9rem] text-blue-500 font-semibold'>
                        //    
                    </span>
                    <span className='text-[0.9rem] text-blue-500 font-semibold'>
                        LATEST CASE STUDIES
                    </span>    
                </div>
                <p className='text-4xl font-extrabold mb-12 mt-2'>
                    The Success Stories
                </p>
                <p className='text-[0.9rem] text-gray-500 mx-4 lg:mx-28 leading-loose'>
                    In this section, we showcase our company's proven track record of delivering effective IT solutions by sharing real-life client success stories. We delve into the specific challenges encountered by our clients, outline our tailored approach to resolving them, and illustrate the positive outcomes achieved. These case studies demonstrate our ability to understand and address the unique IT needs of our clients, fostering successful partnerships.
                </p>        
            </div>
            <div className='mt-16 lg:mt-0 w-[100vw] min-h-[85vh] flex flex-col'>
                <div className='w-[100vw] min-h-[100vh] lg:min-h-[40vh] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center'>
                    <LinkRouter to="/portfolio/bringing-it-and-business-together">
                    <div className='mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                        <img src={Port1pic} alt="" className='object-cover h-[100%] w-[100%]' />
                        <div className='overlay'>
                            <p className='text-xl text-white font-bold text-center mt-6'>
                                Unify Business and IT with a Centralized, Dynamic Knowledge Base.    
                            </p>    
                        </div>
                    </div>
                    </LinkRouter>
                    <div className='mt-16 lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mr-16'>
                        <LinkRouter to="/portfolio/digital-experience">
                            <div className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                        <img src={Port2pic} alt="" className='object-cover h-[100%] w-[100%]' />
                        <div className='overlay'>
                            <p className='text-xl text-white font-bold text-center mt-6'>
                                Unlock Growth: Navigate Digital Excellence   
                            </p>    
                        </div>
                            </div>
                        </LinkRouter>
                    </div>
                    <div className='mt-[-1rem] lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                        <LinkRouter to="/portfolio/data-analytics">
                            <div className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port3pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Leveraging data and analytics to drive sustainable initiatives.  
                                </p>    
                            </div>
                            </div>
                        </LinkRouter>
                    </div>
                </div>
                <div className='mt-[-1rem] lg:mt-8 lg:mb-20 w-[100vw] min-h-[100vh] lg:min-h-[40vh] flex flex-col lg:flex-row lg:items-start lg:justify-center'>
                <div className='w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                    <LinkRouter to="/portfolio/customer-experience">
                        <div className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port4pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Award-winning digital platform for consulting clients.  
                                </p>    
                            </div>
                        </div>
                    </LinkRouter>
                </div>
                    <div className='mt-[-1rem] lg:mt-0 w-[100vw] lg:w-[23vw] h-[50vh] lg:h-[40vh] lg:mx-12'>
                        <LinkRouter to="/portfolio/app-for-virtual-reality">
                            <div className='mx-auto mainContainer shadow-xl lg:shadow-md w-[90vw] lg:w-[23vw] h-[40vh] lg:h-[40vh] lg:mx-12'>
                            <img src={Port5pic} alt="" className='object-cover h-[100%] w-[100%]' />
                            <div className='overlay'>
                                <p className='text-xl text-white font-bold text-center mt-6'>
                                    Levelling up the digital transformation  
                                </p>    
                            </div>
                            </div> 
                        </LinkRouter>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-56 lg:mb-0 h-[25vh] lg:h-[25vh] w-[100vw] flex flex-col justify-center lg:justify-center items-center lg:flex-row bg-blue-500'>
            <p className='mb-2 text-3xl lg:text-5xl font-extrabold text-white lg:mx-6'>
                Excited to know more?
            </p>
            <a href={Brochure} target='_blank' rel="noreferrer" download="Surusha Technology Brochure" className='px-10 py-4 bg-white text-[0.9rem] text-blue-500 font-semibold opacity-95 hover:opacity-100 transitiona-all duration-500'>
                DOWNLOAD OUR PORTFOLIO HERE
            </a>
        </div>
        <div className='w-[100vw] h-[10vh] bg-gray-200'></div>
        <div className='portfolioBg w-[100vw] h-[150vh] flex flex-col items-center justify-start'>
            <div className='w-[100vw] h-[5vh] flex items-center justify-center'>
                <span className='text-[1rem] mx-2 mt-24 text-blue-500 font-bold'>
                    //
                </span>
                <span className='text-[1.1rem] mt-24 text-blue-500 font-bold'>
                    OUR CLIENTS
                </span>
            </div>
            <h2 className='mx-8 lg:mx-0 mt-16 text-3xl lg:text-4xl font-extrabold'>
                We are trusted in 15+ Countries Worldwide
            </h2>
            <div className='mt-[30rem] lg:mt-0 w-[100vw] min-h-[100vh]'>
                <FeedbackSlide />
            </div>
        </div>
    </div>
  )
}

export default Portfolio