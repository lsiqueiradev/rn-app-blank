import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabNavigator } from './navigators/tab.navigator'

import { Menu } from '@/screens/Menu'

const { Screen } = createNativeStackNavigator()

export function MenuStack() {
  return (
    <TabNavigator>
      <Screen name="Menu" component={Menu} />
    </TabNavigator>
  )
}
