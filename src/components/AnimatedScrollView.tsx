import { PropsWithChildren } from 'react'
import { Header } from './Header'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderHome } from './HeaderHome'

interface AnimatedScrollViewProps extends PropsWithChildren {
  title?: string
  isTab?: boolean
  isHome?: boolean
  isLargeTitle?: boolean
}

const AnimatedScrollViewComponent = Animated.createAnimatedComponent(ScrollView)

export function AnimatedScrollView({
  children,
  title,
  isTab = false,
  isLargeTitle = true,
  isHome = false,
}: AnimatedScrollViewProps) {
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

      <AnimatedScrollViewComponent
        onScroll={scrollHandler}
        scrollEventThrottle={8}
        contentContainerStyle={{
          paddingTop: title && isLargeTitle && !isHome ? 54 : 0,
        }}
      >
        {children}
      </AnimatedScrollViewComponent>
    </>
  )
}
