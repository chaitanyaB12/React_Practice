

const Card = ({Carditems}) => {
  return (
    <div className="bg-zinc-400 max-w-xs sm:w-64 w-full rounded-md shadow-md">
        <div className="w-full h-42 overflow-hidden rounded-t-md  ">
            <img className="w-full h-full object-cover"  src={Carditems.imgurl} alt="poster" />
        </div>
        <div className="px-2 py-3">
            <p className="font-semibold text-lg">{Carditems.name}</p>
             <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nesciunt dignissimos corrupti.</p>
        </div>
    </div>
  )
}

export default Card