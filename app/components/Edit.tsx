'use client'

import { useState } from 'react'
import { EditButton } from './EditButton'
import { Button, Input } from '@material-tailwind/react'

export const Edit = () => {
  const [active, setActive] = useState(false)
  const [workType, setWorkType] = useState(String)

  return (
    <>
      {active && (
        <div className='bg-blue-gray-500 w-screen h-screen absolute inset-0 z-30 flex justify-center bg-opacity-70'>
          <div className='bg-blue-gray-700 p-10 rounded-md z-4 w-200 h-50 p-0 flex flex-col items-center justify-center text-center m-28 p-1'>
            <div className='space-x-2 p-1'>
              <Button
                className='bg-blue-gray-900'
                onClick={() => setWorkType('static')}
              >
                Stały czas
              </Button>
              <Button
                className='bg-blue-gray-900'
                onClick={() => setWorkType('plan')}
              >
                Plan dnia
              </Button>
            </div>
            {workType !== '' && (
              <div className='flex w-72 flex-col items-end gap-6'>
                <input
                  type='number'
                  placeholder='Work'
                  className='bg-blue-gray-900 text-white'
                />
                <input
                  placeholder='Break'
                  className='bg-blue-gray-900 text-white'
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className='absolute top-10 right-20 z-40'
        onClick={() => setActive(!active)}
      >
        <EditButton />
      </div>
    </>
  )
}
