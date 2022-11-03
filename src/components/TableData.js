import React, { useState, useEffect } from 'react'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import sortBy from "lodash/sortBy";
import { getColor } from "../utils/Utils";

const TableData =  ({emissionData}) => {

    const [emissions, setEmissions] = useState ([]);
    const [emissionsSort, setEmissionsSort] = useState ([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
            setEmissions(emissionData)
            let scores = []
           
            var temp=[ ]
            emissionData=/* A prop that is passed to the component. */
            emissionData.filter((item)=>{
                if(!temp.includes(item.regionName)){
                  temp.push(item.regionName)
                  return true;
                }
                })

            
                for (const emi of emissionData) {
                    scores.push(emi.rating)
                    setRatings(scores)
                  }

            setEmissionsSort(sortBy(emissionData, (o) => o.rating))
          }, [emissionData]);    


    return (
        <>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Region Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Location
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Time
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Rating
                            </th>
                            </tr>
                    </thead>
                    <tbody>
                    {emissionsSort.map((emi) => (

                        <tr key="{emi.regionName}" className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {emi.regionName}
                            </th>
                            <td className="py-4 px-6">
                                {emi.location}
                            </td>
                            <td className="py-4 px-6">
                                {emi.time}
                            </td>
                            <td className="py-4 px-6">
                                <span class="text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300" style={{backgroundColor: getColor(emi.rating, ratings)}}>{emi.rating.toFixed(2)} </span>
                            </td>
                        </tr>
                                 ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableData