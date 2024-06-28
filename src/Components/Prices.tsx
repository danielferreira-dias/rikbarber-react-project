import React from 'react'

const Prices = () => {
    return (
        <div className='h-fit flex flex-col md:flex-row md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 gap-y-5'>
            <div className='flex flex-col h-1/2 gap-y-10 md:w-1/2 py-5'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>
                        OUR <span className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold teko'>PRICES</span>
                    </h1>
                    <div className='h-1 border-b-2 border-custom-gold w-1/6 my-5'></div>
                    <p className='text-neutral-400 text-lg xs:text-xl sm:text-2xl'>
                        Our services spectrum encompasses many techniques and procedures, from straight hairstyling to face care.
                    </p>
                </div>
                <div className='flex flex-col mt-10 text-2xl'>
                    <ul className='teko-secondary text-white flex flex-col gap-y-5'>
                        <li className='flex justify-between border-b-2 pb-5'>
                            <p className='w-fit'>HAIRCUT</p>
                            <p className='w-fit text-emerald-700'>40$</p>
                        </li>
                        <li className='flex justify-between border-b-2 pb-5'>
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
            <div className='w-full md:w-1/2 flex flex-col justify-center md:text-left md:justify-evenly md:items-start teko'>
                <img
                    src="tools.jpg"
                    alt="Barber tools"
                    className='w-full h-72 object-cover border-custom-gold border-2'
                />
                <div className='flex flex-row md:flex-col justify-between mt-10 gap-x-2 md:gap-y-2 md:mt-2'>
                    <h1 className=' text-2xl xs:text-3xl sm:text-4xl 2xl:text-6xl w-2/3 text-white'>PESQUISA SOBRE OS MEUS <span className='text-custom-gold'>SERVIÇOS</span></h1>
                    <button className='w-32 h-16 md:w-44 2xl:w-64 2xl:h-28 bg-custom-gold bg-opacity-80 border-white border-2'>
                        <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold'>Serviços</a>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Prices
