import React, { useState } from 'react'

interface SideMenuProps {
    userIsLog: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ userIsLog }) => {
    const [menuVisible, setMenuVisible] = useState(true)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <div className={`fixed flex-row w-fit lg:w-18 2xl:w-22 h-fit left-0 top-1/2 transform -translate-y-1/2 gap-x-1 z-50 transition ease-in-out delay-150 duration-500 ${userIsLog ? 'flex' : 'hidden'} ${menuVisible ? 'translate-x-0' : '-translate-x-12 lg:-translate-x-16 2xl:-translate-x-20'}`}>
            <div className='w-12 lg:w-16 2xl:w-20 flex flex-col gap-y-1'>
                <div className='flex items-center justify-center w-12 lg:w-16 2xl:w-20 h-12 lg:h-16 2xl:h-20 bg-transparent rounded-r-lg transition duration-300 ease-in-out'>
                    <img src="rik.jpg" alt="" className='w-full h-full object-cover rounded-r-lg' />
                </div>
                <div className='flex items-center justify-center w-12 lg:w-16 2xl:w-20 opacity-40 hover:opacity-100 hover:scale-105 h-12 lg:h-16 2xl:h-20 bg-custom-gold rounded-r-sm transition duration-300 ease-in-out'>
                    <img src="agendar.svg" alt="" className='w-4/6 h-auto' />
                </div>
                <div className='flex items-center justify-center w-12 lg:w-16 2xl:w-20 opacity-40 hover:opacity-100 hover:scale-105 h-12 lg:h-16 2xl:h-20 bg-custom-gold rounded-r-sm transition duration-300 ease-in-out'>
                    <img src="settings.svg" alt="" className='w-4/6 h-auto' />
                </div>
            </div>
            <div className={`bg-custom-gold w-5 2xl:w-8 flex items-center justify-center rounded-r-lg  `} onClick={toggleMenu}>
                <img src="arrow.svg" alt="" className={`w-5 h-5 2xl:w-8 2xl:h-8 transition ease-in-out delay-150 duration-500 ${menuVisible ? 'rotate-180' : 'rotate-0'}`} />
            </div>
        </div>
    );
};

export default SideMenu;
