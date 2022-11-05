import React from 'react';
import { Label,  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarChartGt = ({data}) => {

  return (
    <>


        <BarChart 
          width={1000}
          height={400}
          data={data}


        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region">
          </XAxis>
          <YAxis dataKey="emmision"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="emmision" fill="#025373" />
        </BarChart >

      </>
  )
}

export default BarChartGt