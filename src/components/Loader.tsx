import { View } from 'react-native'

interface LoaderProps {
  size?: 'large' | 'small'
  color?: string
}

export function Loader({ color, size = 'small' }: LoaderProps) {
  return (
    <View
      style={{ borderRadius: 9.5 }}
      className="animate-spin w-6 h-6 border-solid border-t-[2.5px] border-t-background/20 border-b-[2.5px] border-b-background/20 border-l-[2.5px] border-l-background/20 border-r-[2.5px] border-r-background/80"
    />
  )
}
