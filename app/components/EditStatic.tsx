import { useState, useContext } from 'react'
import { Button } from '@material-tailwind/react'
import { TimeContext } from '@/app/context/TimeContext'

interface EditStaticProps {
  closeEdit: () => void
}

export const EditStatic: React.FC<EditStaticProps> = ({ closeEdit }) => {
  const { timer, setTimer } = useContext(TimeContext)

  const handleTimeChange = (index: number, field: string, value: string) => {
    const newTime: any = [...timer]
    newTime[index][field] = value
    setTimer(newTime)
  }
  const handleAddStaticTime = () => {
    console.log('save')
    closeEdit()
  }
  console.log(timer)
  return (
    <div className='flex w-20 flex-col gap-2 mt-4 text-center'>
      <label>Work</label>
      <input
        placeholder='Work'
        className='bg-blue-gray-900 text-white rounded-md p-2'
        value={timer[0].work}
        onChange={(e) => handleTimeChange(0, 'work', e.target.value)}
      />
      <label>Break</label>
      <input
        placeholder='Break'
        className='bg-blue-gray-900 text-white rounded-md p-2'
        value={timer[0].break}
        onChange={(e) => handleTimeChange(0, 'break', e.target.value)}
      />
      <Button
        variant='outlined'
        className='bg-blue-gray-100 text-center p-2 mt-4'
        onClick={handleAddStaticTime}
      >
        Zapisz
      </Button>
    </div>
  )
}
