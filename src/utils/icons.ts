import { Ionicons, Feather } from '@expo/vector-icons'
import { cssInterop } from 'react-native-css-interop'

cssInterop(Ionicons, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

cssInterop(Feather, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

export { Ionicons, Feather }
