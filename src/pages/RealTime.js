import React from 'react'
import MapChart from '../components/MapChart'
import Menu from '../components/Menu'
import TableData from '../components/TableData'

const realTime = () => {
    return (
        <>
            <h3>RealTime</h3>
            <div class="flex items-center justify-center w-8/12">
                <MapChart  />
            </div>
            <TableData />
        </>
    )
}

export default realTime