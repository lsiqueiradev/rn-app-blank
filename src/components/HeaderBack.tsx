import { Platform, Pressable } from 'react-native'

import { Ionicons } from '@/utils/icons'
import { useNavigation } from '@react-navigation/native'
import { cn } from '@/libs/twMerge'

export function HeaderBack() {
  const { goBack } = useNavigation()
  return (
    <Pressable
      className={cn('-ml-2.5 p-2', Platform.OS === 'android' && 'mt-0.5')}
      onPress={() => goBack()}
    >
      <Ionicons
        name="arrow-back-circle-outline"
        className="text-foreground"
        size={28}
      />
    </Pressable>
  )
}
