import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import TeamMember from '../assets/teamMember.png';

const About = () => {
  return (
    <div className='min-h-[100vh] w-[100vw] m-0 p-0'>
        <div className='h-[25vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-between lg:flex-row bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-3rem] lg:mt-8 text-white font-bold lg:font-extrabold'>
               About Us 
            </h2>
            <div className='flex items-center justify-start ml-8 lg:w-[20vw]'>
                <LinkRouter to={"/"} className='uppercase text-gray-500 mt-8 lg:mt-0 hover:text-white transition-all duration-500'>
                    Home
                </LinkRouter>
                <p className='uppercase font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                    About Us
                </p>
            </div>
        </div>
        <div id='ourStory' className='min-h-[100vh] w-[100vw] flex flex-col lg:flex-row'>
            <div className='mt-12 lg:mt-0 w-[100vw] lg:w-[48vw] min-h-[100vh] flex flex-col items-center lg:items-start justify-evenly'>
                <p className='text-blue-600 ml-[-14rem] lg:ml-12 lg:mx-12 text-[0.9rem] font-semibold'>
                    OUR STORY
                </p>
                <p className='font-extrabold text-4xl mx-4 lg:mx-12 lg:mt-[-3rem]'>
                    Your business is unique, so your IT strategy should be too. Let us create a holistic plan that drives success.
                </p>
                <p className='text-gray-500 text-[0.9rem] mx-4 lg:mx-12 leading-loose lg:mt-[-2rem]'>
                    Founded in 2011, Surusha technology provides a well mannered structure for development and meanwhile staffing in IT industry. Starting in the IT industry, we've expanded across India and even into the US market. Our expertise in IT staffing allows us to understand the unique challenges of finding tech talent, and we've played a role in the growth of our clients, supporting their journey from start-up to established organizations.
                </p>
                <a href="https://surushatechnology.com/" target='_blank' rel='noreferrer' className='bg-blue-600 px-8 lg:mx-12 py-4 text-white text-[0.9rem] font-bold hover:bg-sky-300 hover:text-blue-600 transition-all duration-500'>
                    TRY SURUSHA GROUP WEBSITE
                </a>
            </div>
            <div className='w-[100vw] lg:w-[52vw] min-h-[100vh] flex flex-col items-center justify-evenly lg:grid grid-rows-2 grid-cols-2 place-items-center'>
                <div className='meeting1 h-56 w-64 bg-blend-overlay opacity-50 bg-blue-500 lg:-translate-y-6 mt-8 lg:mt-0 shadow-xl'>
                    <div className='text-white font-bold text-3xl text-center mt-32'>
                        Our Mission
                    </div>
                    <div className="text-center text-white text-[0.8rem]">
                        We provide cutting-edge solutions that accelerate digital transformation, creating new opportunities and a more prosperous future for businesses and individuals alike.
                    </div>
                </div>
                <div className='meeting2 h-56 w-64 bg-blend-overlay opacity-50 bg-blue-500 mt-8 lg:mt-0 lg:mr-20 shadow-xl'> 
                    <div className='text-white font-bold text-3xl text-center mt-32'>
                        Our Vision
                    </div>
                    <div className="text-center text-white text-[0.8rem]">
                        We envision a future where digital transformation seamlessly supports sustainability, leaving a thriving digital landscape for generations to come.
                    </div>
                </div>
                <div className='meeting3 h-56 w-64 bg-blend-overlay opacity-50 bg-blue-500 lg:-translate-y-6 mt-8 lg:mt-0 shadow-xl'>
                    <div className='text-white font-bold text-3xl text-center mt-32'>
                        Our Philosphy
                    </div>
                    <div className="text-center text-white text-[0.8rem]">
                        Our culture is built on the unwavering principles of equality, diversity, and professionalism, creating a welcoming and empowering environment for all.
                    </div>
                </div>
                <div className='meeting4 h-56 w-64 bg-blend-overlay opacity-50 bg-blue-500 mt-8 lg:mt-0 mb-24 lg:mb-0 lg:mr-20 shadow-xl'>
                    <div className='text-white font-bold text-3xl text-center mt-32'>
                        Our Strategy
                    </div>
                    <div className="text-center text-white text-[0.8rem]">
                        We prioritize developing solutions that address market needs and foster meaningful relationships built on trust and commitment, ultimately driving client success.
                    </div>
                </div>
            </div>
        </div>
        <div id="management" className='w-[100vw] min-h-[100vh]'>
            <div className='w-[100vw] h-[40vh] flex flex-col items-center justify-evenly'>
                <h2 className='text-4xl font-extrabold text-center'>
                    Our leadership and senior management teams.
                </h2>
                <p className='mt-8 lg:mt-[-2rem] text-gray-500 font-semibold mx-8 lg:mx-28 text-center text-[0.9rem]'>
                    At Surusha Technology, our leadership team boasts extensive industry expertise, embraces a growth mindset, and prioritizes achieving outstanding results. We empower our employees to reach their full potential through inspiration and support.
                </p>
            </div>
            <div className='w-[100vw] min-h-[30vh] flex flex-col-reverse lg:flex-row'>
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
            </div>
            <div className='mt-12 w-[100vw] min-h-[30vh] flex flex-col lg:flex-row'>
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
            </div>
            <div className='mt-24 lg:mt-[-4rem] w-[100vw] min-h-[30vh] flex flex-col-reverse lg:flex-row'>
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
            </div>
            <div className='mt-[-4rem] lg:mt-[-2rem] w-[100vw] min-h-[30vh] flex flex-col lg:flex-row'>
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
            </div>
        </div>
    </div>
  )
}

export default About