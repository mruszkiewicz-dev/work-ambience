'use client'

import { useState, useEffect, useContext } from 'react'
import { Button } from '@material-tailwind/react'
import { IconPlayerPlay, IconRotateClockwise2 } from '@tabler/icons-react'
import { Modal } from './Modal'
import { TimeContext } from '@/app/context/TimeContext'

export const Timer = () => {
  const workTime = 0.2 * 60 * 1000
  const breakTime = 30 * 60 * 1000
  const { timer } = useContext(TimeContext)
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [section, setSection] = useState(0)

  useEffect(() => {
    console.log()
    if (isActive) {
      if (time < 0) {
        console.log(section, 'interwal')
        setIsBreak((prev) => {
          const newIsBreak = !prev

          setTime(
            newIsBreak
              ? timer[section].break * 60 * 1000
              : timer[section].work * 60 * 1000,
          )

          if (newIsBreak) {
            if (section === timer.length) {
              console.log('zero')
              setSection(0)
            } else {
              setSection((prev) => prev + 1)
              console.log('dodaj')
              console.log(section, 'sekcja')
            }
          } else {
            console.log('zostaje')
            setSection((prev) => prev)
          }

          return newIsBreak
        })
      } else {
        const interval = setInterval(() => {
          setTime((prev: number) => prev - 1000)
        }, 1000)

        return () => clearInterval(interval)
      }
    } else {
      setTime(timer[section].work * 60 * 1000)
    }
  }, [isActive, time])

  const startTimer = () => {
    setIsActive(!isActive)
  }
  console.log(section)
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  return (
    <>
      {isBreak && <Modal />}
      <div className='flex space-x-1'>
        <div className='flex-1 shadow-2xl rounded-full bg-blue-gray-200 border-0 w-40 p-1 text-center'>
          <h2 className='font-light text-2xl'>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
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
    </>
  )
}
