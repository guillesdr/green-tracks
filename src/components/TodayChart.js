import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import emissionsService from '../services/emissions.service'





const TodayChart = ({ regionName, dataType, time1, time2, workLoad }) => {
  const [data, setData] = useState([]);



  useEffect(() => {

    const dataChart = []

    if (dataType = 'future') {


      emissionsService.getForecastEmissionByLocationAndTime(regionName, time1, time2, workLoad).then((data) => {

        //console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
        if (data.status === 200) {

          for (const dat of data.data[0].forecastData) {
            let apiData = {
              name: dat.timestamp,
              emmision: dat.value
            }
            setData((emis => [...emis, apiData]));

          }

        }
      
        
    })
  }
}, []);



      return (
        <>
          {dataType =='future' ? <><h2>RegionName: {regionName}</h2> <h2>WolkLoad: {workLoad} </h2> </>: <></>}


          <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="emmision" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>




        </>
      )
    }

  
    export default TodayChart