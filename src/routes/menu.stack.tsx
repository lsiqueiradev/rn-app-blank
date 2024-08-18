import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function MenuStack() {
  return (
    <Navigator>
      <Screen name="Menu" component={Home} />
    </Navigator>
  )
}
