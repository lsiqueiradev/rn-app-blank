// import { Ionicons } from '@/utils/icons'
import * as Haptics from 'expo-haptics'
import { PropsWithChildren } from 'react'
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  PressableProps,
} from 'react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function TabBarButton({
  onPress,
  children,
  ...rest
}: PropsWithChildren<{ onPress?: (e: GestureResponderEvent) => void }> &
  PressableProps) {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <AnimatedPressable
      {...rest}
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          Haptics.selectionAsync()
        }
        onPress?.(e)
      }}
      onPressIn={() => {
        scale.value = withSpring(0.92)
      }}
      onPressOut={() => {
        scale.value = withSpring(1)
      }}
      style={[animatedStyle]}
      className="flex-1 justify-center items-center pb-1.5 pt-2 gap-1.5"
    >
      {children}
    </AnimatedPressable>
  )
}
