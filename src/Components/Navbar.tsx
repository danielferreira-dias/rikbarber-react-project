import { useState } from 'react';



const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuItems = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'Sobre' },
        { id: 3, label: 'Galeria' },
        { id: 4, label: 'Serviços' },
        { id: 5, label: 'Agendar' },
    ];

    return (
        <>
            <div className="h-navBar bg-zinc-950 bg-opacity-95 sticky lg:relative top-0 z-50 text-lg lg:text-xl xl:text-2xl items-center">
                <div className='px-6 lg:px-20 xl:px-30 2xl:px-44 3xl:px-32 pc:px-44 flex justify-between items-center h-full'>
                    <img src="https://cutstyle.true-emotions.studio/dark-beard/wp-content/uploads/sites/4/2018/08/logo-db2.svg" alt="Logo" className='h-fit w-32 2xl:w-44 pc:w-52' />
                    <div className='hidden md:flex gap-x-2 teko text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl items-center h-fit w-70'>
                        {menuItems.map(item => (
                            <div key={item.id} className="py-5 text-white font-semibold hover:transform hover:scale-105 transition-transform">
                                <a href="" className='p-4 lg:p-2 2xl:p-3 3xl:p-5'>{item.label}</a>
                            </div>
                        ))}
                        <a href="" className='text-white font-semibold py-5 p-4 lg:px-2 2xl:px-3 3xl:px-5 hover:transform hover:scale-105 transition-transform'>Contactos</a>
                        <a href="" className='font-semibold mb-2 ml-5 3xl:mb-3 pc:mb-5 lg:px-2 2xl:px-3 3xl:px-5 hover:transform hover:scale-105 transition-transform'>
                            <img src="login.svg" alt="" className='w-8 lg:w-8 3xl:w-12 pc:w-14' />
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <svg onClick={toggleMenu} className="h-12 w-fit cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
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
            <div className={`fixed text-lg lg:text-xl xl:text-2xl md:hidden  right-0 h-screen bg-neutral-800 text-white font-semibold shadow-lg p-2 py-0 z-40 w-2/3 xs:w-80 transition ease-in-out delay-150 duration-300 overflow-auto ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className='py-3 teko text-2xl'>
                    {menuItems.map(item => (
                        <li key={item.id} className="py-2 border-b-2  border-neutral-900 border-opacity-30 hover:transform hover:scale-105 transition-transform">
                            <a href="#" className="p-4 block">{item.label}</a>
                        </li>
                    ))}
                    <li className="py-2 hover:transform hover:scale-105 transition-transform border-b-2  border-neutral-900 border-opacity-30">
                        <a href="#" className="p-4 block ">Contactos</a>
                    </li>
                    <li className="py-2 hover:transform hover:scale-105 transition-transform text-custom-gold">
                        <a href="#" className="p-4 block ">Iniciar Sessão</a>
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
