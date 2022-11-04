import React, { useState, useEffect } from 'react'
import emissionsService from '../services/emissions.service'
import regions from "../data/regions.json";
import sortBy from "lodash/sortBy";
import { getColor } from "../utils/Utils";
import TodayChart from './TodayChart';

const TableData = ({ emissionData }) => {

    const [emissions, setEmissions] = useState([]);
    const [emissionsSort, setEmissionsSort] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setEmissions(emissionData)
        let scores = []

        var temp = []
        emissionData =/* A prop that is passed to the component. */
            emissionData.filter((item) => {
                if (!temp.includes(item.regionName)) {
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
            <br></br>
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
                            <th scope="col" className="py-3 px-6">
                                View Graph
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
                                    <span class="text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300" style={{ backgroundColor: getColor(emi.rating, ratings) }}>{emi.rating.toFixed(2)} </span>
                                </td>
                                <td className="py-4 px-6">
                                <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => {setShowModal(true) }}
      >
        Fill Details
      </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {showModal ? (
        <>

          <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">

                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Detail Graph
                                        </h4>
                       
                                        <div>
                                            <TodayChart regionName={'a'}  />
                                        </div   >
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Ok
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
      ) : null}


        </>
    )
}

export default TableData