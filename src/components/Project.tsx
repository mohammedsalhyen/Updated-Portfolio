import React, { useState } from 'react'
import Heading from './ui/Heading'
import { FaLink } from "react-icons/fa";
import { FaGithub, FaArrowRight } from 'react-icons/fa6'
import { projects } from '../constant'


const Project = () => {
    const pargraph = "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with."
    const [visiblePrjects, setVisiblePrjects] = useState<number>(4)

    const showMorePrject = () => {
        if (visiblePrjects >= projects.length) {
            setVisiblePrjects(projects.length)
        } else {
            setVisiblePrjects((prv) => prv + 4)
        }
    }
    return (
        <section className=' bg-gray-900 main-prop padding-container' id='projects'>
            <div className='flex-center flex-col'>
                <Heading title="My" span='Projects' p={pargraph} />
            </div>
            <div className=' grid main-prop xs:grid-cols-1 md:grid-cols-2 gap-7 '>
                {projects?.slice(0, visiblePrjects).map((project: any, index: number) => (
                    <div
                        data-aos="fade-up" data-aos-offset="200" data-aos-duration={`${index}00`}
                        className=' bg-gray-800 rounded-lg w-full overflow-hidden'>
                        <div className='sm:h-[300px] xs:h-[400px] overflow-hidden relative'>
                            <div className='project-image  cursor-pointer'>
                                <img src={`${project.img}`} alt='project' loading='lazy' />
                            </div>
                        </div>
                        <div className=' p-3 h-1/3 '>
                            <div className='h-full flex flex-col justify-between'>
                                <div>
                                    <p className='  text-xl text-start font-bold'>{project.name}</p>
                                    <p className=' text-gray-400 py-3 '>{project.description}</p>
                                    <div className=' '>
                                        <ul className=' text-start w-full'>
                                            {project.skills?.map((item: string, index: number) => (
                                                <li className='inline-block me-1 mb-1 bg-gray-700 text-center px-2 py-[1px] text-sm rounded-2xl' key={index}>
                                                    <p className='text-nowrap '>{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='flex gap-6 pt-2 text-sm '>
                                    <a
                                        href={project?.link}
                                        className='cursor-pointer text-primary flex gap-1 items-center'
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLink /> Live Demo
                                    </a>
                                    {project.github &&
                                        <a
                                            href={project.github}
                                            className='text-primary flex gap-1 items-center'
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub /> Github Repo
                                        </a>
                                    }

                                </div>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
            <button
                onClick={showMorePrject}
                className=' flex-center text-center gap-1 text-primary w-full transition-all hover:text-white'>
                View more projects <FaArrowRight />
            </button>
        </section>
    )
}

export default Project