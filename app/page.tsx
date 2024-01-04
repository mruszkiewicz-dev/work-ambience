'use client'

import { Card } from './components/Card'
import { Timer } from './components/Timer'
import { TimerSetting } from './components/TimerSetting'
import { data } from '@/app/data/data'
import { TimeProvider } from '@/app/context/TimeContext'
import { Typography } from '@material-tailwind/react'
import { TotalTime } from './components/TotalTime'

export default function Home() {
  return (
    <>
      <TimeProvider>
        <nav className='flex place-items-center text-center   my-8 p-2 border'>
          <div className='w-1/4 '>
            <TotalTime />
          </div>
          <div className='w-2/4 '>
            <Typography className='text-3xl'>Work Ambience</Typography>
          </div>
          <div className='w-1/4'>
            <TimerSetting />
          </div>
        </nav>

        <main className='flex min-h-screen flex-col items-center pt-4'>
          <Timer />

          <div className='grid base:grid-cols-1 md:grid-cols-4 gap-10 mt-20'>
            {data.map((item) => (
              <Card key={item.id} type={item.type} src={item.src} />
            ))}
          </div>
        </main>
      </TimeProvider>
    </>
  )
}
