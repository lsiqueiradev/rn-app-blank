import { ComponentPropsWithoutRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { Header } from './Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderHome } from './HeaderHome'

interface AnimatedFlashListProps
  extends ComponentPropsWithoutRef<typeof FlatList> {
  title?: string
  isTab?: boolean
  isLargeTitle?: boolean
  isHome?: boolean
}

const AnimatedFlatListComponent = Animated.createAnimatedComponent(FlatList)

export function AnimatedFlashList({
  title,
  isTab = false,
  isLargeTitle = true,
  isHome = false,
  ...rest
}: AnimatedFlashListProps) {
  const { bottom } = useSafeAreaInsets()
  const translationY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y
  })

  return (
    <>
      {isHome ? (
        <HeaderHome scrollTranslationY={translationY} />
      ) : (
        <Header
          title={title}
          isTab={isTab}
          isLargeTitle={isLargeTitle}
          scrollTranslationY={translationY}
        />
      )}
      <AnimatedFlatListComponent
        onScroll={scrollHandler}
        scrollEventThrottle={8}
        contentContainerStyle={{
          paddingTop: title ? 54 : 0,
          paddingBottom: bottom + 14,
        }}
        showsVerticalScrollIndicator={false}
        {...rest}
      />
    </>
  )
}
