import { useNavigation } from '@react-navigation/native'

import { Button } from '@/components/Button'
import { AnimatedScrollView } from '@/components/AnimatedScrollView'
import { View } from 'react-native'

export function Intern() {
  const { navigate } = useNavigation<any>()

  return (
    <AnimatedScrollView title="Página Interna" isLargeTitle={false}>
      <View className="px-4">
        <Button label="Defaut" onPress={() => navigate('Intern')} />
        <Button
          label="Secondary"
          variant="secondary"
          onPress={() => navigate('Intern')}
        />
      </View>
    </AnimatedScrollView>
  )
}
