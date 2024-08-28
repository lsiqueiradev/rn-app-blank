import { Pressable, Text, View } from 'react-native'

import { AnimatedFlashList } from '@/components/AnimatedFlashList'
import { ListItemNotifications } from '@/components/ListItemNotifications'

import notifications, { Notification } from '@/data/notifications'

export function Notifications() {
  return (
    <AnimatedFlashList
      title="Notificações"
      data={notifications}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => (
        <View className="flex-row mb-4">
          <Pressable className="border border-foreground rounded-full px-2 py-0.5">
            <Text className="font-primary-medium text-sm text-foreground">
              Não Lidas
            </Text>
          </Pressable>
        </View>
      )}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={({ item }) => (
        <ListItemNotifications item={item as Notification} />
      )}
    />
  )
}
