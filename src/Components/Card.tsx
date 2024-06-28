import React from 'react';

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
    return (
        <div className='bg-orange-500 h-full w-[200px] sm:w-[300px] md:w-[400px] rounded-lg flex-shrink-0'>
            <img src={image} alt={image} className='w-full h-full object-cover rounded-lg' />
        </div>
    );
};

export default Card;