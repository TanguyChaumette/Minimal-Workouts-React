function DurationCard(props) {

  const {title = 'Title', duration = 10} = props

  return(
    <>
      <div className="flex flex-col border-1 border-lightgray aspect-square w-full">
        <h4 className="text-darkgray mt-[16px]">{title}</h4>
        <div className=" flex flex-col mt-[32px] gap-[16px]">
          <h1 className="text-[64px]">{duration}</h1>
          <p>min</p>
        </div>
      </div>
    </>
  )
}

export default DurationCard