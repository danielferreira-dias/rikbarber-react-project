import { useState } from 'react';



const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuItems = [
        { id: 1, label: 'Menu 1' },
        { id: 2, label: 'Menu 2' },
        { id: 3, label: 'Menu 3' },
        { id: 4, label: 'Menu 4' },
        { id: 5, label: 'Menu 5' },
    ];

    return (
        <>
            <div className="h-14 lg:h-20 xl:h-28 2xl:h-32 bg-zinc-950 sticky lg:relative top-0 z-50">
                <div className='px-10 lg:px-20 xl:px-32 2xl:px-52 flex justify-between items-center h-full'>
                    <div className='h-14 w-32 xl:w-72'>
                        <img src="https://cutstyle.true-emotions.studio/dark-beard/wp-content/uploads/sites/4/2018/08/logo-db2.svg" alt="Logo" className='h-14 w-24 lg:h-18 lg:w-32 xl:w-72' />
                    </div>
                    <div className='hidden lg:flex '>
                        {menuItems.map(item => (
                            <div key={item.id} className="py-5 text-white font-semibold text-xl xl:text-2xl ">
                                <a href="" className='p-5'>{item.label}</a>
                            </div>
                        ))}
                    </div>
                    <div className='lg:hidden'>
                        <svg onClick={toggleMenu} className="h-10 w-fit cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
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
            <div className={`fixed top-14 right-0 h-svh bg-neutral-800 text-white font-semibold shadow-lg p-4 z-40 w-2/3 xs:w-80 transition ease-in-out delay-150 duration-300 overflow-scroll ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.id} className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                            <a href="" className='p-5'>{item.label}</a>
                        </li>
                    ))}
                    <li className="py-5">
                        <a href="" className='p-5'>Menu 6</a>
                    </li>
                </ul>
            </div>
        </>
    );
}


export { Navbar };
