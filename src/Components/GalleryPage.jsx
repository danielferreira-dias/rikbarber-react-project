import React from 'react'
import { Navbar } from './Navbar'

const GalleryPage = () => {

    const images = [
        "exame_1.jpg",
        "example_2.jpg",
        "example_3.jpg",
        "example_4.jpg",
        "exame_1.jpg",
        "example_2.jpg",
        "example_3.jpg",
        "example_4.jpg",
    ];


    return (
        <div className='flex flex-col h-fit w-full bg-custom-black'>
            <Navbar></Navbar>
            <div className='h-96 md:h-128 lg:h-176  w-full bg-custom-black flex flex-col items-center justify-center'>
                <img src="rikblur.jpg" alt="" className='h-96 md:h-128 lg:h-176  w-full absolute object-cover' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>GALLERY</h1>
                    <div className="flex flex-row items-baseline gap-x-2 w-5/6 sm:w-1/2 2xl:w-2/6 px-2 mb-5 z-10">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h2 className="text-white teko text-xl xs:text-2xl sm:text-4xl 2xl:text-5xl mb-5">Home : Gallery</h2>
                        <div className="border-t-2 h-2 flex-1 ml-2 "></div>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-custom-black opacity-90 to-transparent h-16 w-full relative bottom-0 '></div>
            </div>
            <div className='flex flex-col bg-custom-black w-full  my-10 items-center px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44'>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold z-10 teko mb-10'>WALL OF FAME</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-6 '>
                    {images.map((image, index) => (
                        <img
                            key={index} // Add a unique key prop
                            src={image}
                            className='w-full object-cover object-center h-full rounded-xl shadow-md p-2'
                            alt='' // It's good practice to include an alt attribute for images
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col'>
                <img src="border.a8ad40c0.png" alt="" className='w-full h-16' />
                <footer className='h-40 bg-white flex md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
                    <div className='flex flex-col pb-3 w-full items-center gap-y-2'>
                        <img src="instagram.svg" alt="" className='w-12 grayscale' />
                        <div className='flex flex-col w-full items-center'>
                            <p>© Copyright 2024. All rights reserved</p>
                            <p className='font-bold'>Made by Daniel Dias</p>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default GalleryPage
