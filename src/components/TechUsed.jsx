import React from 'react'
import Java from '../assets/java.png';
import Angular from '../assets/angular.png';
import Cplus2 from '../assets/cplus2.png';
import Php from '../assets/php.png';
import Net from '../assets/net1.png';
import Aws from '../assets/aws.png';
import Nodejs from '../assets/nodejs.png';
import Python from '../assets/python.png';
import Reactjs from '../assets/reactjs1.png';
import Squi from '../assets/squirrel1.png';

import { motion } from 'framer-motion';

const TechUsed = () => {
  return (
    <motion.div initial={{opacity: 0, transform:"translateY(20%)"}} whileInView={{opacity: 1, transform:"translateX(0)"}} transition={{delay:0.5, duration: 0.5}} className='logos'>
            <div className='logos-slide'>
                <img src={Java} alt="" />
                <img src={Angular} alt="" />
                <img src={Cplus2} alt="" />
                <img src={Php} alt="" />
                <img src={Net} alt="" />
                <img src={Aws} alt="" />
                <img src={Nodejs} alt="" />
                <img src={Python} alt="" />
                <img src={Reactjs} alt="" />
                <img src={Squi} alt="" />
                <img src={Java} alt="" />
                <img src={Angular} alt="" />
                <img src={Cplus2} alt="" />
                <img src={Php} alt="" />
                <img src={Net} alt="" />
                <img src={Aws} alt="" />
                <img src={Nodejs} alt="" />
                <img src={Python} alt="" />
                <img src={Reactjs} alt="" />
                <img src={Squi} alt="" />

            </div>
            {/* <div className='logos-slide' aria-hidden="true"> */}
                
            {/* </div> */}
        </motion.div>
  )
}

export default TechUsed