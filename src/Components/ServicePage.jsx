import React from 'react'
import { Navbar } from './Navbar'

const ServicePage = () => {
    return (
        <div className='w-full h-full flex flex-col  bg-custom-black'>
            <Navbar></Navbar>
            <div className='h-96 md:h-128 lg:h-176  w-full bg-custom-black flex flex-col items-center justify-center'>
                <img src="rikblur.jpg" alt="" className='h-96 md:h-128 lg:h-176  w-full absolute object-cover' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>SERVIÇOS</h1>
                    <div className="flex flex-row items-baseline gap-x-2 w-5/6 sm:w-1/2 2xl:w-2/6 px-2 mb-5 z-10">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h2 className="text-white teko text-xl xs:text-2xl sm:text-4xl 2xl:text-5xl mb-5">Home : SERVIÇOS</h2>
                        <div className="border-t-2 h-2 flex-1 ml-2 "></div>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-custom-black opacity-90 to-transparent h-16 w-full relative bottom-0 '></div>
            </div>
            <div className='flex flex-col w-full py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
                <div className='flex flex-col h-fit bg-custom-black  mt-20'>
                    <div className='flex flex-col lg:flex-row px-5'>
                        <img src="example_4.jpg" alt="" className='h-72 md:h-80 2xl:h-96 3xl:h-128 w-full lg:w-4/6 relative  object-cover' />
                        <div className='flex flex-col lg:w-1/2 lg:ml-10'>
                            <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko mt-10 lg:mt-0 '>SOBRE A NOSSA <span className='text-custom-gold'>TECNOLOGIA</span></h1>
                            <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold mt-10 '>
                                Aqui é garantido sempre o melhor serviço com a melhor companhia na oferta de um café.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row w-full mt-20 px-5 gap-y-4 lg:gap-x-10 lg:justify-center items-center'>
                        <div className='w-72 xs:w-80 sm:w-96 h-96 sm:h-128 bg-neutral-800 rounded-sm flex flex-col items-center justify-center gap-y-5 p-5 px-10 text-center'>
                            <img src="hair.svg" alt="Hair" className='w-12 xl:w-16' />
                            <h1 className=' text-4xl xs:text-5xl sm:text-6xl  text-custom-gold z-10 teko'>HAIR</h1>
                            <p className='text-neutral-500 text-lg xs:text-xl sm:text-2xl  font-semibold  '>
                                Keep looking your best with our professional stylists....
                            </p>
                        </div>
                        <div className='w-72 xs:w-80 sm:w-96 h-96 sm:h-128 bg-neutral-800 rounded-sm flex flex-col items-center justify-center gap-y-5 p-5 px-10 text-center'>
                            <img src="hair.svg" alt="Hair" className='w-12 xl:w-16' />
                            <h1 className=' text-4xl xs:text-5xl sm:text-6xl  text-custom-gold z-10 teko'>HAIR</h1>
                            <p className='text-neutral-500 text-lg xs:text-xl sm:text-2xl  font-semibold  '>
                                Any cut to your taste followed by a...
                            </p>
                        </div>
                        <div className='w-72 xs:w-80 sm:w-96 h-96 sm:h-128 bg-neutral-800 rounded-sm flex flex-col items-center justify-center gap-y-5 p-5 px-10 text-center'>
                            <img src="beard.svg" alt="Hair" className='w-12 xl:w-16' />
                            <h1 className=' text-4xl xs:text-5xl sm:text-6xl  text-custom-gold z-10 teko'>HAIR</h1>
                            <p className='text-neutral-500 text-lg xs:text-xl sm:text-2xl  font-semibold  '>
                                Looking to try something new with your facial...
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-col mt-20'>
                        <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>
                            OUR <span className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>PRICES</span>
                        </h1>
                        <div className='h-1 border-b-2 border-custom-gold w-1/6 my-5'></div>
                        <p className='text-neutral-400 text-lg xs:text-xl sm:text-2xl xl:text-3xl'>
                            Our services spectrum encompasses many techniques and procedures, from straight hairstyling to face care.
                        </p>
                    </div>
                    <div className='flex flex-col mt-20 text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl '>
                        <ul className='teko-secondary text-white flex flex-col gap-y-10'>
                            <li className='flex justify-between border-b-2 pb-10'>
                                <p className='w-fit'>HAIRCUT</p>
                                <p className='w-fit text-emerald-700'>40$</p>
                            </li>
                            <li className='flex justify-between border-b-2 pb-10'>
                                <p className='w-fit'>SHAVE</p>
                                <p className='w-fit text-emerald-700'>35$</p>
                            </li>
                            <li className='flex justify-between'>
                                <p className='w-fit'>HAIRCUT + SHAVE</p>
                                <p className='w-fit text-emerald-700'>40$</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='flex flex-col'>
                <img src="border.a8ad40c0.png" alt="" className='w-full h-16' />
                <footer className='h-40 bg-white flex md:gap-x-5 '>
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

export default ServicePage
