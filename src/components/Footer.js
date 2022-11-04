import React from 'react'
import LogoCH22 from '../images/carbonHack2022.png';

const Footer = () => {
  return (


    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://taikai.network/gsf/hackathons/carbonhack22/overview" class="flex items-center mb-4 sm:mb-0">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={LogoCH22}/> 
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span></span>Carbon Hack 22</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">

        </ul>
      </div>

      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://greensoftware.foundation/" class="hover:underline">
        Green software Foundation</a>
      </span>
    </footer>

  )
}

export default Footer