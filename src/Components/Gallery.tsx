import React, { useEffect, useRef } from 'react';
import Card from './Card';

const Gallery: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollSpeed = 2; // Adjust the speed as needed

    const images = [
        "exame_1.jpg",
        "example_2.jpg",
        "example_3.jpg",
        "example_4.jpg",
    ];

    // Duplicate the images array to create a seamless loop
    const duplicatedImages = [...images, ...images];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const scrollInterval = setInterval(() => {
                scrollContainer.scrollLeft += scrollSpeed;
                // If the scroll reaches the end of the first set, reset to the start of the first set
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }, 30); // Adjust the interval as needed

            return () => clearInterval(scrollInterval);
        }
    }, [scrollSpeed]);

    return (
        <>
            <div className='flex flex-col text-white md:hidden teko'>
                <h1 className=' text-4xl px-5 xs:text-5xl sm:text-6xl 2xl:text-8xl w-2/3'>DESCOBRE O MEU <span className='text-custom-gold'>TRABALHO</span></h1>
            </div>
            <div className='h-[50vh] w-full overflow-hidden flex items-center md:w-2/3'>
                <div className=' w-1/6 2xs:w-1/5 h-[50vh] absolute z-10 opacity-80 bg-gradient-to-r from-gray-950 to-transparent '></div>
                <div className=' w-1/6 2xs:w-1/5 h-[50vh] absolute z-10 right-0 opacity-80 bg-gradient-to-r from-transparent to-gray-950 md:hidden '></div>
                <div className='flex flex-row items-center justify-start gap-x-2 overflow-x-auto no-scrollbar h-full' ref={scrollContainerRef}>
                    {duplicatedImages.map((image, index) => (
                        <Card key={index} image={image} />
                    ))}
                </div>
            </div>
            <div className='hidden md:flex md:flex-col text-white teko h-[50vh]'>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl'>DESCOBRE</h1>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl'>O MEU</h1>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-custom-gold'>TRABALHO</h1>
            </div>
        </>
    );
};

export default Gallery;