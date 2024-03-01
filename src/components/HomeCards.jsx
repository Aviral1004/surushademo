import React from 'react';
import ReactCardFlip from "react-card-flip";
import AiDev from '../assets/ai.jpg';
import FullStack from '../assets/fullStack.jpg';
import Staffing from '../assets/staffing.jpg';

const HomeCards = () => {
  return (
    <div className='h-full w-full flex flex-col lg:flex-row lg:justify-around lg:items-center justify-around items-center mt-12 lg:mt-20'>
            <div className='h-[40vh] w-[93vw] lg:w-[25vw] mt-6'>
                <div>
                    <div className='h-[40vh] w-[93vw] lg:w-[25vw] bg-blue-500 shadow-md'>
                        <img src={AiDev} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-[6vw] mt-10 absolute top-[-7rem] lg:top-56 left-0 text-white font-extrabold text-5xl lg:text-3xl text-center'>
                        AI & ML Development
                    </span>        
                </div>
                <div>
                    <p>
                    We understand the transformative potential of these technologies and are passionate about creating solutions that empower businesses. Our team of expert developers combines cutting-edge algorithms with deep industry knowledge to craft custom AI & ML applications tailored to your specific needs.
                    </p>
                </div>   
            </div>
            <div className='h-[40vh] w-[93vw] mt-6 lg:w-[25vw]'>
                <div>
                    <div className='h-[40vh] w-[93vw] lg:w-[25vw] bg-blue-500 shadow-md'>
                        <img src={FullStack} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 font-bold absolute top-[14rem] left-0 lg:top-[16.5rem] lg:left-[38vw] text-white text-5xl lg:text-3xl text-center'>
                        Full Stack Development
                    </span>        
                </div>
                <div>
                    <p>
                    <span className='font-bold'>
                        Looking to gain a competitive edge in your industry?
                    </span>
                    Our tech experts and IT consultants offer highly effective strategies and innovative solutions to optimize your IT infrastructure. Let us help you stay ahead of the curve and achieve your business goals. 
                    </p>
                </div>   
            </div>
            <div className='h-[40vh] w-[93vw] mt-6 lg:w-[25vw]'>
                <div>
                    <div className='h-[40vh] w-[93vw] lg:w-[25vw] bg-blue-500 shadow-md'>
                        <img src={Staffing} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 font-bold absolute top-[35rem] left-16 text-white text-6xl lg:text-4xl text-center lg:top-[16rem] lg:left-[78.5vw]'>
                        Staffing
                    </span>       
                </div>
                <div>
                    <p className='mx-4'>
                    We take the time to understand your specific needs and match you with individuals who possess the right blend of technical expertise and cultural fit. Whether you're looking for a temporary solution or a long-term partner, we're dedicated to finding the perfect talent to augment your team and drive your business forward.
                    </p>
                </div>    
            </div>
    </div>
  )
}

export default HomeCards