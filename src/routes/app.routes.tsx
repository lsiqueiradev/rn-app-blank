import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'

import { Intern } from '@/screens/Intern'
import { Notifications } from '@/screens/Notifications'
import { Profile } from '@/screens/Profile'
import { Platform } from 'react-native'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}
    >
      <Screen name="TabApp" component={TabRoutes} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Intern" component={Intern} />
      <Screen name="Notifications" component={Notifications} />
    </Navigator>
  )
}
