import { Card } from './components/Card'
import { Timer } from './components/Timer'
import { data } from '@/app/data/data'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Timer />
      {data.map((item) => (
        <Card key={item.id} type={item.type} />
      ))}
    </main>
  )
}
