import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutTypeCard from './components/WorkoutTypeCard'

function App() {

  return (
    <>

      <img src="/images/bg-workout.jpg" alt="Workout" className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"/>

      <h1 className='absolute mt-[32px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Jumping Jacks</h1>

      <div className='absolute mt-[16px] ml-[16px]'>
        <div className='border-[4px] border-darkgray h-[140px] w-[140px] flex justify-center items-center'>
          <h1 className="text-[48px]">
            0
          </h1>
        </div>
      </div>
        
      <div className="flex gap-[16px] absolute  right-1 bottom-0 mb-[64px] mr-[32px]">
        <img src="/icons/music.svg" alt="Music" />
        <img src="/icons/sound.svg" alt="Sound" />
      </div>

      <div className="flex flex-col gap-[16px] absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[32px]">
        <div className="flex justify-center items-center gap-[16px]">
          <img src="/icons/pause.svg" alt="Pause" />
          <div className='h-[4px] w-[400px] bg-darkgray'></div>
          <img src="/icons/next.svg" alt="Next" />
        </div>
        <h2 className='text-[24px] mt-[-16px]'>0%</h2>
      </div>
      
    </>
  )
}

export default App
