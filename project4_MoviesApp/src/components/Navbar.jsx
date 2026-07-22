

function Navbar() {
  return (
    <div className='flex lg-flex md-flex flex-wrap justify-between items-center px-4 py-4 shadow-md bg-[#491d8a] sticky top-0'>
        <div className=" flex items-center justify-center space-x-3  left">
        <img src="https://movie-app-88kamal.vercel.app/clipart3105859.png" className='w-10' alt="" />
        <h2 className='font-bold text-white text-center logo text-2xl'>Moviemasala</h2>
        </div>
        <div className="right">
            <ul className='flex space-x-4 text-whiite justify-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>ContactUs</li>
                <li className='cursor-pointer'>Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar