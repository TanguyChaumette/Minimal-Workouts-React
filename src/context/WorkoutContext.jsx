import { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState({
    currentExercise: 0,
    totalWorkout: 0,
  });

  const value = {
    selectedDuration,
    setSelectedDuration,
    selectedType,
    setSelectedType,
    currentStep,
    setCurrentStep,
    timeRemaining,
    setTimeRemaining,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
  };

  return (
    <WorkoutContext.Provider value={value}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
}; 