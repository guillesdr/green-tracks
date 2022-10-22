import React, { useState, useEffect } from 'react'
import emissionsService from '../services/emissions.service'

const TableData =  () => {

    const [emissions, setEmissions] = useState ([]);

    useEffect(() => {
              emissionsService.getAllLocations().then((data) => {
                setEmissions(data.data);
                console.log("🚀 ~ file: TableData.js ~ line 11 ~ emissionsService.getAllLocations ~ data", data)
              })



              
          }, []);    


    return (
        <>





            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                            <th scope="col" className="py-3 px-6">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {emissions.map((emi) => (

                        <tr  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               {emi.location}
                            </th>
                            <td className="py-4 px-6">
                                {emi.location}
                            </td>
                            <td className="py-4 px-6">
                                {emi.time}
                            </td>
                            <td className="py-4 px-6">
                                 {emi.rating}
                            </td>
                            <td className="py-4 px-6">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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