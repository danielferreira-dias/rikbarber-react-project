import React from 'react'

interface SideMenuProps {
    userIsLog: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ userIsLog }) => {
    console.log(userIsLog);
    return (
        <div className={`fixed flex-col w-12 h-fit left-0 top-1/2 transform -translate-y-1/2 gap-y-1 z-50 ${userIsLog ? 'flex' : 'hidden'}`}>
            <div className='flex items-center justify-center w-full h-12 bg-custom-gold rounded-r-sm'></div>
            <div className='flex items-center justify-center w-full h-12 bg-custom-gold rounded-r-sm'></div>
            <div className='flex items-center justify-center w-full h-12 bg-custom-gold rounded-r-sm'></div>
        </div>
    );
};

export default SideMenu;
