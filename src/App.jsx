import { useState} from 'react'
import { useEffect } from 'react';
import './App.css'

import { initOrbitals } from '../orbitals/orbitals.js';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';


function App() {
  useEffect(() => {
    
    initOrbitals();
  }, []);

  const [clicked, setClicked] = useState(false);


 

  return (
    <>
      <div className='h-screen game-area js-game-area  flex flex-col items-center  '>
        <p className={`md:text-4xl text-xl animate-pulse     font-bold uppercase flex justify-around title ${clicked ? 'clicked' : ''}`}
          onClick={()=>setClicked(true)}>okirr.ai</p>
      {
       clicked &&( 
       
       <div className='flex flex-col md:gap-20 gap-8 items-center'>
        <div className='flex px-4 md:flex-row flex-col gap-8  md:text-left text-center  md:justify-between items-center'>
          <p style={{animationDelay:'1s'}} className='animate-fadeIn font-serif md:text-8xl text-4xl text-white mt-30 transition-opacity   '>Create original stories </p>
          <p style={{animationDelay:'2s'}} className='font-serif animate-fadeIn max-w-5xl   md:text-8xl text-4xl  text-white md:mt-30 '>Own your creative universe </p>

          

        </div> 
        <button style={{animationDelay:'3s'}} className="
            animate-fadeIn
            px-8 py-3 
            rounded-full 
            text-white 
            text-xl 
            font-semibold 
            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 
            shadow-[0_0_20px_rgba(150,0,255,0.6)]
            hover:shadow-[0_0_35px_rgba(200,0,255,0.8)]
            transition-all duration-300
            hover:scale-105
">
  <Link to ='dashboard'>Start Creating</Link>
</button>    
        
        </div>)

      } 
       

      

      </div>
    </>
  )

}
export default App
