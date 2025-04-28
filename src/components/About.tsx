import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { IoHammerOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className=' main-prop padding-container flex-center flex-col gap-8 text-center bg-gray-900' id='about'>
            <div className=' flex-center gap-3 flex-col'>
                <span className=' text-sm text-primary'>
                    ABOUT ME
                </span>
                <p className=' text-2xl xs:w-full md:w-3/4 font-semibold'>
                    Frontend Developer with a passion for creating beautiful user experiences
                </p>
                <span className=' block bg-primary w-20 h-1'></span>
            </div>
            <div className=' flex-center gap-5 flex-col '>
                <p className=' text-gray-400 text-xl xs:w-full md:w-3/4'>
                    I specialize in building responsive, accessible,
                    and performant web applications using modern technologies.
                    With a keen eye for design and a commitment to code quality,
                    I create solutions that are both beautiful and functional.
                </p>
                <div className=' grid xs:grid-cols-1 md:grid-cols-2  gap-5'>
                    <p className='flex items-center p-3 gap-2 text-lg  rounded-lg bg-gray-800'>
                        <span className=' text-primary font-bold text-2xl'><FiMapPin/></span>
                        Cairo,Egypt
                    </p>
                    <p className='flex  items-center p-3 gap-2 text-lg  rounded-lg bg-gray-800'>
                        <span className=' text-primary font-bold text-2xl'><IoIosMail/></span>
                        mohammedsalhyen1@gmail.com
                    </p>
                </div>
                <Link to={"#project"} 
                className='flex flex-1 items-center py-3 px-4 gap-2 text-lg  rounded-lg bg-primary'
                > <IoHammerOutline/> View My Work</Link>
            </div>

        </div>
    )
}

export default About