import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data/index'

const Testimonials = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="testimonials">
        Testimonials{" "}
        <span className="text-purple">About Me</span>
      </h1>
      <div className="flex flex-col justify-center p-4 gap-16 mt-10">
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards 
            items={testimonials}
            direction="left"
            speed="slow"          
          />
        </div>
          
      </div>
    </div>
  )
}

export default Testimonials