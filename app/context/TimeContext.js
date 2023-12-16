import { useState, createContext } from 'react'

const TimeContext = createContext()

const TimeProvider = ({ children }) => {
  const [timer, setTimer] = useState({ time: [{ work: 45, break: 5 }] })

  return (
    <TimeContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimeContext.Provider>
  )
}

export { TimeContext, TimeProvider }
