import React from 'react'
import LogoGsf from '../../images/logoGSF.png';

const RegionData = ({reg, emissions}) => {

    const regEmissions  = emissions.filter( t => t.regionName === reg.RegionName)

  return (
    <div>
        
<div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={LogoGsf} /> 
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {reg.RegionName}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{reg.location}</span>


        {regEmissions.map((reg) => (
        <div class="content-center">
        <span class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{reg.time}</span>
        <br></br>
        <span class="bg-gray-100 text-gray-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{reg.rating}</span>
        </div>
      ))}

        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Graph</a>
        </div>
    </div>
</div>

    </div>
  )
}

export default RegionData