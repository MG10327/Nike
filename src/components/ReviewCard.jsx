import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="customer" className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <span className='flex justify-between'>
                <img src={star} width={24} height={24} className='object-contain m-0' />
            <span className='ml-4'>({rating})</span>
            </span>
        </div>
        <h3 className='font-palanquin text-center font-bold text-3xl'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard