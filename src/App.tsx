import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <section className='w-full bg-zinc-900 h-screen flex justify-center items-center'>
        <div className="text-white">First Section</div>
      </section>
      <section className='w-full bg-white h-screen flex justify-center items-center'>
        <div className="text-black">Second Section</div>
      </section>
    </div>
  )
}

export default App
