import { ComponentProps, ElementType } from 'react'
import { Heading } from './heading.styles'

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
