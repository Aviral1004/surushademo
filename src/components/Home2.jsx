import React from 'react'
import HomeCards from '../components/HomeCards.jsx';

const Home2 = () => {
  return (
    <div className='w-[100vw] h-[180vh] md:h-[150vh] flex flex-col md:mt-12'>
        <div className='bg-slate-50 w-[100vw] h-[125vh] md:h-[60vh] flex flex-col md:flex-row justify-start items-center md:items-start'>
            <div className='mx-4 my-20 md:mx-16 md:my-28'>
                <p className='uppercase text-base text-blue-600 md:font-bold md:mt-4'>
                    what we offer?
                </p>
                <p className='text-3xl md:text-4xl font-extrabold mt-4 tracking-wider'>
                    Simplify your digital world with Surusha's expertise.
                </p>
            </div>
            <div className='h-[25vh] mt-[-3.5rem] md:mt-40 flex items-start justify-center'>
                <p className='mx-4 md:mx-24 leading-loose text-slate-500'>
                Our comprehensive range of IT services ensures a well-integrated approach that addresses all your business needs. We provide a blend of technological proficiency with business acumen to generate value and achieve successful outcomes.
                </p>
            </div>
        </div>
        <div className='w-[100vw] h-[55vh] md:[15vh] translate-y-[-35vh]'>
            <HomeCards />
        </div>
    </div>
  )
}

export default Home2