import React from 'react'

const Heading = ({title,span,p}:{title:string,span:string,p:string}) => {
  return (
    <div className=' flex-center flex-col gap-6'>
        <div className='text-4xl font-bold'>
            {title} 
            <span className=' bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent'> {span}</span>
        </div>
        <p className=' text-gray-400 xs:w-full md:w-3/4 text-center'>{p}</p>
    </div>
  )
}

export default Heading