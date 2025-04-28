import React, { useState } from 'react'
import Heading from './ui/Heading'
import { ComunicationsWay, ContactInfo } from '../constant'
import { Link } from 'react-router-dom'

const Contact = () => {
    const paragraph = "Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information."
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
        const distinationMail = 'mohammedsalhyen1@gmail.com';
        // eslint-disable-next-line no-sequences
        window.location.href = `mailto:${distinationMail}?subject=${encodeURIComponent(name), encodeURIComponent(email), encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    };
    return (
        <section className='main-prop padding-container' id='contact'>
            <Heading title='Get in' span='Touch' p={paragraph} />
            <div className=' main-prop flex justify-between gap-8 md:flex-row xs:flex-col'>
                <div>
                    <div>
                        <h3 className='text-xl font-semibold'>Contact Information</h3>
                        <ul className='flex flex-col gap-4 py-4'>
                            {ContactInfo.map((item, index) => (
                                <li key={index} className='flex items-center gap-2'>
                                    <span className=' text-xl bg-gray-800 p-3 rounded-lg text-primary'>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p className=' text-gray-400 text-sm'>{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-5 mt-8'>Follow Me</h3>
                        <ul className='flex gap-5 text-lg'>
                            {ComunicationsWay.map((way) => (
                                <li className='bg-gray-500 text-xl p-4 opacity-60 hover:opacity-100 rounded-lg transition-all'>
                                    <Link to={way.link}>{way.icon}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='  ' >
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div className=' w-full flex gap-5'>
                            <div>
                            <label htmlFor='name'>Your Name</label>
                            <input type='text' title='name' placeholder='Enter your name' required className='normal-input' onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' title='email' placeholder='example@gmail.com' className='normal-input' required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div>
                        <label htmlFor='email'>Subject</label>
                        <input type='text' className='normal-input' title='subject' placeholder='Project Inquiry' required onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message'  title='message' placeholder="Hello,I'd like to talk about..." className=' max-h-[150px] normal-input' onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <input type="submit" value="Send Message" className=' bg-gradient-to-r from-primary to-secondry rounded-lg py-3 ' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact