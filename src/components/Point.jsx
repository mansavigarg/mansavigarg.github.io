import React from 'react'


const Point = ({number, heading, para}) => {
  return (
<div className="flex flex-col sm:flex-row items-start">
  {/* Number circle */}
  <div className="flex-shrink-0 bg-lime-300 text-gray-900 font-bold w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full">
    {number}
  </div>

  {/* Text content */}
  <div className="mt-4 sm:mt-0 sm:ml-7 space-y-1">
    <h3 className="text-xl sm:text-2xl font-semibold text-teal-600">
      {heading}
    </h3>
    <p className="text-gray-600 leading-6 sm:leading-7">
      {para}
    </p>
  </div>
</div>

  )
}

export default Point