import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import AiDev from '../assets/ai.jpg';
import FullStack from '../assets/fullStack.jpg';
import Staffing from '../assets/staffing.jpg';
import { motion } from 'framer-motion';

const HomeCards = () => {
    const [isFlipped, setisFlipped] = useState(false)
    const [isFlipped1, setisFlipped1] = useState(false)
    const [isFlipped2, setisFlipped2] = useState(false)


    function flipCard() {
        setisFlipped(!isFlipped);
    }
    function flipCard1() {
        setisFlipped1(!isFlipped1);
    }
    function flipCard2() {
        setisFlipped2(!isFlipped2);
    }
    function reverseFlip() {
        setTimeout(()=>{setisFlipped(false)},3000);
    }
    function reverseFlip1() {
        setTimeout(()=>{setisFlipped1(false)},3000);
    }
    function reverseFlip2() {
        setTimeout(()=>{setisFlipped2(false)},3000);
    }

  return (
    <div className='h-full w-full flex flex-col lg:flex-row lg:justify-around lg:items-center justify-around items-center mt-20 lg:mt-32'>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.3}} className='h-[40vh] w-[93vw] lg:w-[25vw] mt-12 lg:mt-6'>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                <div onMouseOver={flipCard} onClick={flipCard} className='perspective-1000'>
                    <div className='mt-12 lg:mt-0 h-[40vh] w-[85vw] mx-auto lg:w-[25vw] bg-blue-300 shadow-md'>
                        <img src={AiDev} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-[0vw] mt-10 absolute top-[5rem] lg:top-24 left-0 text-white font-extrabold text-4xl lg:text-3xl text-center'>
                        AI & ML Development
                    </span>        
                </div>
                <div onMouseOver={reverseFlip} onClick={flipCard} className='mt-12 lg:mt-0 mx-auto text-white bg-blue-500 h-[40vh] w-[85vw] lg:w-[25vw]'>
                    <p className='mx-4 text-[0.9rem] py-12 lg:py-8 text-center'>
                    We understand the transformative potential of these technologies and are passionate about creating solutions that empower businesses. Our team of expert developers combines cutting-edge algorithms with deep industry knowledge to craft custom AI & ML applications tailored to your specific needs.
                    </p>
                </div>     
                </ReactCardFlip>  
            </motion.div>
            <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-[40vh] w-[93vw] mt-16 lg:mt-6 lg:w-[25vw]'>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
                <div onMouseOver={flipCard1} onClick={flipCard1} className='perspective-1000'>
                    <div className='mt-12 lg:mt-0 h-[40vh] w-[85vw] lg:w-[25vw] bg-blue-300 shadow-md mx-auto'>
                        <img src={FullStack} alt="" className='filter opacity-50 w-full h-full object-cover shadow-xl' />
                    </div>
                    <span className='mx-2 font-bold absolute top-[7rem] left-0 lg:top-[8.5rem] lg:left-[1vw] text-white text-4xl lg:text-3xl text-center'>
                        Full Stack Development
                    </span>        
                </div>
                <div onMouseOver={reverseFlip1} onClick={flipCard1} className='mt-12 lg:mt-0 mx-auto text-white bg-blue-500 h-[40vh] w-[85vw] lg:w-[25vw]'>
                    <p className='mx-4 text-[0.9rem] py-12 lg:py-8 text-center'>
                    <span className='font-bold'>
                        Ready to unlock your potential in the competitive landscape of your industry? 
                    </span>
                        Our team of experienced IT professionals crafts customized strategies and cutting-edge solutions to optimize your IT infrastructure. We empower you to stay at the forefront of technological advancements and achieve your business objectives.
                    </p>
                </div>    
                </ReactCardFlip>   
            </motion.div>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='h-[40vh] w-[93vw] lg:mt-6 lg:w-[25vw] mt-12'>
                <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
                <div onMouseOver={flipCard2} onClick={flipCard2} className='perspective-1000'>
                    <div className='mt-12 lg:mt-0 h-[40vh] w-[85vw] lg:w-[25vw] bg-blue-300 shadow-md mx-auto'>
                        <img src={Staffing} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 font-bold absolute top-[10rem] left-20 text-white text-5xl lg:text-4xl text-center lg:top-[10rem] lg:left-[6vw]'>
                        Staffing
                    </span>       
                </div>
                <div onMouseOver={reverseFlip2} onClick={flipCard2}  className='mt-12 lg:mt-0 mx-auto text-white bg-blue-500 h-[40vh] w-[85vw] lg:w-[25vw]'>
                    <p className='mx-4 text-[0.9rem] py-12 lg:py-8 text-center'>
                    We take the time to understand your specific needs and match you with individuals who possess the right blend of technical expertise and cultural fit. Whether you're looking for a temporary solution or a long-term partner, we're dedicated to finding the perfect talent to augment your team and drive your business forward.
                    </p>
                </div>    
                </ReactCardFlip>    
            </motion.div>
    </div>
  )
}

export default HomeCards