import React from 'react'

const CardItem = ({ img, name, desc, price }) => {
    return (
        <div className='w-64 xs:w-80 lg:w-96 h-128 sm:h-176 bg-custom-gray rounded-sm flex flex-col items-center justify-center gap-y-6  px-10 text-center'>
            <img src={img} alt="Hair" className='w-80 h-auto' />
            <h1 className=' text-3xl xs:text-3xl sm:text-4xl  text-white z-10 teko'>{name}</h1>
            <p className='text-neutral-500 text-lg xs:text-xl sm:text-2xl  font-semibold  '>
                {desc}
            </p>
            <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                {price}
            </p>
        </div>
    )
}

export default CardItem
