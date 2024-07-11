import React, { useEffect } from 'react';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";

import { checkToken, authenticateToken } from '../../server/utilities/JWTFunction';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Loader from './Loader';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();



    const menuItems = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'Sobre', path: '/Sobre' },
        { id: 3, label: 'Galeria', path: '/Galeria' },
        { id: 4, label: 'Serviços', path: '/Serviços' },
        { id: 5, label: 'Agendar', path: '/Schedule' },
        { id: 6, label: 'Contactos', path: '/Contactos' },
    ];

    const [userIsLogged, setUserIsLogged] = useState(false);
    checkToken(setUserIsLogged);

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000); // Loader duration
        };

        handleRouteChange(); // Initial call
    }, [location]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <>
            {loading && <Loader />}
            <div className="h-16 xl:h-20 2xl:h-20 pc:h-28 md:absolute fixed bg-custom-black bg-opacity-60 w-full top-0 z-50 text-lg lg:text-xl xl:text-2xl items-center">
                <div className='px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44 flex justify-between items-center h-full w-full'>
                    <img src="https://cutstyle.true-emotions.studio/dark-beard/wp-content/uploads/sites/4/2018/08/logo-db2.svg" alt="Logo" className='h-fit w-32 xl:w-44 2xl:w-44 pc:w-64' />
                    <div className='hidden md:flex gap-x-2 teko text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl items-center h-fit w-70'>
                        {menuItems.map(item => (
                            <Link key={item.id} to={item.path} className='text-white font-semibold py-5 p-4 lg:px-2 2xl:px-3 3xl:px-5 hover:transform hover:scale-105 transition-transform'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden h-12 w-12 relative'>
                        <svg onClick={toggleMenu} className="h-12 w-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`fixed text-lg top-16 md:hidden -right-0 h-screen bg-neutral-800 text-white font-semibold shadow-lg p-2 py-0 z-40 w-full xs:w-80 transition ease-in-out delay-150 duration-300 overflow-auto ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='py-3 teko text-2xl'>
                    {menuItems.map(item => (
                        <li key={item.id} className="py-2 border-b-2 border-neutral-900 border-opacity-30 hover:transform hover:scale-105 transition-transform">
                            <Link to={item.path} className="p-4 block">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="py-2 hover:transform hover:scale-105 transition-transform text-custom-gold">
                        {userIsLogged ? (
                            <Link to={'/Login'} className="p-4 block">
                                Terminar Sessão
                            </Link>
                        ) : (
                            <Link to={'/Login'} className="p-4 block">
                                Iniciar Sessão
                            </Link>
                        )}
                    </li>
                    <li className="py-2 hover:transform hover:scale-105 transition-transform">
                        <a href="#" className="p-4 block"></a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export { Navbar };
