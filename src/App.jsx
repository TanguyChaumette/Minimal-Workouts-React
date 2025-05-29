import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WorkoutProvider } from './context/WorkoutContext';
import Home from './components/Home';
import WorkoutType from './components/WorkoutType';
import Workout from './components/Workout';
import Complete from './components/Complete';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutTypeCard from './components/WorkoutTypeCard'
import DurationCard from './components/DurationCard'

function App() {
  return (
    <Router>
      <WorkoutProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type" element={<WorkoutType />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}

export default App
