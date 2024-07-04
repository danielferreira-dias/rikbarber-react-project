import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:gap-x-10 w-full  items-center justify-evenly gap-y-20 md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
            <div className='flex-1 flex flex-col items-center justify-center h-full'>
                <div className='w-72 md:w-96 2xl:h-128 2xl:w-96 3xl:h-176 3xl:w-128 relative flex items-center justify-center'>
                    <div className='absolute w-64 sm:w-72 md:w-80 2xl:h-128 3xl:h-176 2xl:w-96 3xl:w-128 border-4 rotate-6 z-10 rounded-sm' style={{ height: '100%' }}></div>
                    <img src="rik.jpg" alt="Profile" className='max-w-full max-h-full object-contain h-auto w-auto -rotate-2 shadow-lg shadow-custom-black rounded-sm' />
                </div>
                <div className='flex w-full flex-row mt-10 justify-evenly xl:justify-center xl:gap-x-10'>
                    <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4 mt-10 flex justify-center items-center'>
                        <img src="gmail.svg" alt="Gmail" className='w-1/2 h-1/2 grayscale' />
                    </button>
                    <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4 mt-10 flex justify-center items-center'>
                        <img src="whatsapp.svg" alt="WhatsApp" className='w-1/2 h-1/2 grayscale' />
                    </button>
                    <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4 mt-10 flex justify-center items-center'>
                        <img src="instagram.svg" alt="Instagram" className='w-1/2 h-1/2 grayscale' />
                    </button>
                </div>
            </div>
            <div className='flex-1 lg:w-3/5  flex h-auto 3xl:h-176 2xl:h-auto items-start flex-col gap-y-5 justify-evenly pr-10'>
                <div className='border-t-2 border-white w-1/2 border-opacity-40'></div>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'> ABOUT ME</h1>
                <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className='w-44 h-16 md:w-64 2xl:w-64 2xl:h-20 bg-custom-black bg-opacity-80 border-white border-2 mt-10'>
                    <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold'>Contacto</a>
                </button>
            </div>
        </div>
    )
}

export default About
