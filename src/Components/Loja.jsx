import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar';
import CardItem from './CardItem';


const Loja = () => {
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3050/api/products'); // Adjust the URL if needed
                if (Array.isArray(response.data)) {
                    setStoreItems(response.data);
                    console.log(storeItems)
                } else {
                    console.error('Expected an array of products, but got:', response.data);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div className='w-full h-full flex flex-col  bg-custom-black'>
            <Navbar></Navbar>
            <div className='h-96 md:h-128 lg:h-176  w-full bg-custom-black flex flex-col items-center justify-center'>
                <img src="rikblur.jpg" alt="" className='h-96 md:h-128 lg:h-176  w-full absolute object-cover' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>LOJA</h1>
                    <div className="flex flex-row items-baseline gap-x-2 w-5/6 sm:w-1/2 2xl:w-2/6 px-2 mb-5 z-10">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h2 className="text-white teko text-xl xs:text-2xl sm:text-4xl 2xl:text-5xl mb-5">Home : Loja</h2>
                        <div className="border-t-2 h-2 flex-1 ml-2 "></div>
                    </div>
                </div>
                <div className='bg-gradient-to-t from-custom-black opacity-90 to-transparent h-16 w-full relative bottom-0 '></div>
            </div>
            <div className='flex flex-col bg-custom-black px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44 my-20'>
                <h1 className=' text-4xl xs:text-5xl sm:text-6xl 2xl:text-8xl text-white z-10 teko '>OS MELHORES <span className='text-custom-gold'>PRODUTOS</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pc:grid-cols-4 items-center justify-start gap-5 my-10'>
                    {storeItems.map(item => (
                        <CardItem key={item._id} img={item.img} name={item.name} desc={item.desc} price={item.price} />
                    ))}
                </div>
                <div className='flex flex-row justify-center gap-x-20 items-center w-full h-16'>
                    <img src="arrow.svg" alt="" className={`w-12 h-12 2xl:w-8 2xl:h-8 rotate-180 `} />
                    <p className='text-neutral-600 text-xl xs:text-2xl sm:text-3xl  font-semibold  '>
                        Page
                    </p>
                    <img src="arrow.svg" alt="" className={`w-12 h-12 2xl:w-8 2xl:h-8  `} />
                </div>
            </div>
            <div className='h-80 md:h-96 2xl:h-128 3xl:h-128'>
                <img src="example_4.jpg" alt="" className='h-80 md:h-96 2xl:h-96 3xl:h-128 w-full absolute object-cover gra' />
                <div className='flex flex-col h-full items-center justify-center gap-y-2 w-full 2xl:mt-10'>
                    <a href="https://buk.pt/rickyspot19" className=' text-3xl xs:text-4xl sm:text-5xl 2xl:text-7xl text-white z-10 teko border-4 p-5 rounded-sm border-custom-gold'> MAKE AN APPOINTMENT </a>
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
    )
}

export default Loja
