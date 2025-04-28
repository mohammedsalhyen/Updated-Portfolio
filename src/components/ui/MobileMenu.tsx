import React from 'react'
import { mainLinks } from '../../constant'
import ContactIcon from './ContactIcon'

const MobileMenu = () => {
    return (
        <div data-aos="fade-down" className=' xs:block sm:hidden p-4 bg-gray-900'>
            <div className="mb-4">
                <ul className='flex flex-col gap-4 text-lg '>
                    {mainLinks.map((mainLink) => (
                        <li className=' group relative cursor-pointer text-gray-400 hover:text-white transition-all '>
                            <a href={mainLink.link}>{mainLink.title}</a>
                            <span className=' absolute bottom-0 left-0 bg-gradient-to-r from-primary to-secondry w-0 group-hover:w-full h-[2px] transition-all duration-300'></span>
                        </li>
                    ))}
                </ul>
            </div>
            <ContactIcon/>
        </div>
    )
}

export default MobileMenu