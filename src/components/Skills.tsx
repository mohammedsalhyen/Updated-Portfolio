
import Heading from './ui/Heading'

import { skills } from '../constant'

const Skills = () => {
    const pargraph="I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and expertise."
  

  
    return (
    <section className=' main-prop padding-container' id='skills'>
        <div className='flex-center flex-col'>
            <Heading title="My" span='Skills' p={pargraph}/>
        </div>
        <div className='grid lg:grid-cols-4 xs:grid-cols-2 my-10 md:grid-cols-3 gap-5'>
                    {skills?.map((skill: any, index: number) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className=' transition-all  bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 flex py-5 px-10 rounded-lg flex-col items-center  cursor-pointer  '>
                            <div className=' w-10 h-10'>
                                <img className=' w-full h-full' src={skill.img} alt='skill-img'  />
                            </div>
                            <p className=' text-[var(--pimary)] text-nowrap hover:font-bold transition-all text-[18px] pt-4 '>{skill.name}</p>
                        </div>
                    ))
                    }
                </div>
    </section>
  )
}

export default Skills