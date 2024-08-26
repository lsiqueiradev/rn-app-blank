import { useNavigation } from '@react-navigation/native'
import { Platform, ScrollView } from 'react-native'

import { Button } from '@/components/Button'
import { HeaderHome } from '@/components/HeaderHome'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export function Home() {
  const { navigate } = useNavigation<any>()
  const { top } = useSafeAreaInsets()

  const translationY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y
  })

  return (
    <>
      <HeaderHome scrollTranslationY={translationY} />
      <AnimatedScrollView
        className="gap-4 p-4"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: Platform.OS === 'ios' ? 58 + top : 0,
        }}
      >
        <Button label="Defaut" onPress={() => navigate('Intern')} />
        <Button
          label="Secondary"
          variant="secondary"
          onPress={() => navigate('Intern')}
        />
      </AnimatedScrollView>
    </>
  )
}
