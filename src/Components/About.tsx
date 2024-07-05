
const About = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:gap-x-10 w-full h-full  items-center justify-evenly gap-y-20 md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
            <div className='flex-1 flex flex-col items-center justify-center gap-y-10 h-full'>
                <div className='w-3/4 sm:w-128 3xl:w-176'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-fit'>
                        <img src="rik.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-sm' />
                        <img src="rik2.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-sm' />
                        <img src="rik3.jpg" alt="Profile" className='max-w-full max-h-full object-contain hidden sm:flex h-auto w-auto shadow-lg shadow-custom-black rounded-sm' />
                        <img src="rik4.jpg" alt="Profile" className='max-w-full max-h-full object-contain h-auto w-auto shadow-lg shadow-custom-black rounded-sm' />
                    </div>
                </div>
                <div className=' w-3/4 sm:w-128 3xl:w-176 flex justify-center'>
                    <div className='flex w-2/5 xs:w-full flex-row justify-center gap-x-10 items-start'>
                        <div className='flex flex-col w-1/2 h-1/2 gap-y-2'>
                            <img src="user.svg" alt="user" className='w-8 3xl:w-16' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-1">100 +</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Happy Customers</p>
                        </div>
                        <div className='flex flex-col w-1/2 h-1/2 gap-y-2'>
                            <img src="diamond.svg" alt="Diamond" className='w-8 3xl:w-14' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-1">5</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Years in the Business</p>
                        </div>
                        <div className='flex flex-col w-1/2 h-1/2 gap-y-2'>
                            <img src="trophy.svg.svg" alt="Trophy" className='w-8 3xl:w-16' />
                            <h3 className="text-custom-gold text-lg xs:text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl teko ml-2">3</h3>
                            <p className="text-white text-sm xs:text-xl sm:text-2xl 3xl:text-3xl ml-1">Certificates</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 lg:w-3/5  flex h-auto 3xl:h-full 2xl:h-176 items-start flex-col gap-y-5 justify-evenly '>
                <div className='border-t-2 border-white w-1/2 border-opacity-40'></div>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'> ABOUT ME</h1>
                <p className='text-white text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-semibold '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-col gap-y-5 mt-5">
                    <h1 className='text-2xl xs:text-3xl sm:text-5xl 2xl:text-7xl text-custom-gold teko '> CONTACTO</h1>
                    <div className='flex w-full flex-row justify-start gap-x-10'>
                        <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4  flex justify-center items-center'>
                            <img src="gmail.svg" alt="Gmail" className='w-1/2 h-1/2 grayscale' />
                        </button>
                        <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4  flex justify-center items-center'>
                            <img src="whatsapp.svg" alt="WhatsApp" className='w-1/2 h-1/2 grayscale' />
                        </button>
                        <button className='w-16 h-16 xs:w-20 xs:h-20 3xl:w-32 3xl:h-32 border-white border-opacity-50 border-4  flex justify-center items-center'>
                            <img src="instagram.svg" alt="Instagram" className='w-1/2 h-1/2 grayscale' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
