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
        <div className='flex flex-col w-full items-center justify-center'>
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
    );
};

export default MyCalendar;