import React, { useState, useEffect } from 'react'
import MapChartWorld from '../components/MapChartWorld'
import MapChartEurope from '../components/MapChartEurope'
import Menu from '../components/Menu'
import TableData from '../components/TableData'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import TitleDescriptions from '../components/TitleDescriptions'

const RealTime = () => {

    const [emissions, setEmissions] = useState ([]);
    const [map, setMap] = useState ('');


    useEffect(() => {
            regions.forEach(region => {
                emissionsService.getEmissionByLocation(region.RegionName).then((data) => {
                    
                    console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
                    if (data.status==200){
                        let  apiData = data.data[0];
                        apiData.regionName = region.RegionName
                        apiData.latitude = region.Latitude
                        apiData.longitude = region.Longitude

                    setEmissions((emis => [...emis, apiData]));
                    if (map === null){
                        setMap('WORLD');
                    }
                    
                }
                  })
            })
          }, []);    

    return (
        <>
            <TitleDescriptions title={'Real Time'} description={'Realtime Emissions in the world'}/>

            <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" onClick={() => setMap('WORLD')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                World
            </button>
            <button type="button" onClick={() => setMap('EUROPE')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Europe
            </button>
            <button type="button" onClick={() => setMap('NORTH_AMERICA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                North America
            </button>
            <button type="button"  onClick={() => setMap('SOUTH_AMERICA')}class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                South America
            </button>
            <button type="button" onClick={() => setMap('ASIA')}class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Asia
            </button>   
            <button type="button" onClick={() => setMap('AUSTRALIA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Australia
            </button>  
            <button type="button" onClick={() => setMap('AFRICA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Africa
            </button> 
            </div>



            <div>     
                {
                    map==='WORLD' ? <MapChartWorld  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='EUROPE' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='NORTH_AMERICA' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='SOUTH_AMERICA' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='ASIA' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='AUSTRALIA' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>
            <div>     
                {
                    map==='AFRICA' ? <MapChartEurope  emissionData={emissions}/> : <></>
                } 
            </div>            

            <div class="container mx-auto">
                <TableData emissionData={emissions}/>
            </div>
            
        </>
    )
}

export default RealTime