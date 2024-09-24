import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeStack } from './home.stack'
import { TabBarBottom } from '@/components/TabBarBottom'
import { Feather } from '@/utils/icons'
import { cn } from '@/libs/twMerge'
import { Tab3 } from '@/screens/Tab3'
import { Menu } from '@/screens/Menu'
import { Tab2 } from '@/screens/Tab2'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBarBottom {...props} />}
    >
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Início',
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name="home"
              size={size}
              className={cn(focused ? 'text-foreground' : 'text-foreground/60')}
            />
          ),
        }}
      />
      <Screen
        name="Tab2"
        component={Tab2}
        options={{
          title: 'Tab 2',
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name="alert-triangle"
              size={size}
              className={cn(focused ? 'text-foreground' : 'text-foreground/60')}
            />
          ),
        }}
      />
      <Screen
        name="Tab3"
        component={Tab3}
        options={{
          headerShown: false,
          title: 'Tab 3',
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name="alert-triangle"
              size={size}
              className={cn(focused ? 'text-foreground' : 'text-foreground/60')}
            />
          ),
        }}
      />
      <Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused, size }) => (
            <Feather
              name="grid"
              size={size}
              className={cn(
                focused ? 'text-foreground/80' : 'text-foreground/60',
              )}
            />
          ),
        }}
      />
    </Navigator>
  )
}
