export default {
  expo: {
    name: 'RN APP',
    slug: 'rn-app-blank',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'rn-app-blank',
    userInterfaceStyle: 'automatic',
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.lsiqueiradev.rnappblank',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#000000',
      },
      package: 'com.lsiqueiradev.rnappblank',
    },
    plugins: [
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/Montserrat-Black.ttf',
            './assets/fonts/Montserrat-Bold.ttf',
            './assets/fonts/Montserrat-Light.ttf',
            './assets/fonts/Montserrat-Regular.ttf',
            './assets/fonts/Montserrat-Medium.ttf',
            './assets/fonts/Montserrat-Thin.ttf',
            './assets/fonts/Montserrat-ExtraBold.ttf',
            './assets/fonts/Montserrat-ExtraLight.ttf',
            './assets/fonts/Montserrat-SemiBold.ttf',
          ],
        },
      ],
      [
        'react-native-bootsplash',
        {
          assetsDir: 'assets/bootsplash',
          android: {
            parentTheme: 'EdgeToEdge',
            darkContentBarStyle: false,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
}
