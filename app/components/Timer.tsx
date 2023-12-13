'use client'

import { useState, useEffect } from 'react'
import { Button } from '@material-tailwind/react'
import { IconPlayerPlay, IconRotateClockwise2 } from '@tabler/icons-react'

export const Timer = () => {
  const workTime = 1 * 60 * 1000
  const breakTime = 2 * 60 * 1000
  const [timer, setTimer] = useState(workTime)
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    if (isActive) {
      if (timer < 0) {
        if (!isBreak) {
          setIsBreak(!isBreak)
          setTimer(breakTime)
        } else {
          setTimer(workTime)
        }
      } else {
        const interval = setInterval(() => {
          setTimer((prev) => prev - 1000)
        }, 1000)

        return () => clearInterval(interval)
      }
    } else {
      setTimer(workTime)
    }
  }, [isActive, timer])

  const startTimer = () => {
    setIsActive(!isActive)
  }

  const minutes = Math.floor(timer / 60000)
  const seconds = Math.floor((timer % 60000) / 1000)
  return (
    <div className='flex space-x-1'>
      <div className='flex-1 shadow-2xl rounded-full bg-blue-gray-200 border-0 w-40 p-1 text-center'>
        <h2 className='font-light text-2xl'>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </h2>
      </div>
      <div>
        <Button
          variant='outlined'
          size='sm'
          onClick={startTimer}
          className='rounded-full shadow-2xl bg-blue-gray-200 border-0'
        >
          {!isActive ? <IconPlayerPlay /> : <IconRotateClockwise2 />}
        </Button>
      </div>
    </div>
  )
}
