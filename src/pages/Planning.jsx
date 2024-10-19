import React from 'react'
import Point from '../components/Point'
import { bg, logo,bgImage } from '../assets/icons'


const Planning = () => {
  return (
<section className="bg-blue-50 py-12 px-6 lg:px-20 xl:px-60 flex flex-col lg:flex-row items-center lg:justify-between">
  {/* Left Section (Heading + Image) */}
  <div className="flex flex-col space-y-8 lg:w-1/2">
    <div>
      <h2 className="text-teal-500 font-semibold text-lg uppercase tracking-wider mb-4">
        Easy Steps
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
        Easy steps for planning <br /> your next trip
      </h1>
    </div>

    <img
      src={bgImage}
      alt="Traveller planning"
      className="object-contain w-full max-w-sm lg:max-w-md"
    />
  </div>

  {/* Right Section (Points) */}
  <div className="mt-12 lg:mt-0 lg:ml-8 lg:w-1/2">
    <div className="space-y-8">
      <Point
        number={1}
        heading={"Enter your departure point"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt."}
      />
      <Point
        number={2}
        heading={"Enter your dates"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, odio rhoncus molestie vestibulum."}
      />
      <Point
        number={3}
        heading={"Pick cheapest flights to everywhere"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, risus elit convallis ex, non rutrum tellus elit vitae diam."}
      />
    </div>
  </div>
</section>
  )
}

export default Planning