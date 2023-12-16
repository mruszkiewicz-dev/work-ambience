import { useState, createContext } from 'react'

const TimeContext = createContext()

const TimeProvider = ({ children }) => {
  const [timer, setTimer] = useState([{ work: 45, break: 5 }])
  console.log(timer, 'ss')
  return (
    <TimeContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimeContext.Provider>
  )
}

export { TimeContext, TimeProvider }
