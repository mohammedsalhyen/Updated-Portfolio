import React from 'react'
import Logo from './ui/Logo'
import ContactIcon from './ui/ContactIcon'
import { ContactInfo, mainLinks } from '../constant'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=' bg-gray-900 main-prop'>
            <div className='padding-container'>
                <div className=' grid  xs:grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <Logo />
                        <p className='pb-4 pt-5 text-gray-500 '>
                            A passionate frontend developer creating beautiful and functional web experiences with modern technologies.
                        </p>
                        <ContactIcon />
                    </div>
                    <div className="grid  xs:grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <h3 className=' text-lg font-semibold'>Quick Links</h3>
                            <div className=' '>
                                <ul className=''>
                                    {mainLinks.map((mainLink) => (
                                        <li className='my-2  relative cursor-pointer text-gray-400 hover:text-white transition-all '>
                                            <Link to={mainLink.link}>{mainLink.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className=' text-lg font-semibold'>Contact Info</h3>

                                <ul className='flex flex-col gap-4 py-4'>
                                    {ContactInfo.map((item, index) => (
                                        <li key={index} className='flex items-center gap-2'>
                                            <span className=' text-lg text-primary'>
                                                {item.icon}
                                            </span>
                                                <p className=' text-gray-400 text-sm'>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer