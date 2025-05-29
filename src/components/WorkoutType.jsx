import { useNavigate } from 'react-router-dom';
import { useWorkout } from '../context/WorkoutContext';
import WorkoutTypeCard from './WorkoutTypeCard';

const WorkoutType = () => {
  const navigate = useNavigate();
  const { selectedDuration, setSelectedType } = useWorkout();

  // Redirect if no duration selected
  if (!selectedDuration) {
    navigate('/');
    return null;
  }

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    navigate('/workout');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col gap-[64px] items-center justify-center max-w-[800px] w-full pb-[10vh]">
        <div className="flex flex-col gap-[24px] max-w-[500px] items-center justify-center">
          <h2>Minimal Workouts</h2>
          <p className="text-darkgray">Our minimal workouts are designed to energize you anytime, anywhere with no equipment. For best results, we recommend doing a session every other day, at least three times a week.</p>
          <div className="flex gap-[12px] items-center justify-center">
            <button className="link-button-2">All Workouts</button>
            <button className="link-button-2">Past Workouts</button>
            <button className="link-button-2">Pricing</button>
            <button className="link-button-2">Log In</button>
          </div>
        </div>

        <div className='h-[1px] bg-lightgray w-full max-w-[800px]'></div>

        <div className='flex justify-top items-start gap-[32px]'>
          <div className="flex flex-col w-[50%] text-start gap-[12px]">
            <div className="flex flex-col items-start justify-center text-start gap-[12px]">
              <h4 className="text-darkgray">2/2</h4>
              <h1>What do you feel like working on?</h1>
            </div>

            <a href="/">
              <div className="flex mt-[32px] gap-[8px]">
                <img src="/icons/arrow-back.svg" alt="Arrow Back" />
                <h4 className="text-darkgray">Previous</h4>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-[12px] w-[50%]">
            <WorkoutTypeCard title='All In' type='Full Body' onClick={() => handleTypeSelect('fullBody')}/>
            <WorkoutTypeCard title='Good Pump' type='Upper Body' onClick={() => handleTypeSelect('upperBody')}/>
            <WorkoutTypeCard title='Engine Running' type='Lower Body' onClick={() => handleTypeSelect('lowerBody')}/>
            <WorkoutTypeCard title="Let's Sweat" type='Cardio HIIT' onClick={() => handleTypeSelect('cardioHiit')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutType; 