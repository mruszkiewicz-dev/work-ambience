import { useState } from 'react'
import { Button } from '@material-tailwind/react'

interface EditStaticProps {
  closeEdit: () => void
}

export const EditStatic: React.FC<EditStaticProps> = ({ closeEdit }) => {
  const [time, setTime] = useState([{ work: 45, break: 5 }])

  const handleTimeChange = (index: number, field: string, value: string) => {
    const newTime: any = [...time]
    newTime[index][field] = value
    setTime(newTime)
  }
  const handleAddStaticTime = () => {
    console.log('save')
    closeEdit()
  }

  return (
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
        onClick={handleAddStaticTime}
      >
        Zapisz
      </Button>
    </div>
  )
}
