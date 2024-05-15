import React, {useState, useEffect} from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import FeedbackSlide from '../components/FeedbackSlide.jsx';
import { motion } from 'framer-motion';

const Feedbacks = () => {
    const [isClicked, setIsClicked] = useState(new Array(3).fill(false));
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        setShowMore(isClicked.some(Boolean));
    }, [isClicked]);

  return (
    <div className={`mt-40 lg:min-h-[120vh] max-h-[180vh] max-w-[100vw] flex flex-col items-center justify-center bg-blue-500`} style={{height: showMore ? '110vh' : '180vh'}}>
        <div className='flex flex-col justify-around items-center mt-[6vh] lg:mt-16' style={{height: '100%'}}>
            <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className="font-semibold text-white text-[1rem] my-2 mx-8 lg:mx-16 text-center">
                WHAT OUR CLIENTS SAY ABOUT US?
            </motion.p>
            <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='font-extrabold text-white text-3xl lg:text-5xl mx-4 lg:mx-32 text-center mt-2 lg:mt-0 mb-20 lg:mb-0' style={{height: '100%'}}>
                Our work speaks volumes about itself. Swipe to see what our clients have to say about us.
            </motion.p>
        </div>
        <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='lg:mt-[-25vh] w-[100vw] h-[110vh] lg:min-h-[100vh]'>
            <FeedbackSlide />
        </motion.div>
        <motion.a initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} href='/portfolio'>
            <button className='bg-[#09D0EF] px-8 py-3 mb-8 lg:mb-20 text-center rounded-md text-white font-bold text-[1.2rem]'>
                Learn More
            </button>
        </motion.a>
    </div>
  )
}

export default Feedbacks