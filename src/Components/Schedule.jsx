import React from 'react';
import { Navbar } from './Navbar';
import MyCalendar from './Calendar';

const Schedule = () => {
    return (
        <div className='relative w-full min-h-screen overflow-y-auto'>
            <Navbar />
            <img
                className="absolute inset-0 object-cover w-full h-full grayscale"
                src='tools.jpg'
                alt='Background'
            />
            <div className='relative z-10 w-full min-h-screen flex flex-col'>
                <div className='flex flex-col items-center justify-start mt-5 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-24 pc:mt-32 z-10'>
                    <div className='flex flex-col items-center justify-center gap-y-5'>
                        <div className='flex flex-row gap-x-5'>
                            <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white teko'>
                                STAY
                            </h1>
                            <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>
                                SHARP
                            </h1>
                        </div>
                        <div className='border-custom-gold border-b-2 w-1/5 mt-2'></div>
                        <h2 className='text-white teko text-xl xs:text-3xl md:text-4xl 2xl:text-5xl mb-5'>
                            Schedule your Appointment here
                        </h2>
                    </div>
                </div>
                <div className='flex-grow flex items-center justify-center z-10'>
                    <MyCalendar />
                </div>
                <div className='pb-10'></div>
            </div>
        </div>
    );
};

export default Schedule;