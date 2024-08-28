import { Feather } from '@/utils/icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface HeaderProps {
  title?: string
  isTab?: boolean
  isLargeTitle?: boolean
  scrollTranslationY?: SharedValue<number>
}

export function Header({
  title,
  isTab = false,
  isLargeTitle = true,
  scrollTranslationY,
}: HeaderProps) {
  const { top } = useSafeAreaInsets()
  const { goBack, navigate } = useNavigation<any>()

  const headerTitleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollTranslationY ? scrollTranslationY.value : 0,
        [40, 55],
        [isLargeTitle ? 0 : 1, 1],
      ),
    }
  })

  const borderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollTranslationY ? scrollTranslationY.value : 0,
        [40, 55],
        [0, 1],
      ),
    }
  })

  const headingStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollTranslationY ? scrollTranslationY.value : 0,
            [0, 150],
            [0, -120],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }
  })

  return (
    <View className="relative">
      <View className="z-50 bg-background">
        <View style={{ height: top }} />
        <View className="h-16 flex-row w-full pl-1.5 items-center justify-between gap-1">
          {!isTab && (
            <Pressable className="rounded-md p-2" onPress={() => goBack()}>
              <Feather name="arrow-left" size={24} />
            </Pressable>
          )}
          <View className="flex-1 pl-2">
            {title && (
              <Animated.Text
                style={[headerTitleStyle]}
                className="font-primary-bold text-xl text-foreground leading-normal"
                numberOfLines={1}
              >
                {title}
              </Animated.Text>
            )}
          </View>
          <View className="flex-row h-full pr-2 items-center justify-center gap-4">
            {isTab && (
              <Pressable
                className="rounded-md p-2"
                onPress={() => navigate('Notifications')}
              >
                <Feather name="bell" size={22} />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <Animated.View style={[borderStyle]} className="h-px bg-border" />
      {title && isLargeTitle && (
        <Animated.View
          style={[headingStyle]}
          className="px-4 pt-2 absolute top-full z-40"
        >
          <Text
            className="font-primary-bold text-3xl text-foreground"
            numberOfLines={1}
          >
            {title}
          </Text>
        </Animated.View>
      )}
    </View>
  )
}
