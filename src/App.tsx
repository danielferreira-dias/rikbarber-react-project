import './App.css'

import Gallery from './Components/Gallery';
import { Navbar } from './Components/Navbar'
import Home from './Components/Home';

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <Navbar />
      <motion.div
        className="fixed bottom-0 left-0 right-0 progress-bar bg-red-500"
        style={{ scaleX }} />

      <section className="w-full h-screen flex justify-center items-center bg-transparent">
        <Home />
      </section>

      <section className='w-full bg-zinc-950 h-screen flex justify-evenly items-center flex-col md:flex-row md:justify-center md:gap-x-8'>
        <Gallery />
      </section>

      <section className='w-full bg-zinc-900 h-screen flex justify-center items-center'>
        <div className="text-white">Third Section</div>
      </section>

    </div>
  )
}

export default App
