import React, {useState,useRef} from 'react'
import customers from '../components/customers.js';

const CustomerBrands = ({ title }) => {

    return (
        <div className='w-full lg:w-[100vw] overflow-x-hidden'>
            <h2 className='font-bold text-2xl lg:text-4xl mt-0 lg:mt-12'>{title}</h2>
            <div className='flex overflow-hidden space-x-16'>
                <div className='flex space-x-16 animate-loop-scroll_second items-end justify-center' style={{position:"absolute",left:"0vw",width:"100vw"}}>
                    {/* <ul> */}
                    {customers.map(function (value, idx) {

                        return (
                            <li className='list-none mt-12 font-bold text-2xl italic'  key={idx}>
                                {value.brand}
                            </li>
                        )
                    })}
                    {/* </ul> */}
                </div>
                <div className='flex space-x-16 animate-loop-scroll_second items-end justify-center' aria-hidden="true" style={{position:"absolute",left:"100vw",width:"100vw"}}>
                    {/* <ul> */}
                    {customers.map(function (value, idx) {
                        return (
                            <li className='list-none mt-12 font-bold text-2xl italic' key={idx}>
                                {value.brand}
                            </li>
                        )
                    })}
                    {/* </ul> */}
                </div>
            </div>
        </div>
    )
}

export default CustomerBrands