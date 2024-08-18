import { PropsWithChildren } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <NavigationContainer>
      <StatusBar style="auto" translucent={false} backgroundColor="#FFFFFF" />
      <SafeAreaProvider className="flex-1">
        <GestureHandlerRootView className="flex-1">
          {children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
