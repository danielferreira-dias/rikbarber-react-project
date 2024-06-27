
const Navbar = () => {
    return (
        <div className="h-14 bg-zinc-950 sticky top-0 z-50 px-5">
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='h-14 w-32'>
                    <img src="https://cutstyle.true-emotions.studio/dark-beard/wp-content/uploads/sites/4/2018/08/logo-db2.svg" alt="" className='h-14 w-24' />
                </div>
                <div>
                    <svg className="h-10 w-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
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
    );
}

export default Navbar
