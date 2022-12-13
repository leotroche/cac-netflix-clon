import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { Movie } from './Movie'

export const Row = ({ title, items, rowId }) => {
  const sliderLeft = () => {
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const sliderRight = () => {
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <section>
      <div className='mt-8' />
      <h2 className='p-4 font-bold text-white md:text-xl'>{title}</h2>
      <div className='group relative flex items-center text-black px-4'>
        <MdChevronLeft
          onClick={sliderLeft}
          className='absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowId}
          className='relative h-full w-full overflow-x-scroll whitespace-nowrap scrollbar-hide'
        >
          {items.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className='absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block'
          size={40}
        />
      </div>
    </section>
  )
}
