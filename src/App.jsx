import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DurationCard from './components/DurationCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col gap-[64px] items-center justify-center max-w-[800px] w-full pb-[10vh]">

        <div className="flex flex-col gap-[24px] max-w-[500px] items-center justify-center">
          <h2>Minimal Workouts</h2>
          <p className="text-darkgray">Our minimal workouts are designed to energize you anytime, anywhere with no equipment. For best results, we recommend doing a session every other day, at least three times a week.</p>
          <div className="flex gap-[32px] items-center justify-center">
            <button className="link-button">All Workouts</button>
            <button className="link-button">Past Workouts</button>
            <button className="link-button">Pricing</button>
            <button className="link-button">Log In</button>
          </div>
        </div>

        <div className='h-[1px] bg-lightgray w-full max-w-[800px]'></div>

        <div className='flex justify-top items-start gap-[32px]'>
          <div className='flex flex-col items-start justify-center w-[50%] text-start gap-[12px]'>
            <h4 className='text-darkgray'>1/2</h4>
            <h1>How long can you workout today?</h1>
          </div>
          <div className="grid grid-cols-2 gap-[12px] w-[50%]">
            <DurationCard title='Energizer' duration='10'/>
            <DurationCard title="Get Movin'" duration='20'/>
            <DurationCard title="Just Enough" duration='30'/>
            <DurationCard title="Full Session" duration='40'/>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
