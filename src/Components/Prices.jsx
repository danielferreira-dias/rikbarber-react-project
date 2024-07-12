
const Prices = () => {
    return (
        <div className='h-full flex flex-col md:flex-row'>
            <div className='flex flex-col bg-zinc-900 h-1/2 md:h-auto gap-y-10 md:w-1/2 py-5 pb-20 md:py-5 md:justify-evenly md:gap-x-5 px-5 xs:px-10 sm:px-14'>
                <div className='flex flex-col gap-y-10'>
                    <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>
                        OUR <span className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>PRICES</span>
                    </h1>
                    <div className='h-1 border-b-2 border-custom-gold w-1/6 my-5'></div>
                    <p className='text-neutral-400 text-lg xs:text-xl sm:text-2xl xl:text-3xl'>
                        Our services spectrum encompasses many techniques and procedures, from straight hairstyling to face care.
                    </p>
                </div>
                <div className='flex flex-col mt-10 text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl'>
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
            <div className='w-full md:w-1/2 flex flex-col justify-center md:text-left md:justify-start md:items-start  bg-custom-black md:gap-x-5 px-5 xs:px-10 sm:px-14 '>
                <img src="tools.jpg" alt="Barber tools" className='w-full h-96 2xl:h-128 object-cover border-custom-gold border-2'
                />
                <div className='flex flex-col md:flex-col justify-between mt-10 gap-x-2 md:gap-y-2 px-2 w-full'>
                    <h1 className=' text-2xl xs:text-3xl sm:text-4xl 2xl:text-6xl w-2/3 teko text-white'>PESQUISA SOBRE OS MEUS <span className='text-custom-gold'>SERVIÇOS</span></h1>
                    <div className='flex flex-col sm:flex-row gap-y-5 w-full items-center justify-center my-10 gap-x-2'>
                        <div className='flex w-3/4 h-72 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 border-2 border-white border-opacity-30 flex-col items-center justify-center gap-y-5 px-10 md:px-5'>
                            <img src="beard.svg" alt="" className='w-12 md:w-8 lg:w-14 xl:w-20' />
                            <p className='text-white text-sm md:text-xs lg:text-sm xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='flex w-3/4 h-72 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 border-2 border-white border-opacity-30 flex-col items-center justify-center gap-y-5 px-10 md:px-5'>
                            <img src="hair.svg" alt="" className='w-10 md:w-6 lg:w-12 xl:w-16' />
                            <p className='text-white text-sm md:text-xs lg:text-sm xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
