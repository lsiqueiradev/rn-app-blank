import { Ionicons } from '@expo/vector-icons'
import { cssInterop } from 'react-native-css-interop'

cssInterop(Ionicons, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

export { Ionicons }
