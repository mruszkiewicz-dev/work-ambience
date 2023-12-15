'use client'

import { useState } from 'react'
import { Slider } from '@material-tailwind/react'
import { clsx } from 'clsx'
import ReactHowler from 'react-howler'
import { Icons } from '@/app/components/Icons'

export const Card = ({ type, src }: { type: string; src: string }) => {
  const [volume, setVolume] = useState(0)
  const [active, setActive] = useState(false)

  const handleChangeVolume = (e: any) => {
    const value = e.target.value
    setVolume(value)
  }

  const handleActive = () => {
    setActive(!active)
    if (!active) {
      setVolume(60)
    } else {
      setVolume(0)
    }
  }

  return (
    <div className='flex flex-col items-center p-2 mx-2 h-20 space-y-10 '>
      <div
        className={clsx(
          'w-20',
          volume <= 0 ? 'text-blue-gray-100' : 'text-blue-gray-900',
        )}
      >
        <div onClick={handleActive}>
          <Icons type={type} />
        </div>
        {active && (
          <Slider
            className='w-20 min-w-full'
            size='sm'
            defaultValue={0}
            value={volume}
            onChange={handleChangeVolume}
          />
        )}
      </div>
      <ReactHowler src={src} playing={true} loop={true} volume={volume / 100} />
    </div>
  )
}
