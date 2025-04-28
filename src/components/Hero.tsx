import React from 'react'
import { Typewriter } from "react-simple-typewriter"
import { jobs } from '../constant'
import { FaArrowDown } from "react-icons/fa6";
import Button from './ui/Button'
import ALtButton from './ui/AltButton'
const Hero = () => {
    return (
        <section className=' main-prop overflow-x-hidden padding-container' id='hero'>
            <div className=' flex-center flex-col gap-8 text-center'>
                <p data-aos="zoom-in-up" data-aos-duration="900" className=' bg-gray-900 text-white rounded-5xl py-1 px-3'>
                    Welcome to my portfolio
                </p>
                <h1  className=' text-white text-nowrap xs:text-3xl sm:text-6xl font-extrabold'>
                    Hi, I'm
                    <span className=" xs:block sm:inline mx-2 bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent">
                         Mohammed Salhyen
                    </span>
                </h1>
                <div data-aos="fade-up" data-aos-duration="700">
                    <p className='xs:text-xl md:text-2xl'> I'm a <span><Typewriter words={jobs} loop={true} /></span> </p>
                </div>
                <p   className=' xs:w-full  md:w-1/2 text-lg text-gray-400'>I create engaging, responsive, and user-friendly web experiences with modern technologies and clean code.</p>
                <div className=' mt-5 flex-center gap-5'> 
                   <div data-aos="fade-right">
                   <Button  label={"Download CV"} href={"/Mohammed salhyen Shereif-Front end developer(React- Next js).pdf"}/>
                   </div>
                   <div data-aos="fade-left">
                    <ALtButton label={"Contact Me"} href={"#contact"}/>
                    </div>
                </div>
                <a href={"#about"}  className='mt-20 text-lg animate-bounce text-gray-700'> <FaArrowDown/></a>
            </div>
        </section>
    )
}

export default Hero