import React from 'react'
import HomeCards from '../components/HomeCards.jsx';
import { motion } from 'framer-motion';

const Home2 = () => {
  return (
    <div className='w-[100vw] h-[180vh] lg:h-[150vh] flex flex-col lg:mt-12'>
        <div className='bg-slate-50 w-[100vw] h-[125vh] lg:h-[60vh] flex flex-col lg:flex-row justify-start items-center lg:items-start'>
            <div className='mx-4 my-20 lg:mx-16 lg:my-28'>
                <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='uppercase text-base text-blue-600 lg:font-bold lg:mt-4'>
                    what we offer?
                </motion.p>
                <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.6}} className='text-3xl lg:text-4xl font-extrabold mt-4 tracking-wider'>
                    Simplify your digital world with Surusha's expertise.
                </motion.p>
            </div>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.6, duration: 0.7}} className='h-[25vh] mt-[-3.5rem] lg:mt-40 flex items-start justify-center'>
                <p className='mx-4 lg:mx-24 leading-loose text-slate-500'>
                We offer a holistic suite of IT services, designed to seamlessly integrate with your existing systems and address all your business challenges. Our team combines deep technical expertise with a strong understanding of your industry, enabling us to deliver solutions that generate real value and drive success.
                </p>
            </motion.div>
        </div>
        <div className='w-[100vw] h-[55vh] lg:[15vh] translate-y-[-35vh]'>
            <HomeCards />
        </div>
    </div>
  )
}

export default Home2