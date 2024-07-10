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
            <div className='relative z-10 w-full min-h-screen flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-start mt-20 sm:mt-24 md:mt-24 lg:mt-20 xl:mt-24 2xl:mt-24 pc:mt-32 z-10'>
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
                <div className='flex flex-col lg:flex-row lg:mb-10 lg:px-10 gap-x-10'>
                    <div className='flex-grow flex items-start justify-center z-10 pt-10 w-full lg:w-4/6 xl:w-4/6 2xl:w-4/6 pc:w-4/6 lg:mt-10 lg:pt-0'>
                        <MyCalendar />
                    </div>
                    <div className='w-full lg:mt-10 lg:w-4/6 xl:w-3/6 2xl:w-2/6 bg-custom-black mt-10 rounded-t-2xl lg:rounded-xl flex items-center p-10'>
                        <div className='flex flex-grow flex-col items-center justify-start mt-10 z-10  my-10 '>
                            <div className='flex flex-col items-center justify-center gap-y-5'>
                                <div className='flex flex-row gap-x-5'>
                                    <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-6xl text-white teko'>
                                        Schedule Resume
                                    </h1>
                                </div>
                                <div className='border-custom-gold border-b-2 w-1/5 mt-2'></div>
                                <h2 className='text-white teko text-xl xs:text-3xl md:text-4xl 2xl:text-5xl '>
                                    Your schedule details
                                </h2>
                                <form className="space-y-5 w-full pb-5">
                                    <div className="w-full">
                                        <label
                                            htmlFor="Name"
                                            className="text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="Name"
                                            name="Name"
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="Email"
                                            className="text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="Email"
                                            name="Email"
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            htmlFor="Service"
                                            className="text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary"
                                        >
                                            Serviço
                                        </label>
                                        <select
                                            id="Service"
                                            name="Service"
                                            className="w-full px-3 py-2 border rounded-md"
                                        >
                                            <option value="Corte">Corte</option>
                                            <option value="Barba">Barba</option>
                                            <option value="Corte e Barba">Corte e Barba</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white py-2 px-4 rounded-md transition-colors 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl bg-neutral-800 teko-secondary"
                                    >
                                        Agendar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Schedule;