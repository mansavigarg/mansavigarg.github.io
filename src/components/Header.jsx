import React from 'react'
import { bg, logo } from '../assets/icons'
import Button from './Button'
const Header = () => {
  return (
<div className="">
  <div className="flex flex-col lg:flex-row justify-between items-center p-7">
    {/*  logo and text both  */}
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center">
      <img src={logo} width={100} height={50} className="mb-3 lg:mb-0" />
      <h1 className="flex flex-col items-center lg:items-start ml-0 lg:ml-3">
        <span className="text-3xl italic">Marvelous</span>
        <span className="text-xl font-light">Destinations</span>
      </h1>
    </div>
    {/* all the buttons side */}
    <div className="hidden lg:block">
      <ul className="flex justify-center items-center gap-14 font-light">
        <li className="hover:cursor-pointer">Destinations</li>
        <li className="hover:cursor-pointer">Hotels</li>
        <li className="hover:cursor-pointer">Flights</li>
        <li className="hover:cursor-pointer">Bookings</li>
        <li className="hover:cursor-pointer">Login</li>
        <li className="hover:cursor-pointer">
          <Button label="SignUp" />
        </li>
        <div className="flex items-center">
          <li className="hover:cursor-pointer">EN</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </ul>
    </div>
  </div>
</div>



  )
}

export default Header