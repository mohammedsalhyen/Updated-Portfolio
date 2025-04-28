import React from 'react'
const Button = ({ label, href }: any) => {
  const handleClick = () => {
    window.location.href = href;
  };
  return (
    <div className='flex-center lg:w-full xs:w-fit'>
      <button type="button" className="bg-gradient-to-r text-nowrap rounded-md shadow-lg  text-lg font-semibold text-white from-primary  to-secondry px-3 py-2 flex-center transition-all hover:-translate-y-1" onClick={handleClick}>
        {label}
      </button>
    </div>
  )
}

export default Button