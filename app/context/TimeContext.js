import { useState, createContext } from 'react'

const TimeContext = createContext()

const TimeProvider = ({ children }) => {
  const [timer, setTimer] = useState([
    { work: 0.2, break: 0.1 },
    { work: 4, break: 0.3 },
    { work: 1, break: 5 },
  ])
  return (
    <TimeContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimeContext.Provider>
  )
}

export { TimeContext, TimeProvider }
