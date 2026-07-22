function Searchbar({search,setsearch, fetchMovieData}) {
  return (
    <div>
        <div className='input gap-2 flex justify-center px-5 lg:px-0 py-5'>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search here' className='shadow-md bg-zinc-300 placeholder-grey-400 rounded-lg px-2 py-2 w-80 outline-none border-2 border-grey-500 text-black '  />

        <button
          className='bg-[#2a7ca2dc] px-4 py-2 rounded-4xl text-white shadow-md 
           border-2 border-gray-500 ' onClick={fetchMovieData}>search
        </button> 
        </div>
    </div>
  )
}

export default Searchbar