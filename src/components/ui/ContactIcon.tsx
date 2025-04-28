import React from 'react'
import { Link } from 'react-router-dom'
import { ComunicationsWay } from '../../constant'

const ContactIcon = () => {
    return (
        <div>
            <ul className='flex gap-5 text-lg'>
                {ComunicationsWay.slice(0,3).map((way) => (
                    <li className='text-gray-400 hover:text-white hover:-translate-y-1 transition-all'>
                        <Link to={way.link}>{way.icon}</Link>
                    </li>
                ))}
            </ul>
        </div>)
}

export default ContactIcon