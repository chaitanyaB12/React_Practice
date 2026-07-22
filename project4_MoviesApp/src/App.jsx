import {  useState } from 'react'
import Navbar from './components/Navbar'
import Moviecard from './components/MovieCard'
import Searchbar from './components/SearchBar'
import axios from "axios"

function App() {

 const [allMovieData, setAllMovieData]=useState([]);
 const[search, setsearch]=useState('');
 const[loading, setloading]=useState(false);
 const [hasSearched, sethasSearched] = useState(false);
 const url = import.meta.env.VITE_movieapi


 const fetchMovieData = async()=>{
  try{
    setloading(true);
    sethasSearched(true);
    const res = await axios.get(import.meta.env.VITE_MOVIE_API);
    const data =await res.json();
    console.log(data.Search);
    setAllMovieData(Array.isArray(data.Search) ? data.Search : []);
    setloading(false);
  } catch(error){
      console.log(error);
      setAllMovieData([]);
      setloading(false);
  }
 };



  return (
    <>
    <Navbar/>
    <div className="bg">
    <Searchbar search={search} setsearch={setsearch} fetchMovieData={fetchMovieData}/>
    {(hasSearched && !loading && allMovieData.length === 0) &&(
      <div className='flex justify-center py-10'>
        <h1 className='text-rose-300  text-4xl'>Error! Please Type Full Movie Name.</h1>
      </div>
    )}
    <Moviecard allMovieData={allMovieData} loading={loading}/>
   
    </div>
    </>
  )
}

export default App


