import { PropsWithChildren } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import themes from '@/styles/themes'
import { useColorScheme } from 'nativewind'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export function AppProvider({ children }: PropsWithChildren) {
  const { colorScheme } = useColorScheme()
  const theme =
    themes[(colorScheme as keyof typeof themes) || 'dark'] || themes.dark

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={theme.colors.background}
      />
      <SafeAreaProvider className="flex-1">
        <GestureHandlerRootView className="flex-1">
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
