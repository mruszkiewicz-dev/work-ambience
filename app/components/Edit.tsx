'use client'

import { useState } from 'react'
import { EditButton } from './EditButton'
import { Button, Input } from '@material-tailwind/react'
import { clsx } from 'clsx'

export const Edit = () => {
  const [active, setActive] = useState(false)
  const [workType, setWorkType] = useState(String)
  const [time, setTime] = useState([{ work: 45, break: 5 }])

  const handleTimeChange = (index: number, field: string, value: string) => {
    const newTime: any = [...time]
    newTime[index][field] = value
    setTime(newTime)
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
            {workType !== '' && (
              <div className='flex w-20 flex-col gap-2 mt-4 text-center'>
                <label>Work</label>
                <input
                  placeholder='Work'
                  className='bg-blue-gray-900 text-white rounded-md p-2'
                  value={time[0].work}
                  onChange={(e) => handleTimeChange(0, 'work', e.target.value)}
                />
                <label>Break</label>
                <input
                  placeholder='Break'
                  className='bg-blue-gray-900 text-white rounded-md p-2'
                  value={time[0].break}
                  onChange={(e) => handleTimeChange(0, 'break', e.target.value)}
                />
                <Button
                  variant='outlined'
                  className='bg-blue-gray-100 text-center p-2 mt-4'
                >
                  Zapisz
                </Button>
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
