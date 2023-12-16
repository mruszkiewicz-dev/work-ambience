'use client'

import { useState } from 'react'
import { EditButton } from './EditButton'
import { Button, Input } from '@material-tailwind/react'
import { clsx } from 'clsx'
import { EditStatic } from './EditStatic'

export const Edit = () => {
  const [active, setActive] = useState(false)
  const [workType, setWorkType] = useState(String)

  const handleDeActive = () => {
    setActive(false)
  }

  return (
    <>
      {active && (
        <div className='bg-blue-gray-500 w-screen h-screen absolute inset-0 z-30 flex justify-center bg-opacity-70'>
          <div
            className={clsx(
              'bg-blue-gray-700 p-10 rounded-md z-40 w-200 h-20 flex flex-col items-center justify-center text-center m-28',
              workType !== '' ? 'h-80' : 'h-20 ',
            )}
          >
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
            {workType !== '' && <EditStatic closeEdit={handleDeActive} />}
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
