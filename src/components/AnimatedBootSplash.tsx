import { useState } from 'react'
import { Animated, Dimensions } from 'react-native'
import BootSplash from 'react-native-bootsplash'

type Props = {
  onAnimationEnd: () => void
}

export const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1))
  const [translateY] = useState(() => new Animated.Value(0))

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash/manifest.json'),

    logo: require('../../assets/bootsplash/logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const { height } = Dimensions.get('window')

      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start()

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd()
      })
    },
  })

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ translateY }] }]}
      />
    </Animated.View>
  )
}
