'use client'

import { useState, useEffect } from 'react'

export const Timer = () => {
  const [nowTime, setNowTime] = useState(new Date().getTime())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNowTime(new Date().getMinutes())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formattedDate = nowTime.toLocaleString()

  return <div>{formattedDate}</div>
}
