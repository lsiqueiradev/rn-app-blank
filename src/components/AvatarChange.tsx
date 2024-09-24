import { Pressable, View } from 'react-native'

import { Avatar, AvatarFallback, AvatarImage } from './Avatar'
import { Feather } from '@/utils/icons'

export function AvatarChange() {
  return (
    <Pressable
      onPress={() => alert('Change Avatar User')}
      className="flex-row items-center justify-center"
    >
      <View className="relative bg-card rounded-full p-1 border border-muted">
        <Avatar className="w-28 h-28">
          <AvatarImage
            source={{ uri: 'https://github.com/lsiqueiradev.png' }}
          />
          <AvatarFallback>LS</AvatarFallback>
        </Avatar>
        <View className="top-0 right-0 absolute bg-card border border-accent p-2 rounded-full">
          <Feather name="camera" size={14} />
        </View>
      </View>
    </Pressable>
  )
}
