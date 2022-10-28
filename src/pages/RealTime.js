import React, { useState, useEffect } from 'react'
import MapChart from '../components/MapChart'
import Menu from '../components/Menu'
import TableData from '../components/TableData'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";

const RealTime = () => {

    const [emissions, setEmissions] = useState ([]);

    useEffect(() => {
            regions.forEach(region => {
                emissionsService.getEmissionByLocation(region.RegionName).then((data) => {
                    
                    console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
                    if (data.status==200){
                        let  apiData = data.data[0];
                        apiData.regionName = region.RegionName
                        apiData.latitude = region.Latitude
                        apiData.longitude = region.Longitude

                    setEmissions((emis => [...emis, apiData])
                    );
                }
                  })
            })
          }, []);    

    return (
        <>
            <h3>RealTime</h3>
            <div class="flex items-center justify-center w-8/12">
                <MapChart  emissionData={emissions}/>
            </div>
            <TableData emissionData={emissions}/>
        </>
    )
}

export default RealTime