import { Text, View } from 'react-native'

import { AnimatedScrollView } from '@/components/AnimatedScrollView'

import { Feather } from '@/utils/icons'
import { RectButton } from 'react-native-gesture-handler'
import { AvatarChange } from '@/components/AvatarChange'
import { BottomSheetAlert } from '@/components/sheets/BottomSheetAlert'
import { useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export function Profile() {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  function handlePresentModalPress() {
    bottomSheetRef.current?.present()
  }

  return (
    <AnimatedScrollView title="Perfil">
      <View className="px-4 gap-4">
        <AvatarChange />
        <View className="bg-card rounded-md overflow-hidden">
          <RectButton
            className="p-4 flex-row items-center justify-between"
            onPress={handlePresentModalPress}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-medium text-lg">
                Nome
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-normal text-base">
                Lucas Siqueira
              </Text>
              <Feather name="edit-2" size={16} className="text-foreground" />
            </View>
          </RectButton>
          <RectButton
            className="p-4 flex-row items-center justify-between"
            onPress={handlePresentModalPress}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-medium text-lg">
                Email
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-normal text-base">
                lucas@lsiqueira.dev
              </Text>
              <Feather name="edit-2" size={16} className="text-foreground" />
            </View>
          </RectButton>
          <RectButton
            className="p-4 flex-row items-center justify-between"
            onPress={handlePresentModalPress}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-medium text-lg">
                Telefone
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-normal text-base">
                (11) 96463-8781
              </Text>
              <Feather name="edit-2" size={16} className="text-foreground" />
            </View>
          </RectButton>

          <RectButton
            className="p-4 flex-row items-center justify-between"
            onPress={handlePresentModalPress}
          >
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-medium text-lg">
                Senha
              </Text>
            </View>
            <View className="flex-row items-center justify-center gap-2">
              <Text className="text-foreground font-primary-normal text-base">
                Atualizar
              </Text>
              <Feather name="edit-2" size={16} className="text-foreground" />
            </View>
          </RectButton>
        </View>
      </View>
      <BottomSheetAlert
        ref={bottomSheetRef}
        title="Tem certeza que deseja sair?"
        buttons={[
          {
            text: 'Sair do APP',
            onPress: () => console.log('Teste'),
          },
          { text: 'Cancelar', style: 'cancel' },
        ]}
      />
    </AnimatedScrollView>
  )
}
