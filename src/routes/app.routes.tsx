import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="TabApp"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
