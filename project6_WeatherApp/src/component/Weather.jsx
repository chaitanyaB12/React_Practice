import { useState } from "react"
import axios from "axios"


const Weather = () => {

  const [weather, setWeather] = useState();
  const [city, setCity] = useState('');
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_W_API_KEY;

  const handleChange = (event)=>{
    setCity(event.target.value)
  }

  const handleweather = async()=>{
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      const data = response.data
       setWeather(data);
       console.log(response.data);
       setError("");
       setCity("");
    }catch(err){
      setWeather(null)
      setError(err.response?.data?.message || "Error Fetching City Data")
      setCity("")    
    }
  }

  return (
    <div className="bg-mauve-600 h-screen flex justify-center items-center">  

       <div className="bg-zinc-400 w-[95%] sm:w-[80%] md:w-[60%] lg:w-112.5 p-6 rounded-3xl shadow-xl">
            <h1 className="text-center text-3xl sm:text-4xl text-teal-100 p-2 font-serif">Weather</h1>

            <div className="flex justify-center items-center mt-3 gap-3">          
               <input
                     type="text"
                     placeholder="Type City Here"
                     value={city}
                     onChange={handleChange}
                     className="border h-10 w-full p-2 rounded outline-none focus:outline-none"
                  />
            </div>

            <div className="flex justify-center mt-4">
                <button
                  onClick={handleweather}
                  className="bg-mist-700 text-white px-5 py-2 rounded hover:opacity-90 transition"
                >
                  Get Weather
                </button>
              
            </div>

            <div>
                {error && (
                  <p className="text-center text-red-600 mt-3 font-medium">{error}</p>
                )}

             {weather && <>
                  <div className="text-center mt-6 space-y-2 wrap-break-word">
                    <h3>City : {weather.name}</h3>
                    <p>Temp is : {weather.main.temp}</p>
                    <p>Humidity is : {weather.main.humidity}</p>
                    <p>Wind = Degree : {weather.wind.deg}  Direction : {weather.wind.gust} Speed : {weather.wind.speed}</p>
                    <p>Description : {weather.weather[0].description}</p>
                    
                  </div>
             </>            
             }
            </div> 

       </div>

    </div>
   
  )
}

export default Weather