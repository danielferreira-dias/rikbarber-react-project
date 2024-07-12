
import Gallery from './Components/Gallery.jsx';
import { Navbar } from './Components/Navbar'
import Home from './Components/Home';
import Prices from './Components/Prices.jsx';
import About from './Components/About.jsx';
import SideMenu from './Components/SideMenu.jsx';

import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from 'react';

import { checkToken, authenticateToken } from '../server/utilities/JWTFunction.js';



function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [userIsLogged, setUserIsLogged] = useState(false)
  checkToken(setUserIsLogged);

  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <SideMenu userIsLog={userIsLogged} />
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 progress-bar bg-red-500"
        style={{ scaleX }} />

      <section className="w-full h-screen flex justify-center items-center bg-transparent">
        <Home />
      </section>

      <section className='w-full bg-zinc-950 h-fit py-10 flex justify-evenly items-center flex-col md:flex-row md:justify-center gap-y-4 md:gap-x-8 md:py-20'>
        <Gallery />
      </section>

      <section className='w-full h-fit flex flex-col justify-start items-center'>
        <Prices />
      </section>

      <section className='w-full bg-custom-black h-fit  py-10 flex flex-col  justify-center items-center'>
        <About />
      </section>

      <footer className='h-128 bg-white flex md:gap-x-5 py-5 px-5 xs:px-10 sm:px-14 2xl:py-10'>

      </footer>
    </div>
  )
}

export default App
