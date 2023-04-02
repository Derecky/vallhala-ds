import { FunctionComponent } from 'react'
import { SkeletonContainer } from './skeleton.styles'
import { SkeletonProps } from './skeleton.types'

const defaultSize = (value: number) => `${value}px`

export const Skeleton: FunctionComponent<SkeletonProps> = ({
  height = 20,
  width = '100%',
  radius = 'standard',
}) => {
  return (
    <SkeletonContainer
      radius={radius}
      css={{
        height:
          typeof height === 'number' && !isNaN(height)
            ? defaultSize(height)
            : height,
        width:
          typeof width === 'number' && !isNaN(width)
            ? defaultSize(width)
            : width,
      }}
    />
  )
}
