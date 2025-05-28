import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutTypeCard from './components/WorkoutTypeCard'

function WorkoutType() {

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

          <div className='flex justify-top items-start gap-[32px]' >
            <div className="flex flex-col w-[50%] text-start gap-[12px]">
            <div className="flex-1">
              <h4 className="text-darkgray">2/2</h4>
              <h1>What do you feel like working on?</h1>
            </div>

            <a href="">
              <div className="flex mt-[32px] gap-[8px]">
                <img src="/icons/arrow-back.svg" alt="Arrow Back" />
                <h4 className="text-darkgray">Previous</h4>
              </div>
            </a>
          </div>
            <div className="grid grid-cols-2 gap-[12px] w-[50%]">
              <WorkoutTypeCard title='All In' type='Full Body'/>
              <WorkoutTypeCard title='Good Pump' type='Upper Body'/>
              <WorkoutTypeCard title='Engine Running' type='Lower Body'/>
              <WorkoutTypeCard title="Let's Sweat" type='Cardio HIIT'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkoutType
