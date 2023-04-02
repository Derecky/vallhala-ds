import { ComponentProps } from '@stitches/react'
import { SkeletonContainer } from './skeleton.styles'

export interface SkeletonProps
  extends ComponentProps<typeof SkeletonContainer> {
  width?: number | string
  height?: number | string
}
