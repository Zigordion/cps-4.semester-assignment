import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './CenterComponent.css'
import TimeComponent from './WeatherComponent'

const CenterComponent = () => {

  const [timeData, setTimeData] = useState<number>();
  useEffect(()=>{
      const fetchTimeData = async()=>{
          try{
              const response = await axios.get('http://localhost:8020/api/weather/time')
              console.log(response.data);
              setTimeData(response.data);
          } catch (error){
              console.error("Error while fetching time data: ", error);
          }
      }
      fetchTimeData();
  },  []);


  return (
    <div className='container'>
        <h1>Odense<br/>Vejrudsigt</h1>
        <h1>{timeData}</h1>
    </div>
  )
}


export default CenterComponent