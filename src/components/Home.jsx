import { useNavigate } from 'react-router-dom';
import { useWorkout } from '../context/WorkoutContext';
import DurationCard from './DurationCard';

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedDuration } = useWorkout();

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    navigate('/type');
  };

  return (
    <div className="min-h-screen md:h-screen flex items-center justify-center px-2 md:px-4">
      <div className="flex flex-col gap-[32px] md:gap-[48px] items-center justify-center max-w-[800px] w-full py-8 md:py-0">
        <h2>SuperGymbo</h2>

        <div className='h-[1px] bg-lightgray w-full max-w-[800px]'></div>

        <div className='flex flex-col md:flex-row justify-top items-start gap-[32px] w-full'>
          <div className="flex flex-col w-full md:w-[50%] text-start gap-[12px]">
            <h4 className="text-darkgray">1/2</h4>
            <h1>How long can you workout today?</h1>
          </div>
          <div className="grid grid-cols-2 gap-[12px] w-full md:w-[50%] aspect-square">
            <DurationCard
              title="Energizer"
              duration="10"
              onClick={() => handleDurationSelect(10)}
            />
            <DurationCard
              title="Get Movin'"
              duration="20"
              onClick={() => handleDurationSelect(20)}
            />
            <DurationCard
              title="Just Enough"
              duration="30"
              onClick={() => handleDurationSelect(30)}
            />
            <DurationCard
              title="Full Session"
              duration="40"
              onClick={() => handleDurationSelect(40)}
            />
          </div>
        </div>

        <div className='h-[1px] bg-lightgray w-full max-w-[800px]'></div>

        <div className="flex flex-col gap-[24px] max-w-[500px] items-center justify-center px-4">
          <p className="text-darkgray text-center">
            Just pick how long you want to workout and SuperGymbo will take care of the rest.
          </p>
          <div className="flex flex-wrap gap-[12px] items-center justify-center">
            <button className="link-button-2">All Workouts</button>
            <button className="link-button-2">Past Workouts</button>
            <button className="link-button-2">Pricing</button>
            <button className="link-button-2">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 