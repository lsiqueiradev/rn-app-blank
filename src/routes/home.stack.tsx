import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function HomeStack() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  )
}
