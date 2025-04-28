import React from 'react'
const ALtButton = ({ label, href }: any) => {
    const handleClick = () => {
        window.location.href = href;
    };
    return (
        <div className='flex-center lg:w-full xs:w-fit'>
            <button type="button" className="bg-gray-900 rounded-lg  text-lg font-bold text-white  px-3 py-2 flex-center transition-all hover:bg-gray-700 hover:-translate-y-1" onClick={handleClick}>
                {label}
            </button>
        </div>

    )
}

export default ALtButton
