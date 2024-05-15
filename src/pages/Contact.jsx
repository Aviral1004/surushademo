import React, {useRef} from 'react';
import { IoIosGlobe } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoMail } from 'react-icons/io5';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { Link as LinkScroll } from 'react-scroll';
// import emailjs from '@emailjs/browser';
import ContactForm from "../components/ContactForm.jsx"
import { FaArrowUpLong } from "react-icons/fa6";


const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('service_f7kl667', 'template_8dhhne9', form.current, {
    //         publicKey: 'YOUR_PUBLIC_KEY',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };

  return (
    <div id='contactTop' className='w-[100vw] min-h-[100vh] flex flex-col lg:flex-row'>
        <div className='w-[100vw] lg:w-[50vw] h-[90vh] lg:h-[100vh] flex flex-col items-center justify-start'>
          <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.6}} className='mt-24 ml-52 text-left w-[100%] text-[0.9rem] font-semibold text-blue-500'>
                <span className=''>
                    //
                </span>
                <span className='mx-1'>
                    CONTACT DETAILS
                </span>
          </motion.div>
          <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 0.8}} className='text-4xl font-extrabold lg:ml-[-5rem] mt-4'>Get in touch with us</motion.p>
            <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1}} className='leading-loose text-[0.9rem] text-gray-500 mt-2 mx-6 lg:mx-0 lg:ml-24'>Connect with us! Whether by email or a personal visit, we're committed to responding to your inquiries within 24 hours on weekdays. We will be glad to answer your queries.</motion.p>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1.2}} className='ml-0 lg:ml-12 mt-4 flex items-center justify-evenly w-[85vw] lg:w-[35vw] group hover:shadow-2xl transition-all duration-900 px-8 py-4'>
                <IoIosGlobe className='text-8xl lg:text-6xl text-blue-500 mr-8 group-hover:rotate-45 transition-all duration-900' />
                <div className='mt-2'>
                    <p className='text-[1.1rem] font-semibold mb-1'>
                        Head Office
                    </p>
                    <p className='text-[0.9rem] text-gray-500 mt-0'>
                        Artek Apartment Ashiana Road Patna- 800014, India
                    </p>
                </div>
            </motion.div>
            <a href="mailto:hr@surushatechnology.com" target='_blank' rel="noreferrer">
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.3, duration: 1.4}} className='ml-0 lg:ml-12 mt-4 flex items-center justify-start w-[85vw] lg:w-[35vw] group hover:shadow-2xl transition-all duration-900 px-8 py-4'>
                <IoMail className='text-6xl lg:text-5xl text-blue-500 mr-8 group-hover:rotate-180 transition-all duration-900' />
                <div className='mt-2'>
                    <p className='text-[1.1rem] font-semibold mb-1'>
                        Our Mail
                    </p>
                    
                      <p className='text-[0.9rem] text-gray-500 mt-0'>
                        hr@surushatechnology.com
                      </p>
                </div>
              </motion.div>
            </a>
        </div>
        <div className='mt-[-7rem] lg:mt-[0rem] mx-4 my-4 w-[90vw] lg:w-[50vw] h-[110vh] lg:h-[140vh]'>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 1.5}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.3, duration: 1.7}}className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"contactTop"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
        <ContactForm />
        </div>
        <div className='w-28 h-8 bg-white absolute top-[192vh] lg:top-[142vh] left-[63.5vw] lg:left-[82.7vw]'>
        </div>
    </div>
  );
};

export default Contact