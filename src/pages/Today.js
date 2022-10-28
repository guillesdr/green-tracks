import React from 'react'
import TitleDescriptions from '../components/TitleDescriptions'
import TodayChart from '../components/TodayChart'

const Today = () => {
  return (
    <>
      <TitleDescriptions title={'Today'} description={'Realtime Emissions for today'}/>
      <TodayChart></TodayChart>
    </>
  )
}

export default Today