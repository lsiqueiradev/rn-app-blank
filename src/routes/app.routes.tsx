import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tab.routes'
import { Intern } from '@/screens/Intern'
import { TabNavigator } from './navigators/tab.navigator'
import { HeaderBack } from '@/components/HeaderBack'

const { Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <TabNavigator screenOptions={{ headerBackTitleVisible: false }}>
      <Screen
        name="TabApp"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Screen
        name="Intern"
        component={Intern}
        options={{ headerLeft: () => <HeaderBack /> }}
      />
    </TabNavigator>
  )
}
