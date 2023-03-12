import { AvatarContainer, AvatarFallback, AvatarImage } from './avatar.styles'
import { User } from 'phosphor-react'
import { AvatarProps } from './avatar.types'

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
