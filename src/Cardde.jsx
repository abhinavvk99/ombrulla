import React from 'react'
import './Style.css'
import profile from './img/1ed886cb123f0f55aba0afe6ecc7f56c.png'
import use from './img/Use-Case-of-AI-Visual-Inspection.png'

export const Cardde = () => {
    return (
        <div>
            <div className='card1'>
                <div>
                    <img src={use} alt="use" className=' w-96 rounded-xl' />
                </div>
                <div className='p-2'>
                    <span className=' font-sans font-semibold text-black text-xl'>Transforming Maritime Inspections with AI Visual Inspection</span>
                </div>
                <div className='p-2'>
                    <p className=' font-sans opacity-35'>Explore how pioneering AI-driven inspections in the maritime industry are revolutionizing asset monitoring with improved ...</p>
                </div>
                <div className=" flex flex-wrap p-2">
                    <img src={profile} alt="ship" className=" w-16 rounded-full p-2" />
                    <div className=" pt-5">
                        <h3 className=" font-sans font-semibold text-xl">Joseph</h3>
                        <h3 className=" font-sans font-semibold text-xl text-blue-600 opacity-35">Managing Director, AZEL IT Solutions</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
