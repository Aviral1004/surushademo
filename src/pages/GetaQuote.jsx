import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import GetQuoteForm from '../components/GetQuoteForm.jsx';
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion'

const GetaQuote = () => {
  return (
    <div className='w-[100vw] min-h-[100vh]'>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.6, duration: 0.6}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.7, duration: 0.7}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.8, duration: 0.8}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
        <GetQuoteForm />
        
    </div>
  )
}

export default GetaQuote