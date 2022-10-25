import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div class="flex justify-content: center">
      <Link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Real Time
        </button>
      </Link>
      <Link to="/today">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Today
        </button>
      </Link>
      <Link to="/future">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Future
        </button>
      </Link>
    </div>

  )
}

export default Menu