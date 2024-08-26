import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export function Intern() {
  return (
    <ScrollView
      className="gap-4 p-4"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text>Screen Intern</Text>
    </ScrollView>
  )
}
