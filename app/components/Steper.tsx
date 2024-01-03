import { clsx } from 'clsx'

export const Steper = ({ timer, section, isBreak }) => {
  console.log(timer, 'sss')

  return (
    <div className='w-full px-8 py-4'>
      <div className='relative flex items-center justify-between w-full'>
        {timer.map((item, index) => (
          <>
            <div className='absolute left-0 top-2/4 h-1.5 w-full -translate-y-2/4  content-center'></div>
            <div className='absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500'></div>
            <div
              className={clsx(
                'relative z-10 grid w-40 h-10 font-bold text-white transition-all duration-300 rounded-full text-center content-center',
                index === section && !isBreak
                  ? 'bg-blue-gray-200'
                  : 'bg-blue-gray-900',
              )}
            >
              Work {item.work}
            </div>
            <div
              className={clsx(
                'relative z-10 grid w-40 h-10 font-bold text-white transition-all duration-300 rounded-full text-center content-center',
                index === section - 1 && isBreak
                  ? 'bg-teal-200'
                  : 'bg-teal-900',
              )}
            >
              Break {item.break}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
