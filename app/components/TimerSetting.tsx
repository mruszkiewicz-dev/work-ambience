'use client'

import { useState } from 'react'
import { EditButton } from './EditButton'
import {
  Drawer,
  IconButton,
  Switch,
  Typography,
} from '@material-tailwind/react'

export const TimerSetting = () => {
  const [active, setActive] = useState(false)

  const closeDrawer = () => setActive(false)

  return (
    <>
      <div
        className='hover:text-blue-gray-500 m-0'
        onClick={() => setActive(!active)}
      >
        <EditButton />
      </div>

      <Drawer
        placement='right'
        open={active}
        onClose={closeDrawer}
        className='p-4'
      >
        <div className='space-x-2 p-1 mb-6 flex items-center justify-between text-center'>
          <h2 className='font-bold'>Ustawienia</h2>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
        <div className='pl-2 flex flex-col items-center justify-center space-y-2'>
          <div>
            <Switch
              crossOrigin={undefined}
              label={
                <div>
                  <Typography color='blue-gray' className='font-medium'>
                    Schemat
                  </Typography>
                </div>
              }
              containerProps={{
                className: '-ml-5',
              }}
            />
          </div>
          <div>
            <Switch
              crossOrigin={undefined}
              label={
                <div>
                  <Typography color='blue-gray' className='font-medium'>
                    Schemat
                  </Typography>
                </div>
              }
            />
          </div>
        </div>
      </Drawer>
    </>
  )
}
