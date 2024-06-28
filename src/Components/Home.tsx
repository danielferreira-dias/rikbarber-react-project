import React from 'react'

const Home = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col gap-y-5 h-fit text-center'>
                <h1 className='text-white great-vibes-regular text-4xl md:text-6xl'>Rik's Barber Shop</h1>
                <div className='flex flex-row gap-x-2 items-center justify-center'>
                    <button className='w-32 h-16 md:w-44 bg-orange-300 border-white border-2'>
                        <a href="" className='text-white text-xl  md:text-2xl'>Sobre</a>
                    </button>
                    <button className='w-32 h-16 md:w-44 bg-white border-white border-2 bg-opacity-50'>
                        <a href="" className='text-white text-xl md:text-2xl'> Agendar </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
