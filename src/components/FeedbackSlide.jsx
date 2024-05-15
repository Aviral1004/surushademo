import React, { useState } from 'react'
import Car from '../assets/auto1.jpg';
import BlondGuy from '../assets/blond1.jpg';
import Francis from '../assets/shiatsu.jpg';
import Antonio from '../assets/brown.jpg';
import David from '../assets/dreamwork.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const FeedbackSlide = () => {

    const [isClicked, setIsClicked] = useState(new Array(data.length).fill(false))


    const settings = {
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 2,
        infinite: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  nextArrow: <SampleNextArrow to="next"/>,
                  prevArrow: <SamplePrevArrow to="prev" />,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow to="next"/>,
                    prevArrow: <SamplePrevArrow to="prev" />,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows:false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
      };
  return (
    <div className='mt-[-28rem] lg:-mt-16 h-full w-full lg:w-5/6  min-h-[100vh] lg:min-h-[140vh] m-auto'>
        <div className="lg:space-x-8">
            <Slider {...settings}>
                {data.map((d, idx) => (
                    <div key={idx} className={`rounded-md shadow-xl lg:mt-8 bg-white ${isClicked[idx] ? 'h-[124vh]' : 'h-[65vh]'} lg:min-h-[65vh] text-black flex flex-row lg:flex-col items-center lg:justify-around justify-evenly z-1000 transition-all duration-500`}>
                        <div className='mt-[-2rem] lg:mt-0 h-56 lg:min-h-56 bg-white flex justify-around items-center rounded-t-xl'>
                            <img src={d.img} alt="image" className="mx-4 lg:mx-0 lg:ml-12 h-16 w-16 lg:h-36 lg:w-36 rounded-full object-center lg:object-center flex items-center justify-center" />
                            <div className='flex flex-col items-center justify-around lg:mt-0 mt-4'>
                                <p className='font-bold text-[1.5rem] lg:text-2xl text-left lg:text-center mx-2 leading-tight lg:leading-none'>
                                    {d.name}
                                </p>
                                <p className='font-base text-gray-300 lg:mt-0 mt-4 text-[1.1rem] lg:text-[1.2rem] text-left lg:text-center mx-3 lg:mx-8'>
                                    {d.position}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mx-4 lg:mx-8">
                            <p className="text-center leading-normal text-gray-500">
                            {isClicked[idx] === false ? `${d.review}...` : `${d.moreReview}`}

                            </p>
                            <button className='w-5/6 lg:mt-2 text-blue-500 text-lg text-left' onClick={() => setIsClicked(prevState => {
              const newState = [...prevState]
              newState[idx] = !newState[idx]
              return newState
            })}>
                                {isClicked[idx] === false ? "Show More" : "Show Less"}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default FeedbackSlide;

const data = [
    {
        name: "Head of Enterprise Architecture",
        position: "Apex largest Automotive Manufacturer",
        img: Car,
        review: "We are writing to express our profound appreciation for your exceptional work on developing our full-stack animated website. From the very beginning, your team's dedication and expertise have exceeded our expectations.",
        moreReview: "We are writing to express our profound appreciation for your exceptional work on developing our full-stack animated website. From the very beginning, your team's dedication and expertise have exceeded our expectations. We were particularly impressed by your Technical mastery and Creative spark. Your developers seamlessly navigated the complexities of web development and animation, transforming our vision into a visually stunning and functionally seamless website. Throughout the project, your team fostered open communication and actively addressed any challenges with promptness and efficiency. Your team's creative vision truly shines through in the website's captivating animations, effectively engaging and informing our visitors. The positive feedback we've already received on the website's design and user-friendliness is thanks to your exceptional work."    
    },
    {
        name: "Luari Phillips",
        position: "Chief Strategy / Accelaration / Development / Information Officer",
        img: BlondGuy,
        review: "As a real estate company, we were facing a challenge: our website, while informative, wasn't effectively capturing the essence and features of our properties. We needed a solution that would not only showcase our offerings but also engage potential clients on a deeper level.",
        moreReview: "As a real estate company, we were facing a challenge: our website, while informative, wasn't effectively capturing the essence and features of our properties. We were losing potential clients who couldn't fully envision themselves living in our spaces. We needed a solution that would not only showcase our offerings but also engage potential clients on a deeper level, allowing them to connect emotionally with the properties and imagine themselves calling them home. Thankfully, we found the perfect partner in Surusha Technology. Your team listened attentively to our concerns and developed a creative solution: a visually stunning and user-friendly website that not only showcases our properties in their best light but also tells a story. Through immersive visuals, interactive features, and compelling descriptions, our website now allows potential clients to truly experience the properties, fostering a deeper connection and ultimately driving leads and sales."    
    },
    {
        name: "Francis Javier",
        position: "Owner, Shiatsu Centre",
        img: Francis,
        review: "Writing to express my sincere gratitude for your outstanding work on my Nordic Shiatsu Centre website. As a small business owner, your guidance and expertise made navigating web development seamless and enjoyable.",
        moreReview: "However, your guidance and expertise transformed the process into a smooth and stress-free experience. I was particularly impressed by your approachable communication style, adherence to established deadlines, and inclusive design approach. You always took the time to provide comprehensive answers to my questions and ensured I was actively involved at every stage. The final product speaks volumes. The website beautifully embodies the essence of our center, perfectly capturing the serenity and tranquility we offer our clients. I am confident it will play a vital role in attracting new clients and showcasing the unique services we provide. You have not only met, but surpassed my expectations, and I am truly grateful for your dedication and professionalism."    
    },
    {
        name: "Richards",
        position: "Easy-peasy Delivery Service",
        img: Antonio,
        review: "We at Easy-peasy Delivery Service are writing to express our deep appreciation for your outstanding work in optimizing our delivery platform. Your team's efficiency in identifying and resolving performance issues, as well as correcting obscure errors, has significantly enhanced our platform's reliability and user experience.",
        moreReview: "We at Easy-peasy Delivery Service are writing to express our deep appreciation for your outstanding work in optimizing our delivery platform. Your team's efficiency in identifying and resolving performance issues, as well as correcting obscure errors, has significantly enhanced our platform's reliability and user experience. We were particularly impressed by your strategic approach, clear communication, and commitment to delivering high-quality solutions. These qualities ensured a smooth and successful project, and we are confident that the improvements made will contribute significantly to our continued growth. It's worth noting that your proactive approach in identifying potential issues and suggesting preventive measures not only addressed immediate concerns but also positioned our platform for future scalability and efficiency. We are grateful for your foresight and commitment to exceeding expectations."    
    },
    {
        name: "David Lopez",
        position: "Dreamworks ERP",
        img: David,
        review: "We at Dreamworks appreciate your dedication to completing the AI-based system management solution for our company. The implemented features, like real-time resource allocation and automated incident response, offer promising advancements in our operational efficiency.",
        moreReview: "We at Dreamworks appreciate your dedication to completing the AI-based system management solution for our company. The implemented features, like real-time resource allocation and automated incident response, offer promising advancements in our operational efficiency. We are impressed by your project management skills, particularly the consistent communication channels maintained throughout the project. Furthermore, your team's adaptability and willingness to address our evolving needs during development were instrumental in delivering a solution that seamlessly integrates with our existing infrastructure. We are confident that this new system will play a key role in optimizing our operations and propelling Dreamworks towards its future goals. You consistently demonstrated a deep understanding of our requirements and provided creative solutions to overcome any challenges encountered."    
    },

]

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowLeft className="arrows" style={{color:"white"}}/>
      </div>
    )
    }

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowRight className="arrows" style={{color:"white"}}/>
      </div>
    )
  }

// // <div className=' mt-[35vh] lg:mt-0 w-[95vw] m-auto h-full flex flex-col items-center justify-center'>
// <div className='mt-20 flex flex-col lg:flex-row items-center justify-center '>
// {
//     data.map((item, index) => (
//         <div className='lg:w-[40vw] lg:h-[60vh] bg-white z-50 shadow-xl'>
//             <div className='flex'>
//                 <div className='rounded-t-xl'>
//                     <img src={item.img} className='h-44 w-44' alt="" />
//                 </div>
//                 <div className='flex flex-col'>
//                     <span>
//                         {item.name}
//                     </span>
//                     <span>
//                         {item.position}
//                     </span>
//                 </div>
//             </div>
//             <div>
//                 <p>{item.review}</p>
//                 <button>Read More</button>
//             </div>
//             <div className='bg-white lg:w-[27.5vw] lg:h-[52vh] items-center justify-center'>
    
//             </div>
//         </div>
//     ))
// }
// </div>

// </div>