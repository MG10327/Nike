import React from 'react'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer} alt="Shoe Promotion" width={773} height={687} className='object-contain w-full' />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special</span> Offer</h2>
      </div>
    </section>
  )
}

export default SpecialOffer