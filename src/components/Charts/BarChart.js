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
          <XAxis dataKey="name">
          </XAxis>
          <YAxis dataKey="value"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart >

      </>
  )
}

export default BarChartGt