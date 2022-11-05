import React, { useState, useEffect } from 'react'
import LogoGsf from '../../images/logoGSF.png';
import TodayChart from '../TodayChart';

const RegionData = ({reg, emissions, time1, time2, type}) => {

    const regEmissions  = emissions.filter( t => t.regionName === reg.RegionName)
    const [showModal, setShowModal] = useState(false);
    const [region, setRegion] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dataType, setDataType] = useState('');


    useEffect(() => {
      setDataType(type)
      setStartTime(time1)
      setEndTime(time2)
      setRegion(reg.RegionName)

 
    }, []);

  return (
    <div>
        
<div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={LogoGsf} /> 
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {reg.RegionName}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{reg.location}</span>


        {regEmissions.map((reg) => (
        <div class="grid place-items-center">
        <span class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{reg.time}</span>
        <span class="bg-gray-100 text-gray-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{reg.rating.toFixed(2)}</span>
        </div>
      ))}

        <div class="flex mt-4 space-x-3 md:mt-6">
        <button
                                        className="bg-blue-200 text-black active:bg-blue-500 
                                    font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { setShowModal(true); }}
                                    >
                                        View Graph
                                    </button>
        </div>
    </div>
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
                                            <TodayChart regionName={region} dataType={dataType} time1={startTime} time2={endTime} />
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

    </div>
  )
}

export default RegionData