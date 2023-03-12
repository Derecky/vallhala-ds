import { ComponentProps, ElementType } from 'react'
import { Box } from './box.styles'

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
