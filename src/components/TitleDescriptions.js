import React from 'react'

const TitleDescriptions = ({title, description}) => {
  return (
    <>
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{title}</span></h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{description}</p>
    <br></br>
    </>
  )
}

export default TitleDescriptions