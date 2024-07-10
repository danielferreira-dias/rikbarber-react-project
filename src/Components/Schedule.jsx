import React from 'react'
import { Navbar } from './Navbar'

const Schedule = () => {
    return (
        <div className='w-full h-svh flex flex-col bg-custom-black'>
            <Navbar />
            <div style={{ height: `calc(50svh)` }} className='w-full absolute md:relative'>
                <img className=" absolute inset-0 object-cover h-full w-full  grayscale" src='tools.jpg' />
                <div className='flex flex-col items-center justify-center h-full z-10 gap-y-5'>
                    <div className='flex flex-row gap-x-5 z-10'>
                        <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white teko '> STAY</h1>
                        <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko '>SHARP</h1>
                    </div>
                    <div className='border-custom-gold border-b-2 w-1/5 z-10 mt-5'></div>
                    <h2 className='text-white teko text-xl xs:text-3xl md:text-4xl 2xl:text-5xl mb-5 z-10'>Schedule your Appointment here</h2>
                </div>
            </div>
            <div className='w-full absolute md:relative top-1/2 h-fit'>

            </div>
        </div >
    )
}

export default Schedule
