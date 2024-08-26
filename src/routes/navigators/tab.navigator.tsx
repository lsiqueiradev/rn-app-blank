import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'

import { Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { PropsWithChildren } from 'react'

const { Navigator } = createNativeStackNavigator()

export function TabNavigator({
  children,
  screenOptions,
}: PropsWithChildren<{
  screenOptions?: NativeStackNavigationOptions
}>) {
  const { colors } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerLargeTitle: true,
        headerTransparent: Platform.OS === 'ios',
        headerBlurEffect: 'prominent',
        headerLargeStyle: {
          backgroundColor: colors.background,
        },
        headerLargeTitleStyle: {
          fontFamily: 'Montserrat-Bold',
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat-Bold',
        },
        ...screenOptions,
      }}
    >
      {children}
    </Navigator>
  )
}
