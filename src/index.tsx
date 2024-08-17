import { Home } from '@/screens/Home'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View } from 'react-native'
import { AnimatedBootSplash } from './components/AnimatedBootSplash'

export function App() {
  const [visible, setVisible] = useState(true)

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Home />
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false)
          }}
        />
      )}
    </View>
  )
}
