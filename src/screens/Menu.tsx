import { Text, View } from 'react-native'

import { AnimatedScrollView } from '@/components/AnimatedScrollView'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar'

import { Feather } from '@/utils/icons'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export function Menu() {
  const { navigate } = useNavigation<any>()
  return (
    <AnimatedScrollView title="Menu" isTab>
      <View className="px-4 gap-4">
        <RectButton
          onPress={() => navigate('Profile')}
          className="p-4 bg-card rounded-md flex-row justify-between items-center"
        >
          <View className="flex-row items-center justify-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                source={{
                  uri: 'https://github.com/lsiqueiradev.png',
                }}
              />
              <AvatarFallback>LS</AvatarFallback>
            </Avatar>
            <View>
              <Text className="text-foreground font-primary-bold text-xl">
                Lucas Siqueira
              </Text>
              <Text className="text-foreground/80 font-primary-normal text-base -mt-1">
                lucas@lsiqueira.dev
              </Text>
            </View>
          </View>
          <Feather name="chevron-right" size={24} className="text-foreground" />
        </RectButton>

        <View className="bg-card rounded-md overflow-hidden">
          <RectButton className="p-4 flex-row items-center justify-between">
            <View className="flex-row items-center justify-center gap-2">
              <Feather name="shield" size={20} className="text-foreground" />
              <Text className="text-foreground font-primary-medium text-lg">
                Segurança
              </Text>
            </View>
            <Feather
              name="chevron-right"
              size={24}
              className="text-foreground"
            />
          </RectButton>
          <RectButton className="p-4 flex-row items-center justify-between">
            <View className="flex-row items-center justify-center gap-2">
              <Feather name="inbox" size={20} className="text-foreground" />
              <Text className="text-foreground font-primary-medium text-lg">
                Notificações
              </Text>
            </View>
            <Feather
              name="chevron-right"
              size={24}
              className="text-foreground"
            />
          </RectButton>
        </View>

        <View className="bg-card rounded-md overflow-hidden">
          <RectButton className="p-4 flex-row items-center justify-between">
            <View className="flex-row items-center justify-center gap-2">
              <Feather name="log-out" size={20} className="text-foreground" />
              <Text className="text-foreground font-primary-medium text-lg">
                Sair
              </Text>
            </View>
          </RectButton>
        </View>
      </View>
    </AnimatedScrollView>
  )
}
