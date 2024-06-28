import React from 'react'

const Home = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col gap-y-5 2xl:gap-y-10 h-fit text-center'>
                <h1 className='text-white great-vibes-regular text-4xl xs:text-5xl md:text-6xl 2xl:text-8xl'>Rik's Barber Shop</h1>
                <div className='flex flex-row gap-x-2 items-center justify-center'>
                    <button className='w-32 h-16 md:w-44 2xl:w-64 2xl:h-28 bg-orange-200 border-white border-2'>
                        <a href="" className='text-white text-xl md:text-2xl 2xl:text-4xl'>Sobre</a>
                    </button>
                    <button className='w-32 h-16 md:w-44 2xl:w-64 2xl:h-28 bg-white border-white border-2 bg-opacity-50'>
                        <a href="" className='text-white text-xl md:text-2xl 2xl:text-4xl'> Agendar </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
