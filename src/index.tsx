import { useState } from 'react'

import { AnimatedBootSplash } from './components/AnimatedBootSplash'

import { AppProvider } from './hooks'
import { Routes } from './routes'
import { StatusBar } from 'expo-status-bar'

export function App() {
  const [visible, setVisible] = useState(true)

  return (
    <AppProvider>
      <Routes />
      {visible && (
        <>
          <StatusBar
            style="dark"
            translucent={false}
            backgroundColor="#000000"
          />
          <AnimatedBootSplash
            onAnimationEnd={() => {
              setVisible(false)
            }}
          />
        </>
      )}
    </AppProvider>
  )
}
