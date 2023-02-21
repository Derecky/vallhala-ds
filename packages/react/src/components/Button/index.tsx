import { FunctionComponent, PropsWithChildren } from 'react'
import { ButtonContainer } from './Button.styles'

export const Button: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}
