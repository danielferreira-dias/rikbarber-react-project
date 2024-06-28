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
        <div className='h-[50vh] w-full overflow-hidden flex items-center'>
            <div className='flex flex-row items-center justify-start gap-x-2 overflow-x-auto no-scrollbar h-full' ref={scrollContainerRef}>
                {duplicatedImages.map((image, index) => (
                    <Card key={index} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;