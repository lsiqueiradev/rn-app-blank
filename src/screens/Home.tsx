import { AnimatedScrollView } from '@/components/AnimatedScrollView'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'
import { Ionicons } from '@/utils/icons'
import { Pressable, Text, View } from 'react-native'

export function Home() {
  return (
    <AnimatedScrollView title="Home" isTab isHome>
      <View className="p-4 gap-2">
        <SectionTitle className="mb-0.5">Atalhos</SectionTitle>
        <SectionTitle className="mb-0.5">Meus Seguros</SectionTitle>
        <View className="bg-card rounded-md">
          <View className="p-5 pb-0 flex-row items-center gap-4">
            <View className="p-2 rounded-md bg-accent">
              <Ionicons name="car" size={32} className="text-foreground" />
            </View>
            <View>
              <Text className="font-primary-semibold text-lg text-foreground">
                ASD-2D64
              </Text>
              <Text className="font-primary-normal text-foreground -mt-1">
                Polo Comf. 200TSI
              </Text>
            </View>
          </View>
          <View className="p-5 border-b-hairline border-foreground/30">
            <Button label="Cartão do Segurado" />
          </View>
          <View className="p-5 pb-0 gap-2">
            <Text className="mb-1 font-primary-normal text-foreground">
              Vigência de{' '}
              <Text className="font-primary-semibold">
                08/02/2024 à 08/02/2025
              </Text>
            </Text>
            <View className="flex-row items-center justify-between">
              <Text className="font-primary-normal text-foreground">
                Parcela <Text className="font-primary-semibold">5 de 12</Text>
              </Text>
              <Pressable>
                <Text className="font-primary-semibold text-foreground text-base underline">
                  Ver parcelas
                </Text>
              </Pressable>
            </View>
            <View className="flex-row gap-1.5">
              <View className="h-3 flex-1 bg-green-600 rounded-l-md" />
              <View className="h-3 flex-1 bg-green-600" />
              <View className="h-3 flex-1 bg-green-600" />
              <View className="h-3 flex-1 bg-green-600" />
              <View className="h-3 flex-1 bg-yellow-500" />
              <View className="h-3 flex-1 bg-accent" />
              <View className="h-3 flex-1 bg-accent" />
              <View className="h-3 flex-1 bg-accent" />
              <View className="h-3 flex-1 bg-accent" />
              <View className="h-3 flex-1 bg-accent rounded-r-md" />
            </View>
            <View className="bg-muted p-3  mt-2 rounded-md">
              <Text className="mb-1 font-primary-normal text-foreground leading-relaxed">
                Próxima parcela de
                <Text className="font-primary-semibold"> R$ 204,36</Text> vence
                em <Text className="font-primary-semibold">15/07/2024</Text>
              </Text>
            </View>
          </View>
          <View className="p-5">
            <Button label="Solicitar assistência" />
          </View>
        </View>
      </View>
    </AnimatedScrollView>
  )
}
