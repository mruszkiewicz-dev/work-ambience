export const Steper = ({ timer }) => {
  console.log(timer, 'sss')

  return (
    <div className='w-full px-8 py-4'>
      <div className='relative flex items-center justify-between w-full'>
        {timer.map((item) => (
          <>
            <div className='absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300'></div>
            <div className='absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500'></div>
            <div className='relative z-10 grid w-20 h-10 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full place-items-center'>
              Work {item.work}
            </div>
            <div className='relative z-10 grid w-20 h-10 font-bold text-gray-900 transition-all duration-300 bg-gray-600 rounded-full place-items-center'>
              Break {item.break}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
