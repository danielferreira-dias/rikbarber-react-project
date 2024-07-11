import React from "react"

const About = () => {
    return (
        <div className='flex flex-col xl:flex-row lg:gap-x-10 w-full h-full  items-center justify-evenly gap-y-20 md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
            <div className='flex-1 w-3/4 flex flex-col items-center justify-center gap-y-10'>
                <div className=' sm:w-128 3xl:w-176'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-fit'>
                        <img src="rik.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-xl' />
                        <img src="rik2.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-xl' />
                        <img src="rik3.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-xl' />
                        <img src="rik4.jpg" alt="Profile" className='max-w-full max-h-full object-contain h-auto w-auto shadow-lg shadow-custom-black rounded-xl' />
                    </div>
                </div>

            </div>
            <div className='flex-1 w-3/4 h-fit items-start flex-col gap-y-5 justify-evenly'>
                <div className='border-t-2 border-white w-1/2 border-opacity-40'></div>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'> ABOUT ME</h1>
                <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className=' w-full flex justify-center mt-10'>
                    <div className='flex w-full flex-row  justify-center items-baseline'>
                        <div className='flex flex-col w-1/3 gap-y-2'>
                            <img src="user.svg" alt="user" className='w-8 3xl:w-16' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-1">100 +</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Happy Customers</p>
                        </div>
                        <div className='flex flex-col w-1/3  gap-y-2'>
                            <img src="diamond.svg" alt="Diamond" className='w-8 3xl:w-14' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-1">5</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Years in the Business</p>
                        </div>
                        <div className='flex flex-col w-1/3  gap-y-2'>
                            <img src="trophy.svg.svg" alt="Trophy" className='w-8 3xl:w-16' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-2">3</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Certificates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
