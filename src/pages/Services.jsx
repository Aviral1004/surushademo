import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { IoMdSettings } from "react-icons/io";
import Badge from '../assets/badge.png';
import DesignDev from '../assets/designDev.png';
import DigitalImage from '../assets/digitalImage.jpg'
import Java from '../assets/java.png';
import Angular from '../assets/angular.png';
import Cplus2 from '../assets/cplus2.png';
import Php from '../assets/php.png';
import Net from '../assets/net1.png';
import Aws from '../assets/aws.png';
import Nodejs from '../assets/nodejs.png';
import Python from '../assets/python.png';
import Reactjs from '../assets/reactjs1.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { MonitorSmartphone, Cpu, ShieldCheck, BarChart, CloudCog } from 'lucide-react';

import Consulting from '../assets/consulting.jpg'

const Services = () => {
    
    const settings = {
        dots:false,
        rows: 1,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        infinite: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false
              }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    }
  return (
    <div className='min-h-[100vh] w-[100vw] m-0 p-0'>
        <div className='h-[25vh] lg:h-[20vh] w-[100vw] flex flex-col justify-center lg:justify-between lg:flex-row bg-blue-500'>
            <h2 className='text-4xl lg:text-5xl ml-8 lg:ml-[4rem] mt-[-3rem] lg:mt-8 text-white font-bold lg:font-extrabold'>
               Services 
            </h2>
            <div className='flex items-center justify-start ml-8 lg:w-[20vw]'>
                <LinkRouter to={"/"} className='uppercase text-gray-500 mt-8 lg:mt-0 hover:text-white transition-all duration-500'>
                    Home
                </LinkRouter>
                <p className='uppercase font-bold text-white ml-4 lg:ml-8 mt-8 lg:mt-0'>
                    services
                </p>
            </div>
        </div>
        <div className='min-h-[55vh] w-[100vw] flex flex-col items-center justify-center'>
            <div className='w-[100vw] flex items-center justify-center text-[0.9rem] text-blue-500 font-bold'>
                <span className='mt-12 lg:mt-[-2rem]'>
                    //
                </span>
                <span className='mt-12 uppercase lg:mt-[-2rem]'>
                    our services
                </span>
            </div>
            <p className='text-3xl lg:text-4xl font-extrabold text-center mt-4'>
                Unlocking Growth with Tailored IT Solutions
            </p>
            <p className='text-[0.9rem] mx-4 lg:mx-32 mt-4 text-center'>
                Overcome complex challenges and gain a competitive edge with our adaptive technology services. Let us collaborate, modernize your systems, and accelerate your success.
            </p>
            <div className='mt-8 lg:mt-0 w-[100vw] h-[20vh] flex flex-col lg:flex-row items-center justify-center'>
                <LinkScroll to='productEng' className='mr-[-6rem] lg:mr-0 bg-blue-500 px-14 py-4 lg:px-6 lg:py-4 text-[0.8rem] text-white font-semibold lg:mx-8 cursor-pointer'>
                    PRODUCT ENGINEERING
                </LinkScroll>
                <LinkScroll to='consulting' className='bg-blue-500 px-14 py-4 lg:px-6 lg:py-4 text-[0.8rem] text-white font-semibold lg:mx-8 cursor-pointer'>
                    ADVISORY & CONSULTING
                </LinkScroll>
                <LinkScroll to='digital' className='ml-[-6rem] lg:ml-0 bg-blue-500 px-14 py-4 lg:px-6 lg:py-4 text-[0.8rem] text-white font-semibold lg:mx-8 cursor-pointer'>
                    DIGITAL TRANSFORMATION
                </LinkScroll>
            </div>
        </div>
        <div id="productEng" className='lg:mt-[-4rem] min-h-[290vh] lg:min-h-[150vh] w-[100vw] bg-white'>
                <div className='w-[100vw] lg:h-[100vh] h-[290vh] flex flex-col items-center justify-start text-center'>
                    <div className='w-[100vw] h-[60vh] lg:[30vh]'>
                        <div className='mt-12'>
                            <span className='text-blue-500 uppercase text-[0.9rem] font-bold'>
                                //
                            </span>
                            <span className='text-blue-500 uppercase text-[0.9rem] font-bold'>
                                our services
                        </span>
                        </div>
                    
                        <p className='text-4xl font-extrabold mt-4'>
                            Product Engineering
                        </p>
                        <p className='text-[0.9rem] text-gray-500 mx-4 lg:mx-32 mt-6 lg:mt-4 leading-loose text-left'>
                            At Surusha Technology, our Product Engineering services empower you with comprehensive solutions for product development, guiding your journey from initial concept to successful launch. Our team of skilled engineers leverages cutting-edge technologies to create innovative and scalable products that deliver exceptional results, exceeding your expectations.
                        </p>
                    </div>
                    <div className='lg:mt-12 w-[100vw] h-[130vh] lg:[70vh] flex flex-col lg:flex-row items-start justify-center lg:items-start lg:justify-around'>
                        <div className='mt-4 lg:mt-6 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                            <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                <img src={DesignDev} alt="" className='h-16 w-16 group-hover:opacity-50 transition-all duration-500' />
                                <span className='text-2xl lg:text-xl font-bold lg:font-semibold mx-4'>
                                    Software Development
                                </span>
                            </div>
                            <p className='mt-4 mx-8 lg:mx-0 lg:ml-28 leading-loose text-gray-500 text-[0.9rem] text-left'>
                                We craft custom software solutions using cutting-edge technologies and proven methodologies. Our expertise lies in automating workflows, launching innovative products, and optimizing ERP systems to empower your business with enhanced efficiency and profitability.
                            </p>    
                        </div>
                        <div className='mt-12 lg:mt-6 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center'>
                            <div className='mt-4 lg:mt-12 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                                <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                    <MonitorSmartphone className='h-16 w-16 text-blue-500 group-hover:text-sky-400 transition-all duration-500' />
                                    <span className='lg:ml-4 lg:text-xl text-2xl font-bold lg:font-semibold mx-0'>
                                        Enterprise Architecture
                                    </span>
                                </div>
                                <p className='mt-4 mx-8 lg:mx-0 lg:ml-28 text-left leading-loose text-gray-500 text-[0.9rem]'>
                                    We design and build applications that bridge the gap between people, processes, organizations, and broader ecosystems. Our solutions seamlessly integrate with existing systems and infrastructure, fostering greater business visibility and extending your innovation roadmap for long-term success.
                                </p>  
                            </div>
                        </div>
                        <div className='mt-20 lg:mt-2 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center lg:mr-4'>
                            <div className='lg:mr-8 mt-4 lg:mt-20 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                                <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                    <Cpu className='h-16 w-16 text-blue-500 group-hover:text-sky-400 transition-all duration-500' />
                                    <span className='text-2xl lg:text-xl font-bold lg:font-semibold mx-4'>
                                        Devops & Automation
                                    </span>
                                </div>
                                <p className='mt-4 mx-8 lg:mx-0 lg:ml-28 text-left leading-loose text-gray-500 text-[0.9rem]'>
                                    Unlock greater agility and flexibility for your business with our industry-leading DevOps & Automation solutions. Our team of experts champions agile development practices, offering tailored solutions for individuals, teams, or complete turnkey projects, empowering your business to thrive in today's dynamic landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[-20rem] lg:mt-12 w-[100vw] h-[130vh] lg:[70vh] flex flex-col lg:flex-row items-start justify-center lg:items-start lg:justify-around'>
                    <div className='mt-0 lg:mt-4 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                            <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                <ShieldCheck className='h-16 w-16 text-blue-500 group-hover:text-sky-400 transition-all duration-500' />
                                <span className='text-2xl lg:text-xl font-bold lg:font-semibold mx-4'>
                                    Quality Assurance and Testing
                                </span>
                            </div>
                            <p className='mt-4 mx-8 lg:mx-0 lg:ml-20 leading-loose text-gray-500 text-[0.9rem] text-left'>
                                Empower continuous delivery with unwavering quality through our automation-driven QA and testing services. We ensure your systems perform flawlessly under pressure using a comprehensive approach to functional and non-functional testing, guaranteeing zero-defect releases.
                            </p>    
                    </div>
                    <div className='mt-24 lg:mt-20 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                            <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                <BarChart className='h-16 w-16 text-blue-500 group-hover:text-sky-400 transition-all duration-500' />
                                <span className='text-2xl lg:text-xl font-bold lg:font-semibold mx-4'>
                                    Maintenance and Support
                                </span>
                            </div>
                            <p className='mt-4 mx-8 lg:mx-0 lg:ml-24 leading-loose text-gray-500 text-[0.9rem] text-left'>
                                Maintain the smooth operation of your IT landscape with our tailored Software Maintenance and Support services. We empower you to choose the right strategy for your business needs, seamlessly bridging any gaps in your ecosystem. Our comprehensive service offerings include continuous software updates, bug resolution, proactive system monitoring, and performance optimization, ensuring long-term product stability and uninterrupted operations.
                            </p>    
                    </div>
                    <div className='mb-[28rem] lg:mb-0 lg:mr-4 mt-32 lg:mt-12 w-[100vw] h-[40vh] lg:w-[30vw] lg:h-[70vh] flex flex-col items-start lg:items-center justify-center group'>
                            <div className='ml-4 lg:ml-0 flex items-center mt-0 lg:mt-[-10rem]'>
                                <CloudCog className='h-16 w-16 text-blue-500 group-hover:text-sky-400 transition-all duration-500' />
                                <span className='text-2xl lg:text-xl font-bold lg:font-semibold mx-4'>
                                    Next-Gen Cloud Solutions
                                </span>
                            </div>
                            <p className='mt-4 mx-8 lg:mx-0 lg:ml-24 leading-loose text-gray-500 text-[0.9rem] text-left'>
                                Unlock the power of the cloud with our comprehensive migration services. Leverage our expert guidance, encompassing strategic planning and FinOps optimization. Our team ensures seamless integration between on-premises and cloud applications, maximizing your cloud investment and securing long-term success. Partner with us to craft your winning cloud strategy.
                            </p>    
                    </div>   
                </div>
        </div>
        <div id='consulting' className='lg:mt-[-16rem] w-[100vw] min-h-[100vh] bg-gray-100'>
            <div>
                <div className='w-[100vw] flex items-center justify-start text-[0.9rem] text-blue-500 font-bold ml-24'>
                    <span className='mt-12 lg:mt-[4rem]'>
                        //
                    </span>
                    <span className='mt-12 uppercase lg:mt-[4rem]'>
                        our services
                    </span>
                </div>
                <p className='text-3xl lg:text-4xl font-extrabold text-left mx-24 mt-4'>
                    Advisory & Consulting
                </p>
            </div>
            <div className='w-[100vw] min-h-[80vh] flex flex-col lg:flex-row mt-12'>
                <div className='w-[100vw] lg:w-[40vw] h-[120vh] mt-4'>
                    <img src={Consulting} alt="" className='ml-8 lg:ml-20 h-[90%] w-5/6 object-cover' />
                </div>
                <div className='w-[100vw] lg:w-[60vw] min-h-[50vh] mt-4'>
                    {/* <div className='lg:mt-[-6rem] lg:w-[60vw] w-[100vw] min-h-[75vh] flex flex-col lg:flex-row items-center justify-start lg:ml-8'> */}
                        <div id='parent11' className='mx-auto lg:mx-4 mt-[-2rem] lg:mt-[-6rem] w-[100vw] lg:h-[70vh] lg:w-[24vw]'>
                            <img src={Badge} alt="Badge Image" className='mx-8 lg:mx-0 mb-4 mt-16' />
                            <span className='mx-8 lg:mx-0 text-xl font-semibold'>Business Strategy</span>
                                <div id='child11' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.15rem] bg-gray-300' />
                                <p className='mt-4 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0'>
                                    We collaborate with you to craft a strategic roadmap, empowering your organization to achieve its goals. Our seasoned IT professionals leverage their expertise to guide businesses through complex technology challenges, fostering smarter decision-making and success.
                                </p>
                            {/* </div>     */}
                        </div>
                        <div id='parent12' className='mx-auto lg:mx-4 lg:-translate-y-[73vh] lg:translate-x-[25vw] lg:ml-8 w-[100vw] h-[70vh] lg:w-[24vw]'>
                            <IoMdSettings className='ml-[2.5rem] scale-150 mx-28 lg:mx-0 mb-4 mt-8 text-blue-500' />
                            <span className='mx-8 text-xl text-left lg:mx-0 font-semibold'>ESG Consulting</span>
                            <div id='child12' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.2rem] bg-gray-300' />
                               <p className='mx-8 lg:mx-0 mt-4 text-left leading-loose text-gray-500 text-[0.9rem]'>
                                    We empower organizations to achieve their Environmental, Social, and Governance (ESG) goals by leveraging technology and data. We guide them in creating strategic ESG enablement roadmaps, seamlessly integrating ESG principles into their operations, and establishing data-driven reporting frameworks that support their journey towards purpose-driven success.
                                </p>
                            </div>
                        <div>
                        <div id='parent13' className='lg:-translate-y-[70vh] mx-auto lg:mx-4 mt-[-10rem] lg:mt-[-6rem] w-[100vw] lg:w-[55vw] lg:h-[30vh]'>
                            <IoMdSettings className='text-blue-500 scale-150 mx-8 lg:mx-0 mb-4 mt-16' />
                            <span className='mx-8 lg:mx-0 text-xl font-semibold'>EA Consulting</span>
                                <div id='child13' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-[50vw] h-[0.15rem] bg-gray-300' />
                                <p className='mt-4 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0 mb-24 lg:mb-0'>
                                    Strengthen your organization's IT foundation with our comprehensive Enterprise Architecture Consulting. Our expert guidance encompasses integration and cloud strategies, maximizing the maturity of your architecture, and fostering cross-platform governance. This ensures seamless alignment with leading technology and governance standards.
                                </p>
                            {/* </div>     */}
                        </div>    
                        </div>
                </div>
            </div>
        </div>
        <div id='digital' className='lg:mt-[-14rem] w-[100vw] min-h-[100vh] flex flex-col lg:flex-row lg:bg-gray-100'>
            <div className='hidden lg:flex w-[40vw] h-[130vh] items-center justify-end'>
                <img src={DigitalImage} alt="" className='lg:object-cover lg:h-[90%] lg:w-[90%]' />
            </div>
            <div className='w-[100vw] lg:w-[60vw] min-h-[100vh] flex flex-col bg-gray-100'>
                <div className='bg-gray-100 w-[100%] min-h-[50vh]'>
                    <div className='mt-8 text-blue-500 text-[0.8rem] font-semibold'>
                        <span className='ml-16'>
                            //
                        </span>
                        <span>
                            OUR SERVICES
                        </span>
                    </div>
                    <h1 className='mt-4 text-3xl lg:text-4xl ml-8 lg:ml-16 font-extrabold'>
                        Digital Transformation
                    </h1>
                    <p className='mt-8 lg:mt-4 text-[0.9rem] text-gray-500 ml-8 lg:ml-16 lg:mx-16 leading-loose'>
                        Our Digital Transformation services empower your organization's journey towards success with enhanced performance and industry-specific knowledge. We combine expertise across technology and business areas, offering services like web and mobile app development, e-commerce website creation, and comprehensive digital marketing strategies. Our established framework helps streamline your transformation process.
                    </p>
                </div>
                <div className='lg:mb-32 w-[100%] min-h-[100vh] flex flex-col lg:grid grid-cols-2 grid-rows-2'>
                        <div id='parent21' className='lg:ml-12 mx-auto lg:mx-4 mt-[-2rem] lg:mt-[-4rem] w-[100vw] lg:h-[70vh] lg:w-[24vw]'>
                            <img src={Badge} alt="Badge Image" className='mx-8 lg:mx-0 mb-4 mt-16' />
                            <span className='mx-8 lg:mx-0 text-md font-bold'>AI/ML & Big Data Handling</span>
                                <div id='child21' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.15rem] bg-gray-300' />
                                <p className='mt-4 lg:ml-2 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0'>
                                    Unlock your organization's future potential with our cutting-edge AI and ML solutions. We're at the forefront of this dynamic field, specializing in computer vision, image recognition, intelligent automation, and text analysis through natural language processing. Our expertise in machine learning algorithms fuels these innovative capabilities.
                                </p>
                            {/* </div>     */}
                        </div>
                        <div id='parent22' className='mx-auto lg:mx-4 mt-[-2rem] lg:mt-[-4rem] w-[100vw] lg:h-[70vh] lg:w-[24vw]'>
                            <IoMdSettings className='mx-8 lg:mx-0 mb-4 mt-16 text-blue-500 scale-150' />
                            <span className='mx-8 lg:mx-0 text-md font-bold'>User Experience and Design</span>
                                <div id='child22' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.15rem] bg-gray-300' />
                                <p className='mt-4 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0'>
                                    We help businesses reimagine digital experiences through a people-first, design-driven mindset.  Our collaborative teams of skilled designers and product strategists craft seamless omnichannel UI/UX solutions. At Routa Digital, we analyze your unique needs and leverage the expertise of industry-leading technologists to elevate your customer's journey.
                                </p>
                            {/* </div>     */}
                        </div>
                        <div id='parent23' className='lg:ml-12 mx-auto lg:mx-4 mt-[-2rem] lg:mt-[-2rem] w-[100vw] lg:h-[70vh] lg:w-[24vw]'>
                            <img src={Badge} alt="Badge Image" className='mx-8 lg:mx-0 mb-4 mt-16' />
                            <span className='mx-8 lg:mx-0 text-md font-bold'>Digital Marketing</span>
                                <div id='child23' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.15rem] bg-gray-300' />
                                <p className='lg:ml-2 mt-4 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0 lg:mb-12'>
                                    Bridge the gap to the digital age with our comprehensive digital marketing services. We offer strategic and brand-amplifying campaigns across diverse online channels. Our expert team continuously evolves, staying abreast of industry trends to maximize your brand's impact. By employing data-driven strategies, we prioritize customer acquisition, driving revenue and enhancing your ROI.
                                </p>
                            {/* </div>     */}
                        </div>
                        <div id='parent24' className='mx-auto lg:mx-4 mt-[-2rem] lg:mt-[-1rem] w-[100vw] lg:h-[70vh] lg:w-[24vw]'>
                            <IoMdSettings className='mx-8 lg:mx-0 mb-4 mt-16 text-blue-500 scale-150' />
                            <span className='mx-8 lg:mx-0 text-md font-bold'>Web & Mobile Application</span>
                                <div id='child24' className='mx-8 lg:mx-0 mt-8 w-[80vw] lg:w-full h-[0.15rem] bg-gray-300' />
                                <p className='mt-4 text-left leading-loose text-[0.9rem] text-gray-500 mx-8 lg:mx-0 mb-28 lg:mb-0'>
                                    We craft custom web and mobile applications across diverse industries, tailoring each solution to your specific needs. Our focus is on building scalable, cross-platform apps that deliver results with exceptional speed and quality. We prioritize a robust and adaptable architecture that seamlessly manages complex data, ensures information security, and fosters an exceptional user experience through intuitive design and high responsiveness.
                                </p>
                            {/* </div>     */}
                        </div>
                </div>
            </div>
        </div>
        <div className='lg:hidden mb-28 lg:mb-0 h-[25vh] w-[100vw]  lg:w-[100%] flex flex-col justify-center lg:justify-start lg:items-start lg:flex-row bg-blue-500'>
            <Slider>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Java} alt="" className='h-[50%] w-[35%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Angular} alt="" className='h-[50%] w-[35%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Cplus2} alt="" className='h-[50%] w-[35%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Php} alt="" className='h-[50%] w-[30%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Net} alt="" className='h-[50%] w-[30%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Aws} alt="" className='h-[50%] w-[35%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Nodejs} alt="" className='h-[50%] w-[35%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Python} alt="" className='h-[50%] w-[30%] mt-8 mx-32' />
                </div>
                <div className="w-[25vw] h-[20vh] flex items-center justify-center">
                    <img src={Reactjs} alt="" className='h-[50%] w-[30%] mt-8 mx-32' />                    
                </div>
            </Slider>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Services