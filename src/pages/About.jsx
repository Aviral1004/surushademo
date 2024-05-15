import React, {useState, useEffect} from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import TeamMember from '../assets/teamMember.png';
import ReactCardFlip from "react-card-flip";
import Meeting1 from '../assets/meeting1.jpg'
import Meeting2 from '../assets/meeting2.jpg'
import Meeting3 from '../assets/meeting3.jpg'
import Meeting4 from '../assets/meeting4.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from 'framer-motion';
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const About = () => {

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

    const [isFlipped4, setisFlipped4] = useState(false)
    const [isFlipped5, setisFlipped5] = useState(false)
    const [isFlipped6, setisFlipped6] = useState(false)
    const [isFlipped7, setisFlipped7] = useState(false)



    function flipCard4() {
        setisFlipped4(!isFlipped4);
    }
    function flipCard5() {
        setisFlipped5(!isFlipped5);
    }
    function flipCard6() {
        setisFlipped6(!isFlipped6);
    }
    function flipCard7() {
        setisFlipped7(!isFlipped7);
    }
    function reverseFlip4() {
        setTimeout(()=>{setisFlipped4(false)},3000);
    }
    function reverseFlip5() {
        setTimeout(()=>{setisFlipped5(false)},3000);
    }
    function reverseFlip6() {
        setTimeout(()=>{setisFlipped6(false)},3000);
    }
    function reverseFlip7() {
        setTimeout(()=>{setisFlipped7(false)},3000);
    }
  return (
    <div className='min-h-[100vh] w-[100vw] m-0 p-0'>
        <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} id='aboutTop' className='h-[25vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-between lg:flex-row bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-3rem] lg:mt-8 text-white font-bold lg:font-extrabold'>
               About Us 
            </h2>
            <div className='flex items-center justify-start ml-8 lg:w-[20vw]'>
                <LinkRouter to={"/"} className='font-semibold uppercase text-gray-200 mt-8 lg:mt-0 hover:text-white transition-all duration-500'>
                    Home
                </LinkRouter>
                <p className='uppercase font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                    About Us
                </p>
            </div>
        </motion.div>
        <div id='ourStory' className='min-h-[100vh] w-[100vw] flex flex-col lg:flex-row'>
            <div className='mt-12 lg:mt-0 w-[100vw] lg:w-[48vw] min-h-[100vh] flex flex-col items-center lg:items-start justify-evenly'>
                <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-blue-600 ml-[-14rem] lg:ml-12 lg:mx-12 text-[0.9rem] font-semibold'>
                    OUR STORY
                </motion.p>
                <motion.p initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='font-extrabold text-4xl mx-4 lg:mx-12 lg:mt-[-3rem]'>
                    Your business is unique, so your IT strategy should be too. Let us create a holistic plan that drives success.
                </motion.p>
                <motion.p initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-gray-500 text-[0.9rem] mx-4 lg:mx-12 leading-loose lg:mt-[-2rem]'>
                    Founded in 2011, Surusha technology provides a well mannered structure for development and meanwhile staffing in IT industry. Starting in the IT industry, we've expanded across India and even into the US market. Our expertise in IT staffing allows us to understand the unique challenges of finding tech talent, and we've played a role in the growth of our clients, supporting their journey from start-up to established organizations.
                </motion.p>
                <motion.a initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} href="https://surushatechnology.com/" target='_blank' rel='noreferrer' className='bg-blue-600 px-8 lg:mx-12 py-4 text-white text-[0.9rem] font-bold hover:bg-sky-300 hover:text-blue-600 transition-all duration-500'>
                    TRY SURUSHA GROUP WEBSITE
                </motion.a>
            </div>
            <div className='w-[100vw] lg:w-[52vw] min-h-[100vh] flex flex-col items-center justify-evenly lg:grid grid-rows-2 grid-cols-2 place-items-center'>
                <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-56 w-64 lg:-translate-y-6 mt-8 lg:mt-4 mr-8 lg:mr-2'>
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped4}>
                    <div onMouseOver={flipCard4} onClick={flipCard4} className='perspective-1000'>
                    <div className='h-[35vh] w-[80vw] mx-auto lg:w-[18vw] bg-blue-400 shadow-md'>
                        <img src={Meeting1} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-4 mt-10 absolute top-[5rem] lg:top-24 left-8 text-white font-extrabold text-4xl lg:text-3xl text-center'>
                        Our Mission
                    </span>
                    </div>
                    <div onMouseOver={reverseFlip4} onClick={flipCard4} className="text-center text-white bg-blue-500 text-[0.8rem] h-[35vh] w-[80vw] lg:w-[18vw] shadow-md">
                        <p className='mx-12 lg:mx-4 text-[0.9rem] py-12 lg:py-8 text-center'>
                            We provide cutting-edge solutions that accelerate digital transformation, creating new opportunities and a more prosperous future for businesses and individuals alike.
                        </p>
                    </div>
                    </ReactCardFlip>
                </motion.div>
                <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-56 w-64 mt-20 lg:mt-0 lg:mr-20 mr-8'>
                     
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped5}>
                    <div onMouseOver={flipCard5} onClick={flipCard5} className='perspective-1000'>
                    <div className='h-[35vh] w-[80vw] mx-auto lg:w-[18vw] bg-blue-400 shadow-md'>
                        <img src={Meeting2} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-8 mt-10 absolute top-[5rem] lg:top-24 left-12 text-white font-extrabold text-4xl lg:text-3xl text-center'>
                        Our Vision
                    </span>
                    </div>
                    <div onMouseOver={reverseFlip5} onClick={flipCard5} className="text-center text-white bg-blue-500 text-[0.8rem] h-[35vh] w-[80vw] lg:w-[18vw] shadow-md">
                        <p className='mx-12 lg:mx-6 text-[0.9rem] py-12 lg:py-8 text-center'>
                            We envision a future where digital transformation seamlessly supports sustainability, leaving a thriving digital landscape for generations to come.
                        </p>
                    </div>
                    </ReactCardFlip>
                </motion.div>
                <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='h-56 w-64 lg:-translate-y-6 mt-20 lg:mt-[-1.5rem] mr-8 lg:mr-2'>
                    
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped6}>
                    <div onMouseOver={flipCard6} onClick={flipCard6} className='perspective-1000'>
                    <div className='h-[35vh] w-[80vw] mx-auto lg:w-[18vw] bg-blue-400 shadow-md'>
                        <img src={Meeting3} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-6 mt-10 absolute top-[5rem] lg:top-24 left-10 text-white font-extrabold text-3xl lg:text-2xl text-center'>
                        Our Philosphy
                    </span>
                    </div>
                    <div onMouseOver={reverseFlip6} onClick={flipCard6} className="text-center text-white bg-blue-500 text-[0.8rem] h-[35vh] w-[80vw] lg:w-[18vw] shadow-md">
                        <p className='mx-16 lg:mx-8 text-[0.9rem] py-12 lg:py-8 text-center'>
                            Our culture is built on the unwavering principles of equality, diversity, and professionalism, creating a welcoming and empowering environment for all.
                        </p>
                    </div>
                    </ReactCardFlip>
                </motion.div>
                <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mt-20 h-56 w-64 lg:mt-0 mb-24 lg:mb-0 mr-[2rem] lg:mr-20'>
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped7}>
                    <div onMouseOver={flipCard7} onClick={flipCard7} className='perspective-1000'>
                    <div className='h-[35vh] w-[80vw] mx-auto lg:w-[18vw] bg-blue-400 shadow-md'>
                        <img src={Meeting4} alt="" className='filter opacity-50 w-full h-full object-cover' />
                    </div>
                    <span className='mx-2 lg:left-4 mt-10 absolute top-[5rem] lg:top-24 left-8 text-white font-extrabold text-4xl lg:text-3xl text-center'>
                        Our Strategy
                    </span>
                    </div>
                    <div onMouseOver={reverseFlip7} onClick={flipCard7} className="text-center text-white bg-blue-500 text-[0.8rem] h-[35vh] w-[80vw] lg:w-[18vw] shadow-md">
                        <p className='mx-12 lg:mx-6 text-[0.9rem] py-12 lg:py-8 text-center'>
                            We prioritize developing solutions that address market needs and foster meaningful relationships built on trust and commitment, ultimately driving client success.
                        </p>
                    </div>
                    </ReactCardFlip>
                </motion.div>
            </div>
        </div>
        <div id="management" className='w-[100vw] min-h-[100vh]'>
            <div className='w-[100vw] h-[40vh] flex flex-col items-center justify-evenly'>
                <motion.h2 initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='text-4xl font-extrabold text-center'>
                    Our leadership and senior management teams.
                </motion.h2>
                <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mt-8 lg:mt-[-2rem] text-gray-500 font-semibold mx-8 lg:mx-28 text-center text-[0.9rem]'>
                    At Surusha Technology, our leadership team boasts extensive industry expertise, embraces a growth mindset, and prioritizes achieving outstanding results. We empower our employees to reach their full potential through inspiration and support.
                </motion.div>
            </div>
            <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-[100vw] min-h-[30vh] flex flex-col-reverse lg:flex-row'>
                <div className='w-[100vw] lg:w-3/4 h-[40vh] lg:min-h-[30vh] text-center lg:text-end'>
                    <p className='mt-[4rem] text-sky-500 text-3xl uppercase font-semibold lg:mr-8 lg:mt-[1rem]'>
                        Diety Puman
                    </p>
                    <p className='text-2xl lg:mr-8 mt-[1rem]'>
                        Founder
                    </p>
                    <p className='text-gray-500 leading-loose lg:mr-8 mt-[4rem] mx-4 lg:mx-32'>
                        Diety Puman, a visionary leader, brings a wealth of experience and knowledge to all aspects of managing and running businesses. Throughout his career, he has played a pivotal role in guiding numerous organizations from their founding stages to successful exits, while simultaneously providing strategic guidance to several boards he has served on.
                    </p>
                </div>
                <div className='w-[100vw] lg:w-1/4 h-[40vh] lg:h-[30vh] flex items-center justify-center mt-12 lg:mt-12'>
                    <img src={TeamMember} alt="" />
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mt-12 w-[100vw] min-h-[30vh] flex flex-col lg:flex-row'>
                <div className='w-[100vw] lg:w-1/4 min-h-[80vh] lg:h-[30vh] flex items-center justify-center mt-20 lg:mt-8'>
                    <img src={TeamMember} alt="" />
                </div>
                <div className='mt-[-2rem] lg:mt-0 w-[100vw] lg:w-3/4 h-[40vh] lg:min-h-[30vh] text-center lg:text-start'>
                    <p className='text-sky-500 text-3xl uppercase font-semibold lg:ml-8 lg:mt-[5rem]'>
                        Subham Kumar
                    </p>
                    <p className='text-2xl lg:ml-8 mt-[1rem]'>
                        Head of Business
                    </p>
                    <p className='text-gray-500 leading-loose lg:ml-8 mt-[4rem] mx-4 lg:mx-32'>
                        Subham, a visionary and inspiring leader, played a central role in establishing Surusha Technology. His talent for motivating teams fosters a culture of high performance, leading to the achievement of exceptional results. As an experienced enterprise architect and seasoned professional with extensive experience in IT consulting and management, Subham possesses expertise across diverse domains, including finance, retail, healthcare, and aviation.
                    </p>
                </div>
            </motion.div>
            {/* <motion.div initial={{opacity: 0, transform:"translateX(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mt-24 lg:mt-[-4rem] w-[100vw] min-h-[30vh] flex flex-col-reverse lg:flex-row'>
                <div className='mt-[-2rem] lg:mt-0 w-[100vw] lg:w-3/4 min-h-[80vh] lg:min-h-[30vh] text-center lg:text-end'>
                    <p className='text-sky-500 text-3xl uppercase font-semibold lg:mr-8 lg:mt-[5rem]'>
                        Richard Robbins
                    </p>
                    <p className='text-2xl lg:mr-8 mt-[1rem]'>
                        Head of Delivery & Partner
                    </p>
                    <p className='text-gray-500 leading-loose lg:mr-8 mt-[2rem] mx-4 lg:mx-32'>
                        Richard is a highly skilled and articulate agile project leader with over three decades of experience in the IT and Software Development industry. His diverse work history across domains such as manufacturing, telecom, government, and IT startups provides him with a unique perspective that drives the company's success. Richard is a seasoned project manager, lean IT architect, and expert troubleshooter, demonstrating his expertise across various disciplines, including agile project management, process development and deployment, and domain-agnostic troubleshooting.
                    </p>
                </div>
                <div className='w-[100vw] lg:w-1/4 min-h-[80vh] lg:h-[30vh] flex items-center justify-center mt-12 lg:mt-0'>
                    <img src={TeamMember} alt="" />
                </div>
            </motion.div> */}
            {/* <motion.div initial={{opacity: 0, transform:"translateX(-20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.4, duration: 0.4}} className='mt-[-4rem] lg:mt-[-2rem] w-[100vw] min-h-[30vh] flex flex-col lg:flex-row'>
                <div className='w-[100vw] lg:w-1/4 min-h-[80vh] lg:h-[30vh] flex items-center justify-center mt-12 lg:mt-0'>
                    <img src={TeamMember} alt="" />
                </div>
                <div className='mt-[-3rem] lg:mt-0 w-[100vw] lg:w-3/4 min-h-[80vh] lg:min-h-[30vh] text-center lg:text-start'>
                    <p className='text-sky-500 text-3xl uppercase font-semibold lg:ml-8 lg:mt-[5rem]'>
                        Jayash Patil
                    </p>
                    <p className='text-2xl lg:ml-8 mt-[1rem]'>
                        Chief Commercial Officer
                    </p>
                    <p className='text-gray-500 leading-loose lg:ml-8 mt-[4rem] mx-4 lg:mx-32 mb-24 lg:mb-0'>
                        Jayash is a dynamic and driven sales leader with a remarkable 29-year career across diverse business environments, including multinational corporations (MNCs), startups, and small to medium-sized enterprises (SMEs). His consistent, hands-on involvement in customer engagement and interaction for over two decades has honed his exceptional skills in sales, business development, and management.
                    </p>
                </div>
            </motion.div> */}
        </div>
        <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.5}} className='shadow-xl w-14 h-14 rounded-full bg-red-500 fixed z-50 right-8 top-[50vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="mailto:techsurusha@gmail.com" target='_blank' rel="noreferrer">
          <IoMdMail className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
        </motion.div>
        <motion.div initial={{opacity: 0, transform:"translateY(30%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='w-14 h-14 rounded-full bg-blue-500 fixed z-50 right-8 top-[60vh] shadow-xl hover:-translate-x-2 transition-all duration-800 '>
        <a href="tel:+917991171019" target='_blank'>
          <FiPhoneCall className='h-[60%] w-[60%] mt-[0.7rem] text-white ml-[0.6rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-green-500 fixed z-50 right-8 top-[70vh] hover:-translate-x-2 transition-all duration-800 '>
        <a href="https://wa.me/917991171019?text=Hey there,I need to talk to you" target='_blank'>
          <FaWhatsapp className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </a>
      </motion.div>
      <motion.div initial={{opacity: 0, transform:"translateY(40%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.4, duration: 0.4}} className='shadow-xl w-14 h-14 rounded-full bg-gray-400 fixed z-50 right-8 top-[80vh] hover:-translate-x-2 transition-all duration-800 '>
        <LinkScroll to={"aboutTop"} target='_blank'>
          <FaArrowUpLong className='h-[60%] w-[60%] mt-[0.65rem] text-white ml-[0.7rem]' />
        </LinkScroll>
      </motion.div>
    </div>
  )
}

export default About