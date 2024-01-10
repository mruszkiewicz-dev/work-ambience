import { clsx } from 'clsx'

export const Steper = ({
  timer,
  section,
  isBreak,
}: {
  timer: Array<any>
  section: number
  isBreak: Boolean
}) => {
  return (
    <div className='w-3/4 px-8 py-6'>
      {timer.map((item, index) => (
        <div
          key={index}
          className='relative flex flex-col items-center justify-betwen w-full space-y-8 my-8'
        >
          <div className={clsx(index !== section - 1 ? 'hidden' : 'block')}>
            <div
              className={clsx(
                'relative z-10 grid w-40 h-10 border-2 border-blue-gray-900 font-bold text-blue-gray-900 transition-all duration-300 rounded-full text-center content-center',
                index === section && !isBreak
                  ? 'bg-cyan-500 text-white'
                  : 'bg-amber-100 ',
              )}
            >
              Work {item.work}
            </div>
            <div
              className={clsx(
                'relative z-10 grid w-40 h-10 border-2 border-blue-gray-900 font-bold text-blue-gray-900 font-bold transition-all duration-300 rounded-full text-center content-center',
                index === (section === 0 ? timer.length - 1 : section - 1) &&
                  isBreak
                  ? 'bg-cyan-500 text-white'
                  : 'bg-light-green-200',
              )}
            >
              Break {item.break}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
