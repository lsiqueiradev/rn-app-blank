import { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

export function SectionTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <View className={className}>
      <Text className="font-primary-bold text-xl text-foreground">
        {children}
      </Text>
    </View>
  )
}
