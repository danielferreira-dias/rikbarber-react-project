import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CustomCalendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        // Handle date selection logic here
        console.log('Selected date:', date);
    };

    return (
        <div className='flex flex-col w-full h-full items-center justify-start'>
            <Calendar
                onChange={onChange}
                value={date}
            />
            <div className='grid grid-cols-3 gap-4 w-full sm:w-5/6 xl:w-[100%] mt-10 '>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary '>
                    9:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    10:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    11:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    12:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    14:30h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    15:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    16:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    17:00h
                </button>
                <button className='rounded-md p-2 h-16 flex justify-center items-center text-xl lg:text-3xl font-semibold bg-white teko-secondary'>
                    18:00h
                </button>
            </div>
        </div>
    );
};

export default MyCalendar;