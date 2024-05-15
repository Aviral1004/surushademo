import React, {useState,useRef} from 'react'
import customers from '../components/customers.js';
import Kpmg from '../assets/kpmg1.png'
import Hcl from '../assets/hcl1.png'
import DigitalPartner from '../assets/digitalPartner.png'
import Pro5 from '../assets/pro5.png'
import Wipro from '../assets/wipro1.png'
import Zeko from '../assets/zeko.png'
import { motion } from 'framer-motion'


const CustomerBrands = () => {

    return (
        // <div className='w-full lg:w-[100vw] overflow-x-hidden'>
        //     <h2 className='font-bold text-2xl lg:text-4xl mt-0 lg:mt-12'>{title}</h2>
        //     <div className='flex overflow-hidden space-x-16'>
        //         <div className='flex space-x-16 animate-loop-scroll_second items-end justify-center' style={{position:"absolute",left:"0vw",width:"100vw"}}>
        //             {/* <ul> */}
        //             {customers.map(function (value, idx) {

        //                 return (
        //                     <li className='list-none mt-12 font-bold text-2xl italic'  key={idx}>
        //                         {value.brand}
        //                     </li>
        //                 )
        //             })}
        //             {/* </ul> */}
        //         </div>
        //         <div className='flex space-x-16 animate-loop-scroll_second items-end justify-center' aria-hidden="true" style={{position:"absolute",left:"100vw",width:"100vw"}}>
        //             {/* <ul> */}
        //             {customers.map(function (value, idx) {
        //                 return (
        //                     <li className='list-none mt-12 font-bold text-2xl italic' key={idx}>
        //                         {value.brand}
        //                     </li>
        //                 )
        //             })}
        //             {/* </ul> */}
        //         </div>
        //     </div>
        // </div>
        <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateY(0)"}} transition={{delay:0.5, duration: 0.5}} className='logos'>
            <div className='logos-slide'>
                <div className='slide'><img loading='lazy' src={Kpmg} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Hcl} alt="" /></div>
                <div className='slide'><img loading='lazy' src={DigitalPartner} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Pro5} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Wipro} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Zeko} alt="" /></div>
                
            </div>
            <div className='logos-slide' aria-hidden="true">
                <div className='slide'><img loading='lazy' src={Kpmg} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Hcl} alt="" /></div>
                <div className='slide'><img loading='lazy' src={DigitalPartner} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Pro5} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Wipro} alt="" /></div>
                <div className='slide'><img loading='lazy' src={Zeko} alt="" /></div>
                   
            </div>
            {/* <div className='logos-slide' aria-hidden="true"> */}
                
            {/* </div> */}
        </motion.div>
    )
}

export default CustomerBrands