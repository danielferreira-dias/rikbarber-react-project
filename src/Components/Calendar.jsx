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
            <div className='w-5/6 xl:w-4/6 pc:w-5/6  h-16 bg-white mt-5 rounded-xl border-2 border-gray-200 flex items-center'>
                <p className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary ml-4 text-opacity-60'>Your hour will appear here.</p>
            </div>
        </div>
    );
};

export default MyCalendar;