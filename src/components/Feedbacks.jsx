import React, {useState, useEffect} from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import FeedbackSlide from '../components/FeedbackSlide.jsx';

const Feedbacks = () => {
    const [isClicked, setIsClicked] = useState(new Array(3).fill(false));
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        setShowMore(isClicked.some(Boolean));
    }, [isClicked]);

  return (
    <div className={`mt-40 md:min-h-[120vh] max-h-[180vh] max-w-[100vw] flex flex-col items-center justify-center bg-blue-500`} style={{height: showMore ? '110vh' : '180vh'}}>
        <div className='flex flex-col justify-around items-center mt-[6vh] md:mt-16' style={{height: '100%'}}>
            <p className="font-semibold text-white text-[1rem] my-2 mx-8 md:mx-16 text-center">
                WHAT OUR CLIENTS SAY ABOUT US?
            </p>
            <p className='font-extrabold text-white text-3xl md:text-5xl mx-4 md:mx-32 text-center mt-2 md:mt-0 mb-20 md:mb-0' style={{height: '100%'}}>
                Our work speaks volumes about itself. Swipe to see what our clients have to say about us.
            </p>
        </div>
        <div className='md:mt-[-25vh] w-[100vw] h-[110vh] md:min-h-[100vh]'>
            <FeedbackSlide />
        </div>
        <LinkRouter>
            <button className='bg-[#09D0EF] px-8 py-3 mb-8 md:mb-20 text-center rounded-md text-white font-bold text-[1.2rem]'>
                Learn More
            </button>
        </LinkRouter>
    </div>
  )
}

export default Feedbacks