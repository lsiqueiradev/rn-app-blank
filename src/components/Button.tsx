import { type VariantProps, cva } from 'class-variance-authority'
import { ActivityIndicator, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { cn } from '@/libs/twMerge'
import { cssInterop } from 'react-native-css-interop'
import { ReactNode } from 'react'

cssInterop(RectButton, {
  className: {
    target: 'style',
    nativeStyleToProp: {},
  },
})

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-lg gap-3',
  {
    variants: {
      variant: {
        default: 'bg-foreground',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        ghost: 'bg-slate-700',
        link: 'text-primary underline-offset-4',
      },
      size: {
        default: 'h-12 px-4',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const buttonTextVariants = cva('text-center font-primary-medium', {
  variants: {
    variant: {
      default: 'text-background',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline',
    },
    size: {
      default: 'text-lg',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof RectButton>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
  loading?: boolean
  leftSection?: ReactNode
  rightSection?: ReactNode
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  loading = false,
  leftSection,
  rightSection,
  ...props
}: ButtonProps) {
  return (
    <RectButton
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {loading ? (
        <ActivityIndicator
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses }),
          )}
        />
      ) : (
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses }),
          )}
        >
          {label}
        </Text>
      )}
    </RectButton>
  )
}

export { Button, buttonVariants, buttonTextVariants }
