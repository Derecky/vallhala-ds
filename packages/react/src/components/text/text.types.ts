import { ComponentProps, ElementType } from 'react'
import { Text } from './text.styles'

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
