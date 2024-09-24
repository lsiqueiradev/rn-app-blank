import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet'

import { GestureResponderEvent, Pressable, Text, View } from 'react-native'

import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { cssInterop } from 'react-native-css-interop'

export type Ref = BottomSheetModal

type AlertButtonStyle = 'default' | 'cancel' | 'destructive'

interface BottomSheetAlertProps {
  title: string
  description?: string
  buttons: {
    isLoading?: boolean
    text: string
    onPress?: ((event?: GestureResponderEvent) => void) | undefined
    isPreferred?: boolean
    style?: AlertButtonStyle
  }[]
}

cssInterop(AntDesign, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

const BottomSheetAlert = forwardRef<Ref, BottomSheetAlertProps>(
  (props, ref) => {
    const { colors } = useTheme()
    const { title, buttons, description } = props
    const { dismissAll } = useBottomSheetModal()
    const { bottom } = useSafeAreaInsets()

    return (
      <BottomSheetModal
        ref={ref}
        handleComponent={null}
        enableDynamicSizing
        backdropComponent={(backDropProps) => (
          <BottomSheetBackdrop
            {...backDropProps}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}
        backgroundStyle={{
          borderRadius: 6,
          backgroundColor: colors.card,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.text,
        }}
      >
        <BottomSheetView>
          <View className="px-5 pt-5" style={{ paddingBottom: bottom + 20 }}>
            <View className="flex-row items-center justify-between">
              <Text className="text-primary text-lg font-primary-semibold">
                {title}
              </Text>
              <Pressable onPress={() => dismissAll()}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  className="text-primary"
                />
              </Pressable>
            </View>
            <View>
              {description && (
                <Text className="text-primary font-primary-regular">
                  {description}
                </Text>
              )}
              {buttons.map((btn, index) => {
                return (
                  <Button
                    key={btn.text}
                    label={btn.text}
                    loading={btn.isLoading}
                    onPress={
                      btn.style === 'cancel'
                        ? () => dismissAll()
                        : () => btn.onPress
                    }
                    style={{
                      marginTop: index === 1 ? 10 : 30,
                    }}
                    variant={btn.style === 'cancel' ? 'link' : 'default'}
                  />
                )
              })}
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    )
  },
)

BottomSheetAlert.displayName = 'BottomSheetAlert'

export { BottomSheetAlert }
