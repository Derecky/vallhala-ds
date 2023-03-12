import { ComponentProps, ElementType } from 'react'
import { Box } from './Box'

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
