import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';
import CardItem from './CardItem';

const Loja = () => {
    const [storeItems, setStoreItems] = useState([]);
    const [recentItems, setRecentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3050/api/products'); // Adjust the URL if needed
                if (Array.isArray(response.data)) {
                    setStoreItems(response.data);
                    setRecentItems(response.data.slice(-2)); // Get the last 2 items from the array
                } else {
                    console.error('Expected an array of products, but got:', response.data);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = storeItems.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage * itemsPerPage < storeItems.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className='w-full h-full flex flex-col bg-custom-black'>
            <Navbar />
            <div className='h-96 md:h-128 lg:h-176 w-full bg-custom-black flex flex-col items-center justify-center'>
                <img src="rikblur.jpg" alt="" className='h-96 md:h-128 lg:h-176 w-full absolute object-cover' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko'>LOJA</h1>
                    <div className="flex flex-row items-baseline gap-x-2 w-5/6 sm:w-1/2 2xl:w-2/6 px-2 mb-5 z-10">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h2 className="text-white text-xl xs:text-2xl sm:text-4xl 2xl:text-5xl mb-5">Home : Loja</h2>
                        <div className="border-t-2 h-2 flex-1 ml-2"></div>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-custom-black opacity-90 to-transparent h-16 w-full relative bottom-0'></div>
            </div>
            <div className='flex flex-col px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44 my-20'>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko my-20'>OS MELHORES <span className='text-custom-gold'>PRODUTOS</span></h1>
                <div className='flex flex-col 2xl:flex-row'>
                    <div className='flex flex-col w-full bg-custom-black 2xl:w-4/6'>
                        <div className='flex flex-row flex-wrap items-center justify-center self-center gap-5 my-10'>
                            {currentItems.map(item => (
                                <CardItem key={item._id} img={item.img} name={item.name} desc={item.desc} price={item.price} />
                            ))}
                        </div>
                        <div className='flex flex-row justify-center gap-x-20 items-center w-full h-16'>
                            <img
                                src="arrow.svg"
                                alt=""
                                className={`w-12 h-12 2xl:w-8 2xl:h-8 rotate-180 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                onClick={handlePrevPage}
                            />
                            <p className='text-neutral-600 text-xl xs:text-2xl sm:text-3xl font-semibold'>
                                Page {currentPage}
                            </p>
                            <img
                                src="arrow.svg"
                                alt=""
                                className={`w-12 h-12 2xl:w-8 2xl:h-8 ${currentPage * itemsPerPage >= storeItems.length ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                onClick={handleNextPage}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row flex-wrap 2xl:flex-col gap-2 items-center xl:items-start'>
                        <div className='flex flex-col mt-20 px-5 2xl:w-2/6 2xl:mt-10 w-full sm:w-128 h-fit'>
                            <div className='w-full sm:w-128 h-fit p-10 bg-custom-gray rounded-sm flex flex-col items-center justify-center gap-y-6  px-10 text-center'>
                                <h1 className=' text-3xl xs:text-3xl sm:text-4xl  text-white z-10 teko mb-10'>Recent Products Added</h1>
                                {recentItems.map(item => (
                                    <div className='flex flex-col justify-start  h-44 w-full' key={item._id}>
                                        <div className='flex flex-col sm:flex-row items-center w-full h-44'>
                                            <img src={item.img} alt={item.name} className='w-44 h-44' />
                                            <div className='flex flex-col'>
                                                <p className='text-3xl xs:text-xl sm:text-2xl text-white z-10 teko'>{item.name}</p>
                                                <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl font-bold'>
                                                    {item.price} EUR
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col mt-20 px-5 2xl:w-2/6 2xl:mt-10'>
                            <div className='w-full sm:w-128 h-96 p-10 bg-custom-gray rounded-sm flex flex-col items-center justify-start gap-y-6  px-10 text-center'>
                                <h1 className=' text-3xl xs:text-3xl sm:text-4xl  text-white z-10 teko mb-10'>TAGS</h1>
                                <div className='flex flex-col justify-start w-full'>
                                    <div className='flex flex-row flex-wrap gap-x-5  items-center'>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #BALM
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #BEARD
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #BRUSH
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #CARE
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #CREAM
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #HAIR
                                        </p>
                                        <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                            #MOISTURIZING
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col mt-20 px-5 2xl:w-2/6 2xl:mt-10'>
                            <div className='w-full sm:w-128 h-fit p-10 bg-custom-gray rounded-sm flex flex-col items-center justify-center gap-y-6  px-10 text-center border-2 border-custom-gold'>
                                <h1 className=' text-3xl xs:text-3xl sm:text-4xl  text-white z-10 teko mb-10'>Best Selling Product</h1>
                                <div className='flex flex-col justify-start w-full'>
                                    <div className='flex flex-col sm:flex-row  items-center'>
                                        <img src='herbalessenceoil.jpg' alt="Hair" className='w-44 h-auto' />
                                        <div className='flex flex-col'>
                                            <p className=' text-3xl xs:text-xl sm:text-2xl  text-white z-10 teko'>Herbal Essence Oil</p>
                                            <p className='text-custom-gold text-lg xs:text-xl sm:text-2xl  font-bold  '>
                                                50.00 EUR
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-80 md:h-96 2xl:h-128 3xl:h-128 mt-20'>
                <img src="example_4.jpg" alt="" className='h-80 md:h-96 2xl:h-96 3xl:h-128 w-full absolute object-cover gra' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <a href="https://buk.pt/rickyspot19" className='text-3xl xs:text-4xl sm:text-5xl 2xl:text-7xl text-white z-10 teko border-4 p-5 rounded-sm border-custom-gold'>MAKE AN APPOINTMENT</a>
                </div>
            </div>
            <div className='flex flex-col'>
                <img src="border.a8ad40c0.png" alt="" className='w-full h-16' />
                <footer className='h-40 bg-white flex md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>
                    <div className='flex flex-col pb-3 w-full items-center gap-y-2'>
                        <img src="instagram.svg" alt="" className='w-12 grayscale' />
                        <div className='flex flex-col w-full items-center'>
                            <p>© Copyright 2024. All rights reserved</p>
                            <p className='font-bold'>Made by Daniel Dias</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Loja;