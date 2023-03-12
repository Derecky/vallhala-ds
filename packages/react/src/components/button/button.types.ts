import { ComponentProps, ElementType } from 'react'
import { Button } from './button.styles'

export interface ButtonProps extends ComponentProps<typeof Button> {
  as: ElementType
}
