'use client'

import { useState } from 'react'
import { Slider } from '@material-tailwind/react'
import { IconTrees } from '@tabler/icons-react'
import { clsx } from 'clsx'

export const Card = () => {
  const [volume, setVolume] = useState(0)

  const handleChangeVolume = (e: any) => {
    const value = e.target.value
    setVolume(value)
    console.log(value)
  }

  return (
    <div className='w-420 flex flex-col items-center p-2 mx-2  space-y-4 '>
      <div
        className={clsx(
          'w-40 h-40',
          volume <= 0 ? 'text-blue-gray-100' : 'text-blue-gray-900',
        )}
      >
        <IconTrees className='w-full h-full' />
      </div>
      <Slider defaultValue={0} value={volume} onChange={handleChangeVolume} />
    </div>
  )
}
