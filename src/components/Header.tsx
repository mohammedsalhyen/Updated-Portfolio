import React, { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import { mainLinks } from '../constant'
import ContactIcon from './ui/ContactIcon'
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import MobileMenu from './ui/MobileMenu'
import Aos from 'aos'
const Header = () => {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

    }, []);
    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'ease-in-sine',
        });
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header data-aos="fade-down" data-aos-duration="800" className={`sticky top-0 w-full z-50 padding-container py-4 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 shadow-md' : 'bg-transparent shadow-none'
            }`}>
            <div className=' relative'>
                <div className=' flex-between'>
                    <Logo />
                    <div className=' xs:hidden sm:block'>
                        <ul className='flex gap-7 text-lg '>
                            {mainLinks.map((mainLink) => (
                                <li className=' group relative cursor-pointer text-gray-400 hover:text-white transition-all '>
                                    <a href={mainLink.link}>{mainLink.title}</a>
                                    <span className=' absolute bottom-0 left-0 bg-gradient-to-r from-primary to-secondry w-0 group-hover:w-full h-[2px] transition-all duration-300'></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=' xs:hidden md:block'>
                        <ContactIcon />
                    </div>
                    <button onClick={() => setOpen(!open)} className='xs:block sm:hidden text-xl'>
                        {!open ? <LiaBarsSolid /> : <RxCross2 />}
                    </button>
                </div>
                {open && <div className=' absolute w-full left-0 top-full z-50'><MobileMenu /></div>}
            </div>
        </header>
    )
}

export default Header