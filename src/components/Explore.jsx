import React from 'react'
import { bg } from '../assets/icons'
import Button from '../components/Button'

const Explore = () => {
  return (
    <div className=' flex'>
    <section className="px-6 py-12 bg-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-teal-500 font-semibold tracking-widest uppercase mb-4 text-left">
          Best destinations around the world
        </h2>
        
        <h1 className="text-7xl font-bold text-gray-900 leading-tight mb-6 text-left font-serif">
          It's your world.<br /> We'll help you explore it
        </h1>
        
        <p className="text-gray-500 text-lg mb-8 text-left">
          Dedicated to making travel as simple as possible, we help every one of our clients find the best options in flights, hotels, and car hires to book the perfect trip.
        </p>
        
        <div className="text-left">
            <Button label="Let's Explore" />
        </div>
      </div>
    </section>
            <img src={bg} width={900} />
    </div>
  )
}

export default Explore