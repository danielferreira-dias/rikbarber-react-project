import { useState } from 'react';



const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <div className="h-14 bg-zinc-950 sticky top-0 z-50 px-5 flex justify-between items-center">
                <div className='h-14 w-32'>
                    <img src="https://cutstyle.true-emotions.studio/dark-beard/wp-content/uploads/sites/4/2018/08/logo-db2.svg" alt="Logo" className='h-14 w-24' />
                </div>
                <div>
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
            <div className={`fixed top-14 right-0 h-svh bg-neutral-800 text-white font-semibold shadow-lg p-4 z-40 w-2/3 xs:w-80 transition ease-in-out delay-150 duration-300 overflow-scroll ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul>
                    <li className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                        <a href="" className='p-5'>Menu 1</a>
                    </li>
                    <li className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                        <a href="" className='p-5'>Menu 2</a>
                    </li>
                    <li className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                        <a href="" className='p-5'>Menu 3</a>
                    </li>
                    <li className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                        <a href="" className='p-5'>Menu 4</a>
                    </li>
                    <li className="py-5 border-b-2 border-neutral-900 border-opacity-30">
                        <a href="" className='p-5'>Menu 5</a>
                    </li>
                    <li className="py-5">
                        <a href="" className='p-5'>Menu 6</a>
                    </li>
                </ul>
            </div>
        </>
    );
}


export { Navbar };
