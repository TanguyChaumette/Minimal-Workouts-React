function WorkoutTypeCard(props) {

  const {title = 'Title', type = 'Full Body'} = props

  return(
    <>
      <div className="flex flex-col border-1 border-lightgray aspect-square w-full cursor-pointer">
        <h4 className="text-darkgray mt-[16px]">{title}</h4>
        <h1 className="mt-[8px] mx-auto max-w-[130px]">{type}</h1>
      </div>
    </>
  )
}

export default WorkoutTypeCard