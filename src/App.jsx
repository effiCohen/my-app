import { useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";
import Weather from "./components/Weather";
function App() {
  const [data,setData] = useState({})
  const[location,setLocation] = useState("")
  const API_KEY = "4d35e60a90b1d1d21665040b03d782ac  "

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) =>{
    if(event.key === "Enter"){
      axios.get(url).then((response) =>{
        setData(response.data);
       console.log(response.data);
    })
    setLocation("")
  }}
  return (
    <div className="w-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200
           text-gray-600 placeholder:text-gray-300 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData ={data}/>
    </div>
  );
}

export default App;

