import React from 'react'
import { Navbar } from './Navbar'

const AboutPage = () => {
    return (
        <div className='w-full h-full flex flex-col  bg-custom-black'>
            <Navbar></Navbar>
            <div className='h-72 md:h-80 2xl:h-96 3xl:h-128 w-full bg-custom-black flex items-center justify-center'>
                <img src="rikblur.jpg" alt="" className='h-72 md:h-80 2xl:h-96 3xl:h-128 w-full absolute object-cover' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>ABOUT ME</h1>
                    <div className="flex flex-row items-baseline gap-x-2 w-5/6 sm:w-1/2 2xl:w-2/6 px-2 mb-5 z-10">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h2 className="text-white teko text-xl xs:text-2xl sm:text-4xl 2xl:text-5xl mb-5">Home : About Me</h2>
                        <div className="border-t-2 h-2 flex-1 ml-2 "></div>
                    </div>
                </div>
            </div>

            <div className='h-fit w-full bg-custom-black gap-y-10 flex flex-col items-center justify-center py-10 px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44'>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>WHEN IT STARTED</h1>
                <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold mt-10 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='border-t-4 border-custom-gold w-1/2 border-opacity-40 my-10'></div>
                <div className='flex flex-col'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko w-full'>CERTIFICATES</h1>
                    <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold mt-10 '>
                        I'm always trying to improve my habilities, this is why I have collected certificates through the years to maintain my skills up to date and improve them.
                    </p>
                    <div className='flex flex-col lg:flex-row gap-x-10 mb-20'>
                        <div className='flex flex-col my-10 gap-y-2 items-center'>
                            <img src="certificate.png" alt="" className='rounded-xl  xl:border-4  border-custom-gold w-128 pc:w-176 h-auto' />
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> CERTIFICADO SOBRE X</h3>
                        </div>
                        <div className='flex flex-col my-10 gap-y-2 items-center'>
                            <img src="certificate.png" alt="" className='rounded-xl  xl:border-4  border-custom-gold w-128 pc:w-176 h-auto' />
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> CERTIFICADO SOBRE X</h3>
                        </div>
                        <div className='flex flex-col my-10 gap-y-2 items-center'>
                            <img src="certificate.png" alt="" className='rounded-xl  xl:border-4  border-custom-gold w-128 pc:w-176 h-auto' />
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> CERTIFICADO SOBRE X</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-72 md:h-80 2xl:h-96 3xl:h-128'>
                <img src="example_4.jpg" alt="" className='h-72 md:h-80 2xl:h-96 3xl:h-128 w-full absolute object-cover gra' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className=' text-3xl xs:text-4xl sm:text-5xl 2xl:text-7xl text-white z-10 teko border-4 p-5 rounded-sm border-custom-gold'>MAKE AN APPOINTMENT</h1>
                </div>
            </div>

            <div className='pc:h-176 h-fit w-full flex-col gap-x-5 lg:flex-row bg-custom-black flex items-center justify-center py-10 px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44'>
                <div className='flex flex-col w-full lg:w-1/2'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko mb-20'>CONTACTOS</h1>
                    <div className="flex flex-col gap-y-5 ">
                        <div className="flex flex-col">
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> Morada</h3>
                            <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold  '>
                                Rua 19, Espinho
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> Contacto</h3>
                            <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold  '>
                                +351 915555555
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className='text-xl xs:text-2xl sm:text-3xl 2xl:text-5xl text-custom-gold teko '> Horário</h3>
                            <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold  '>
                                Terça a Sexta: 9:00h - 18:00h
                            </p>
                            <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold  '>
                                Sábado: 9:00h - 14:00h
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full lg:w-1/2 pc:w-176 lg:mt-0 mt-10 '>
                    <img src="location.png" alt="" className='rounded-xl border-2 xl:border-4  border-custom-gold w-128 pc:w-176 h-auto' />
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

export default AboutPage
