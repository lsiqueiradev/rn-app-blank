import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { TabBarButton } from './TabBarButton'

export function TabBarBottom({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) {
  const { navigate } = useNavigation<any>()

  return (
    <View className="bg-background">
      <View className="h-px bg-border" />
      <View className="flex-row w-full items-center justify-center gap-0.5">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index

          function onPress() {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TabBarButton
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {typeof options.tabBarIcon === 'function'
                ? options.tabBarIcon({
                    focused: isFocused,
                    color: 'black',
                    size: 22,
                  })
                : null}
              <Text className="text-foreground font-primary-semibold text-sm leading-none">
                {label.toString()}
              </Text>
            </TabBarButton>
          )
        })}
      </View>
      <View style={{ height: insets.bottom }} />
    </View>
  )
}
