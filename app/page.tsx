'use client'

import { Card } from './components/Card'
import { Edit } from './components/Edit'
import { Timer } from './components/Timer'
import { data } from '@/app/data/data'
import { TimeProvider } from '@/app/context/TimeContext'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center pt-4'>
      <h1 className='m-8 text-2xl z-40'>Work Ambience</h1>
      <TimeProvider>
        <Edit />
        {/* <Timer /> */}
      </TimeProvider>
      <div className='grid base:grid-cols-1 md:grid-cols-4 gap-10 mt-20'>
        {data.map((item) => (
          <Card key={item.id} type={item.type} src={item.src} />
        ))}
      </div>
    </main>
  )
}
