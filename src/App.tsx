
import Gallery from './Components/Gallery';
import { Navbar } from './Components/Navbar'
import Home from './Components/Home';
import Prices from './Components/Prices';
import About from './Components/About';
import SideMenu from './Components/SideMenu';

import { motion, useScroll, useSpring } from "framer-motion";

import React, { useEffect, useState } from 'react';


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [userIsLogged, setUserIsLogged] = useState(false)
  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      setUserIsLogged(true);
    }
  }, []);


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
    </div>
  )
}

export default App
