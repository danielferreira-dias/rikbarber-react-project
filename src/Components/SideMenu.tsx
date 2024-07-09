import React from 'react'

interface SideMenuProps {
    userIsLog: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ userIsLog }) => {
    return (
        <div className={`fixed flex-col w-12 lg:w-16 2xl:w-20 h-fit left-0 top-1/2 transform -translate-y-1/2 gap-y-1 z-50 ${userIsLog ? 'flex' : 'hidden'}`}>
            <div className='flex items-center justify-center w-full opacity-80 h-12 lg:h-16 2xl:h-20 bg-transparent rounded-r-lg transition duration-300 ease-in-out'>
                <img src="rik.jpg" alt="" className='w-full h-full object-cover rounded-r-lg' />
            </div>
            <div className='flex items-center justify-center w-full opacity-40 hover:opacity-100 hover:scale-105 h-12 lg:h-16 2xl:h-20 bg-custom-gold rounded-r-sm transition duration-300 ease-in-out'>
                <img src="agendar.svg" alt="" className='w-4/6 h-auto' />
            </div>
            <div className='flex items-center justify-center w-full opacity-40 hover:opacity-100 hover:scale-105 h-12 lg:h-16 2xl:h-20 bg-custom-gold rounded-r-sm transition duration-300 ease-in-out'>
                <img src="settings.svg" alt="" className='w-4/6 h-auto' />
            </div>
        </div>
    );
};

export default SideMenu;
