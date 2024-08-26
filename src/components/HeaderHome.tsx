import { Ionicons } from '@/utils/icons'
import { View, Text, Image, Pressable, Platform } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { cn } from '@/libs/twMerge'

interface HeaderHomeProps {
  scrollTranslationY: SharedValue<number>
}
export function HeaderHome({ scrollTranslationY }: HeaderHomeProps) {
  const { top } = useSafeAreaInsets()
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollTranslationY.value,
      [0, 10],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }))
  return (
    <View className={cn('w-full z-50', Platform.OS === 'ios' && 'absolute')}>
      <Animated.View
        className={cn(
          'top-0 left-0 right-0',
          Platform.OS === 'ios' && 'absolute',
        )}
        style={[
          animatedStyle,
          {
            ...Platform.select({
              ios: {
                height: 56 + top,
              },
            }),
          },
        ]}
      >
        <BlurView intensity={100} tint="prominent" className="flex-1" />
      </Animated.View>

      <View style={{ height: top }} />
      <View
        className={cn(
          'px-4 flex-row h-16 justify-between items-center',
          Platform.OS === 'android' && 'bg-background',
        )}
        style={{ elevation: 4 }}
      >
        <Pressable
          onPress={() => {
            // handle onPress
          }}
        >
          <View className="flex-row items-center">
            <Image
              alt=""
              source={{
                uri: 'https://github.com/lsiqueiradev.png',
              }}
              className="w-11 h-11 rounded-full"
            />

            <View className="ml-3 gap-1">
              <Text className="font-primary-bold text-foreground text-xl leading-none">
                Lucas Siqueira
              </Text>

              <Text className="font-primary-normal text-foreground/80 text-base leading-none">
                lucas@lsiqueira.dev
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            // handle onPress
          }}
        >
          <Ionicons
            name="notifications-outline"
            size={26}
            className="text-foreground"
          />
        </Pressable>
      </View>
    </View>
  )
}
