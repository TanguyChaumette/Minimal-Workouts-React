import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWorkout } from '../context/WorkoutContext';
import { workoutTypes } from '../data/workoutData';
import SquareTimer from './SquareTimer';

// Custom hook for sound handling
const useSound = (soundUrl) => {
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const isLoadedRef = useRef(false);

  const initializeAudio = useCallback(async () => {
    if (!isLoadedRef.current) {
      try {
        // Create audio context
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        
        // Fetch and decode audio file
        const response = await fetch(soundUrl);
        const arrayBuffer = await response.arrayBuffer();
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
        isLoadedRef.current = true;
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    }
  }, [soundUrl]);

  const playSound = useCallback(async () => {
    if (!isLoadedRef.current) {
      await initializeAudio();
    }

    try {
      if (audioContextRef.current && audioBufferRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start(0);
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [initializeAudio]);

  // Initialize audio on mount
  useEffect(() => {
    initializeAudio();
    
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [initializeAudio]);

  return playSound;
};

const Workout = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const playCountdown = useSound('/sounds/countdown-3s.mp3');
  
  const {
    selectedDuration,
    selectedType,
    currentStep,
    setCurrentStep,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress
  } = useWorkout();

  const [timeRemaining, setTimeRemaining] = useState(0);

  // Get current workout data
  const workout = selectedType && selectedDuration ? 
    workoutTypes[selectedType].workouts[selectedDuration] : null;

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Calculate total workout duration and progress
  const calculateWorkoutProgress = (currentStepIndex, currentTimeRemaining) => {
    if (!workout) return 0;
    
    const totalDuration = workout.steps.reduce((sum, step) => sum + step.duration, 0);
    const completedDuration = workout.steps.slice(0, currentStepIndex).reduce((sum, step) => sum + step.duration, 0);
    const currentProgress = workout.steps[currentStepIndex].duration - currentTimeRemaining;
    
    return ((completedDuration + currentProgress) / totalDuration) * 100;
  };

  // Update video when exercise changes
  useEffect(() => {
    if (videoRef.current && workout) {
      videoRef.current.load(); // Reload video when source changes
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentStep, workout]);

  // Redirect if no workout selected and initialize workout
  useEffect(() => {
    if (!workout) {
      navigate('/');
      return;
    }
    // Initialize first exercise and start playing
    setCurrentStep(0);
    setTimeRemaining(workout.steps[0].duration);
    setIsPlaying(true);
  }, [workout, navigate]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 1;

          // Play countdown sound at exactly 3 seconds
          if (newTime === 3) {
            playCountdown();
          }

          // Handle exercise completion
          if (newTime <= 0) {
            if (currentStep < workout.steps.length - 1) {
              const nextStep = currentStep + 1;
              setCurrentStep(nextStep);
              setTimeRemaining(workout.steps[nextStep].duration);
            } else {
              navigate('/complete');
            }
            return 0;
          }

          // Update both exercise and workout progress
          const currentExercise = ((workout.steps[currentStep].duration - newTime) / workout.steps[currentStep].duration) * 100;
          const totalProgress = calculateWorkoutProgress(currentStep, newTime);
          
          setProgress({
            currentExercise,
            totalProgress
          });
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, workout, playCountdown]);

  // Update timer when changing exercises
  useEffect(() => {
    if (workout && currentStep >= 0) {
      setTimeRemaining(workout.steps[currentStep].duration);
      // Update progress when changing exercises
      const totalProgress = calculateWorkoutProgress(currentStep, workout.steps[currentStep].duration);
      setProgress(prev => ({
        ...prev,
        totalProgress
      }));
    }
  }, [currentStep, workout]);

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleNext = () => {
    if (currentStep < workout.steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setTimeRemaining(workout.steps[nextStep].duration);
    }
  };

  if (!workout) return null;

  const currentExercise = workout.steps[currentStep];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video 
        ref={videoRef}
        className='fixed top-0 left-0 w-full h-full object-cover z-[-1]' 
        autoPlay 
        muted 
        loop
      >
        <source src={currentExercise.videoUrl} type='video/mp4' />
      </video>

      {/* Exercise name - smaller on mobile */}
      <h1 className='absolute mt-[16px] md:mt-[32px] left-1/2 transform -translate-x-1/2 text-center px-4 w-full md:w-auto text-[20px] md:text-[36px]'>
        {currentExercise.name}
      </h1>

      {/* Square Timer */}
      <div className='absolute mt-[16px] ml-[16px]'>
        <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]">
          <SquareTimer 
            duration={currentExercise.duration}
            current={timeRemaining}
          />
        </div>
      </div>

      {/* Sound controls - top right on mobile */}
      <div className="md:hidden absolute top-4 right-4 flex gap-3">
        <button className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="/icons/music.svg" alt="Music" className="w-6 h-6" />
        </button>
        <button className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="/icons/sound.svg" alt="Sound" className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop sound controls */}
      <div className="hidden md:flex gap-[16px] absolute right-1 bottom-0 mb-[68px] mr-[32px]">
        <button>
          <img src="/icons/music.svg" alt="Music" />
        </button>
        <button>
          <img src="/icons/sound.svg" alt="Sound" />
        </button>
      </div>

      {/* Mobile controls */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pb-4 pt-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-between items-center w-full px-6 mb-2">
            <button 
              onClick={handlePlayPause}
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <img 
                src={!isPlaying ? "/icons/play.svg" : "/icons/pause.svg"} 
                alt={isPlaying ? "Pause" : "Play"}
                className="w-6 h-6"
              />
            </button>

            <div className='h-[4px] w-[200px] bg-darkgray rounded-full overflow-hidden'>
              <div 
                className="relative h-full bg-primary transition-all duration-300"
                style={{ width: `${progress.totalProgress}%` }}
              ></div>
            </div>

            <button 
              onClick={handleNext}
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <img src="/icons/next.svg" alt="Next" className="w-6 h-6" />
            </button>
          </div>
          <h2 className='text-[18px]'>{Math.round(progress.totalProgress)}%</h2>
        </div>
      </div>

      {/* Desktop controls */}
      <div className="hidden md:flex flex-col gap-[16px] absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[40px]">
        <div className="flex justify-center items-center gap-[16px]">
          <button onClick={handlePlayPause}>
            <img src={!isPlaying ? "/icons/play.svg" : "/icons/pause.svg"} alt={isPlaying ? "Pause" : "Play"} />
          </button>
          <div className='h-[4px] w-[400px] bg-darkgray'>
            <div 
              className="relative h-[4px] bg-primary transition-all duration-300"
              style={{ width: `${progress.totalProgress}%` }}
            ></div>
          </div>
          <button onClick={handleNext}>
            <img src="/icons/next.svg" alt="Next" />
          </button>
        </div>
        <h2 className='text-[24px] mt-[-16px] text-center'>{Math.round(progress.totalProgress)}%</h2>
      </div>
    </div>
  );
};

export default Workout; 