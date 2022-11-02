import React, {useState} from 'react'
import TitleDescriptions from '../components/TitleDescriptions'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import TableData from '../components/TableData';
import MapChartWorld from '../components/Maps/MapChartWorld';

const Future = () => {

  const [emissions, setEmissions] = useState([]);
  const [optimalForecast, setOptimalForecast] = useState([]);
  const [windowSize, setWindowSize] = useState(0);

  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

  const retriveData = () => {

    setOptimalForecast([])
    const time1 = convertTZ(new Date(),  "Etc/GMT").toISOString() //new Date().toISOString();
    const time2 = addHours(12,convertTZ(new Date(),  "Etc/GMT") ).toISOString()

    regions.forEach(region => {
      emissionsService.getForecastEmissionByLocationAndTime(region.RegionName,time1,time2,windowSize).then((data) => {

          //console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
          if (data.status === 200) {
            let apiData = data.data[0];
            let optimalF = apiData.optimalDataPoints[0]
              
              optimalF.rating = optimalF.value
              optimalF.time = optimalF.timestamp


              optimalF.regionName = region.RegionName
              optimalF.latitude = region.Latitude
              optimalF.longitude = region.Longitude
              setOptimalForecast((emis => [...emis, optimalF]));
          }
          
      }
      )
  })
  }

  function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
    return date;
  }

  return (
    <>
      <TitleDescriptions title={'Forecast'} description={'Future Estimations based in the workload duration (in minutes)'}/>
      
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button"  onClick={() => {setWindowSize(15); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          15 minutes
        </button>
        <button type="button" onClick={() => {setWindowSize(30); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          30 minutes
        </button>
        <button type="button" onClick={() => {setWindowSize(60); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          1 Hour
        </button>
        <button type="button" onClick={() => {setWindowSize(120); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          2 Hours
        </button>
        <button type="button"  onClick={() => {setWindowSize(180); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          3 Hours
        </button>   
        <button type="button"  onClick={() => {setWindowSize(240); retriveData() }} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          4 Hours
        </button> 
        <button type="button" onClick={() => {setWindowSize(300); retriveData() }}class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          5 Hours
        </button>  
                
             
      </div>


      <MapChartWorld emissionData={optimalForecast} />


      <div class="container mx-auto">
                <TableData emissionData={optimalForecast} />
      </div>


    </>
  )
}

export default Future