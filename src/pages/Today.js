import React, { useState, useEffect } from 'react'
import TitleDescriptions from '../components/TitleDescriptions'
import TodayChart from '../components/TodayChart'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import RegionData from '../components/Region/RegionData';


const Today = () => {

  const [emissions, setEmissions] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  }



  function organizandoObjeto(arr) {

    let memory = {
      temp: [],
      result: []
    }

    arr.map(o => {

      if (!memory.temp.includes(o.regionName)) {
        memory.temp.push(o.regionName)
        const tel = emissions.filter(t => t.regionName === o.regionName)
        memory.result.push({ regionName: o.regionName, emiss: tel })
      }
    })
    return memory.result
  }


  useEffect(() => {

    const dataChart = []

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const time1 = convertTZ(startOfDay, "Etc/GMT").toISOString() //new Date().toISOString();
    const time2 = convertTZ(new Date(), "Etc/GMT").toISOString()

    regions.forEach(region => {
      emissionsService.getEmissionByLocationAndTimeBest(region.RegionName, time1, time2).then((data) => {

        //console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
        if (data.status === 200) {
          let apiData = data.data[0];
          apiData.regionName = region.RegionName
          apiData.latitude = region.Latitude
          apiData.longitude = region.Longitude
          console.log(apiData.regionName)


          setEmissions((emis => [...emis, apiData]));


        }


      }
      )
    })
  }, []);

  return (
    <>

      <div class="container mx-auto px-4">
        <TitleDescriptions title={'Today'} description={'Best emission data per region'} />

        <div class="grid grid-cols-4 gap-4">
          {regions.map((reg) => (
            <div>
              <RegionData reg={reg} emissions={emissions} />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Today