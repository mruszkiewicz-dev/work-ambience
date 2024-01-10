import { useState, createContext } from 'react'

const TimeContext = createContext()

const TimeProvider = ({ children }) => {
  const [timer, setTimer] = useState([
    { work: 0.2, break: 0.1 },
    { work: 0.1, break: 0.1 },
    { work: 0.3, break: 0.1 },
  ])
  return (
    <TimeContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimeContext.Provider>
  )
}

export { TimeContext, TimeProvider }
