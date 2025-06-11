function WorkoutTypeCard(props) {
  const { title = 'Title', type = 'Full Body', onClick } = props;

  return (
    <div 
      className="flex flex-col items-center justify-center border-1 border-lightgray w-full h-full cursor-pointer hover:bg-gray-50 transition-colors p-4"
      onClick={onClick}
    >
      <h4 className="text-darkgray">{title}</h4>
      <h1 className="text-[24px] md:text-[38px] text-center mt-[8px] md:mt-[8px]">{type}</h1>
    </div>
  );
}

export default WorkoutTypeCard;