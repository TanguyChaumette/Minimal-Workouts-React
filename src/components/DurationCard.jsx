function DurationCard(props) {
  const { title = 'Title', duration = 10, onClick } = props;

  return (
    <div 
      className="flex flex-col items-center justify-center border-1 border-lightgray aspect-square w-full cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <h4 className="text-darkgray">{title}</h4>
      <div className="flex flex-col items-center mt-[12px] md:mt-[28px] gap-[8px] md:gap-[16px]">
        <h1 className="text-[36px] md:text-[48px]">{duration}</h1>
        <p className="mt-[-4px] md:mt-[-8px]">min</p>
      </div>
    </div>
  );
}

export default DurationCard;