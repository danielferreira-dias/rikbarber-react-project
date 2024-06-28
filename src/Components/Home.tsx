import React from 'react'

const Home = () => {
    return (
        <div className='relative w-full h-screen flex justify-center items-center overflow-hidden'>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className='absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1] filter grayscale'
            >
                <source src='/barber-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            {/* Content Overlay */}
            <div className='relative z-10 w-full h-full flex justify-center items-center'>
                <div className='flex flex-col gap-y-5 2xl:gap-y-10 text-center'>
                    <h1 className='text-white great-vibes-regular text-4xl xs:text-5xl md:text-6xl 2xl:text-8xl'>Rik's Barber Shop</h1>
                    <div className='flex flex-row gap-x-2 items-center justify-center'>
                        <button className='w-32 h-16 md:w-44 2xl:w-64 2xl:h-28 bg-orange-300 bg-opacity-80 border-white border-2'>
                            <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold'>Sobre</a>
                        </button>
                        <button className='w-32 h-16 md:w-44 2xl:w-64 2xl:h-28 bg-white bg-opacity-20 border-white border-2'>
                            <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold'>Agendar</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home
