import Search from "./components/search";
import { useState,useEffect } from 'react';
import axios from "axios";
import Detail from "./components/detail";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
function App() {
  const[location,setLocation] = useState("");
  const[data,setData] = useState({});
  const [isLight,setLight] = useState(true);
  // const[lat,setLat] = useState(19.0785451);
  // const[lon,setLon] = useState(72.878176);
  const[list,setList] = useState([]);
//   useEffect( () => {
//    (async _ => {
//     const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=b6e5616d153c1cb3779c372c90089a6c`);
//     console.log(response.data);
//     setLocationList(response.data);
//     console.log(locationList);
//    })();
  

//  },[location])
  useEffect(() => {
     (async _ => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=b6e5616d153c1cb3779c372c90089a6c`);
         console.log(res);
         setData(res);
         setList(res.data.list);
  })();
     
  },[location])

 
  const searchedInput = (key) => {
      setLocation(key);
      console.log(location);
  }

  
  const changeBackground = _ => {
      if(isLight === true){
       setLight(false);
      }
      else{
       setLight(true);
      }
  }
  return (
   <main className={isLight === true ? "white-container": "black-container"}>
     <button className="toggle" onClick={changeBackground}>Toggle theme</button>
     <Search searchedInput={searchedInput} />
     { data.statusText === "Not Found" ? (<NotFound />) : (<Detail list={list} data={data} isLight={isLight}/>)}
     <Footer />
   </main>
  );
}

export default App;
