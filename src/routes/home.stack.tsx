import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { TabNavigator } from './navigators/tab.navigator'

const { Screen } = createNativeStackNavigator()

export function HomeStack() {
  return (
    <TabNavigator screenOptions={{ headerLargeTitle: false }}>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </TabNavigator>
  )
}
