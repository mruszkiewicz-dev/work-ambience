'use client'

import { useState } from 'react'
import { Slider } from '@material-tailwind/react'
import { clsx } from 'clsx'
import ReactHowler from 'react-howler'
import { Icons } from '@/app/components/Icons'

export const Card = ({ type, src }: { type: string; src: string }) => {
  const [volume, setVolume] = useState(0)

  const handleChangeVolume = (e: any) => {
    const value = e.target.value
    setVolume(value)
  }

  return (
    <div className=' flex flex-col items-center p-2 mx-2  space-y-10 '>
      <div
        className={clsx(
          'w-20',
          volume <= 0 ? 'text-blue-gray-100' : 'text-blue-gray-900',
        )}
      >
        <Icons type={type} />
        <Slider
          className='w-20 min-w-full'
          size='sm'
          defaultValue={0}
          value={volume}
          onChange={handleChangeVolume}
        />
      </div>
      <ReactHowler src={src} playing={true} loop={true} volume={volume / 100} />
    </div>
  )
}
