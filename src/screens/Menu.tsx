import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

import { Button } from '@/components/Button'

export function Menu() {
  const { navigate } = useNavigation<any>()

  return (
    <ScrollView
      className="gap-4 p-4"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Button label="Defaut" onPress={() => navigate('Intern')} />
      <Button
        label="Secondary"
        variant="secondary"
        onPress={() => navigate('Intern')}
      />
    </ScrollView>
  )
}

// default: 'bg-primary',
// secondary: 'bg-secondary',
// destructive: 'bg-destructive',
// ghost: 'bg-slate-700',
// link: 'text-primary underline-offset-4',
