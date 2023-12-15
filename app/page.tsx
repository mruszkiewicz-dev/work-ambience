import { createContext, useContext, useState } from 'react'
import { Card } from './components/Card'
import { Edit } from './components/Edit'
import { Timer } from './components/Timer'
import { data } from '@/app/data/data'

const TimerContext = createContext({ time: [{ work: 45, break: 5 }] })

export default function Home() {
  const [time, setTime] = useState([{ work: 45, break: 5 }])

  return (
    <main className='flex min-h-screen flex-col items-center pt-4'>
      <h1 className='m-8 text-2xl z-40'>Work Ambience</h1>
      <TimerContext.Provider value={{ time }}>
        <Edit />
        <Timer />
      </TimerContext.Provider>
      <div className='grid base:grid-cols-1 md:grid-cols-4 gap-10 mt-20'>
        {data.map((item) => (
          <Card key={item.id} type={item.type} src={item.src} />
        ))}
      </div>
    </main>
  )
}
