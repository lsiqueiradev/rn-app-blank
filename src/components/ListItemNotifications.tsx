import { Notification } from '@/data/notifications'
import { Text, View } from 'react-native'

import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function ListItemNotifications({ item }: { item: Notification }) {
  const pastDate = new Date(item.receivedAt)
  const friendlyDate = formatDistanceToNowStrict(pastDate, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <View className="px-3 py-2 rounded-md bg-muted flex-row items-start justify-between gap-4">
      <View className="flex-1 gap-1">
        <Text className="text-lg text-foreground font-primary-semibold">
          {item.title}
        </Text>
        <Text className="text-md font-primary-normal text-foreground/90">
          {item.message}
        </Text>
      </View>
      <View className="items-end gap-2">
        <Text className="text-sm text-foreground font-primary-medium">
          {friendlyDate}
        </Text>
        {item.read && <View className="w-2 h-2 rounded-full bg-red-500" />}
      </View>
    </View>
  )
}
