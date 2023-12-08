'use client'

import { Slider } from '@material-tailwind/react'

export const Card = () => {
  return (
    <div className='w-96'>
      <Slider defaultValue={0} />
    </div>
  )
}
