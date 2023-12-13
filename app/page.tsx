import { Card } from './components/Card'
import { Timer } from './components/Timer'
import { data } from '@/app/data/data'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Timer />
      <div className='grid grid-cols-4 gap-10 mt-20'>
        {data.map((item) => (
          <Card key={item.id} type={item.type} />
        ))}
      </div>
    </main>
  )
}
