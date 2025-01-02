import React from 'react'
import Dark from './Dark'
import { ThemeProvider } from './context/context'

const App = () => {
  return (

    <>
    <ThemeProvider>
      <Dark/>
    </ThemeProvider>
    
    </>
  )
}

export default App