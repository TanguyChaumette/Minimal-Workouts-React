import { useNavigate } from 'react-router-dom';
import { useWorkout } from '../context/WorkoutContext';

const Complete = () => {
  const navigate = useNavigate();
  const { selectedType, selectedDuration } = useWorkout();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRestartWorkout = () => {
    navigate('/workout');
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      <video 
        className='fixed top-0 left-0 w-full h-full object-cover z-[-1]' 
        autoPlay 
        muted 
        loop
      >
        <source src="/videos/squats.mp4" type='video/mp4' />
      </video>

      <div className="flex flex-col items-center gap-[16px]  p-[32px] bg-offwhite">
        <h1>You did it!</h1>
        <p className="text-darkgray max-w-[200px]">Now this is what you call a great and effective workout</p>
        
        <div className="flex gap-[12px]">
          <button
            onClick={handleGoHome}
            className="bg-offwhite text-primary text-[14px] border border-lightgray px-[12px] py-[6px] hover:bg-gray-50 transition-colors"
          >
            Go back Home
          </button>
          
          <button
            onClick={handleRestartWorkout}
            className="bg-offwhite text-primary text-[14px] border border-lightgray px-[12px] py-[6px] hover:bg-gray-50 transition-colors"
          >
            Restart Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Complete; 