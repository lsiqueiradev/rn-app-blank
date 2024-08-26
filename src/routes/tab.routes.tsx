import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeStack } from './home.stack'
import { MenuStack } from './menu.stack'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeStack" component={HomeStack} />
      <Screen name="Tab1Stack" component={MenuStack} />
      <Screen name="Tab2Stack" component={MenuStack} />
      <Screen name="MenuStack" component={MenuStack} />
    </Navigator>
  )
}
