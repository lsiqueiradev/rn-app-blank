import { Feather } from '@/utils/icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

interface HeaderHomeProps {
  title?: string
  isTab?: boolean
  scrollTranslationY?: SharedValue<number>
  isLargeTitle?: boolean
}

export function HeaderHome({ scrollTranslationY }: HeaderHomeProps) {
  const { top } = useSafeAreaInsets()
  const { navigate } = useNavigation<any>()

  const borderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollTranslationY ? scrollTranslationY.value : 0,
        [40, 55],
        [0, 1],
      ),
    }
  })

  return (
    <View className="relative">
      <View className="z-50 bg-background">
        <View style={{ height: top }} />
        <View className="h-16 flex-row w-full items-center justify-between gap-1">
          <Pressable onPress={() => navigate('Profile')}>
            <View className="flex-1 pl-4 flex-row gap-2 items-center">
              <Avatar>
                <AvatarImage
                  source={{
                    uri: 'https://github.com/lsiqueiradev.png',
                  }}
                />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              <View className="gap-1">
                <Text className="font-primary-bold text-foreground text-xl">
                  Olá, Lucas Siqueira
                </Text>
                <Text className="font-primary-normal text-foreground/90 text-base -mt-2">
                  lucas@lsiqueira.dev
                </Text>
              </View>
            </View>
          </Pressable>
          <View className="flex-row h-full pr-2 items-center justify-center gap-4">
            <Pressable
              className="rounded-md p-2"
              onPress={() => navigate('Notifications')}
            >
              <Feather name="bell" size={22} className="text-foreground" />
            </Pressable>
          </View>
        </View>
      </View>
      <Animated.View style={[borderStyle]} className="h-px bg-border" />
    </View>
  )
}
