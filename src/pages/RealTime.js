import React, { useState, useEffect } from 'react'
import MapChartWorld from '../components/Maps/MapChartWorld'
import MapChartEurope from '../components/Maps/MapChartEurope'
import TableData from '../components/TableData'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import TitleDescriptions from '../components/TitleDescriptions'
import MapChartOceania from '../components/Maps/MapChartOceania'
import MapChartAfrica from '../components/Maps/MapChartAfrica'
import MapChartAsia from '../components/Maps/MapChartAsia'
import MapChartSouthAmerica from '../components/Maps/MapChartSouthAmerica'
import MapChartNorthAmerica from '../components/Maps/MapChartNorthAmerica'
import BarChartGt from '../components/Charts/BarChart'


const RealTime = () => {

    const [emissions, setEmissions] = useState([]);
    const [map, setMap] = useState('');
    const [dataChart, setDataChart] = useState([]);


    useEffect(() => {

        const dataChart =[]

        regions.forEach(region => {
            emissionsService.getEmissionByLocation(region.RegionName).then((data) => {

                //console.log("🚀 ~ file: TableData.js ~ line 12 ~ emissionsService.getEmissionByLocation ~ data", data.data)
                if (data.status === 200) {
                    let apiData = data.data[0];
                    apiData.regionName = region.RegionName
                    apiData.latitude = region.Latitude
                    apiData.longitude = region.Longitude
                    console.log(apiData.regionName)

                    

                    setEmissions((emis => [...emis, apiData]));
                    setDataChart((emis => [...emis, {region: apiData.regionName, emmision: apiData.rating}]));

                }
                
                setMap('WORLD')
            }
            )
        })
    }, []);





    return (
        <div class="container mx-auto px-4">
            <TitleDescriptions title={'Real Time'} description={'Realtime Emissions in the world'} />

            <h4>Select a Map:</h4>

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
                <button type="button" onClick={() => setMap('SOUTH_AMERICA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none" disabled>
                    South America (coming soon)
                </button>
                <button type="button" onClick={() => setMap('ASIA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none" disabled>
                    Asia (coming soon)
                </button>
                <button type="button" onClick={() => setMap('OCEANIA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none" disabled>
                    Australia (coming soon)
                </button>
                <button type="button" onClick={() => setMap('AFRICA')} class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white focus:outline-none" disabled>
                    Africa (coming soon)
                </button>
            </div>

            <br/>
            <br/>


            <div>
                {
                    map === 'WORLD' ? <MapChartWorld emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'EUROPE' ? <MapChartEurope emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'NORTH_AMERICA' ? <MapChartNorthAmerica emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'SOUTH_AMERICA' ? <MapChartSouthAmerica emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'ASIA' ? <MapChartAsia emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'OCEANIA' ? <MapChartOceania emissionData={emissions} /> : <></>
                }
            </div>
            <div>
                {
                    map === 'AFRICA' ? <MapChartAfrica emissionData={emissions} /> : <></>
                }
            </div>

            <BarChartGt data = {dataChart} />

            <div class="container mx-auto">
                <TableData emissionData={emissions} />
            </div>

        </div>
    )
}

export default RealTime