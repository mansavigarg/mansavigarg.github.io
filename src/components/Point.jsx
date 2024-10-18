import React from 'react'


const Point = ({number, heading, para}) => {
  return (
    <div className="flex items-start ">
    <div className="flex-shrink-0 bg-lime-300 text-gray-900 font-bold w-14 h-14 flex items-center justify-center rounded-full">
      {number}
    </div>
    <div className="ml-7 space-y-1">
      <h3 className=" text-2xl font-semibold text-teal-600">
        {heading}
      </h3>
      <p className="text-gray-600 leading-7" >
        {para}
      </p>
    </div>
    </div>
  )
}

export default Point