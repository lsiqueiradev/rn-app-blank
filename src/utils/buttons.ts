import { RectButton } from 'react-native-gesture-handler'
import { cssInterop } from 'react-native-css-interop'

cssInterop(RectButton, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

export { RectButton }
