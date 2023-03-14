import { FunctionComponent } from 'react'
import { CheckCircle, Info, X, XCircle, Star } from 'phosphor-react'

import * as S from './toast.styles'
import { IconByType, ToastProps } from './toast.types'

const iconByType: IconByType = {
  positive: <CheckCircle />,
  informative: <Info />,
  negative: <X />,
  notice: <XCircle />,
  primary: <Star />,
}

export const Toast: FunctionComponent<ToastProps> = ({
  background,
  dismissible,
  type,
  content,
  position,
}) => {
  return (
    <>
      <S.Wrapper type={type} data-background={background}>
        <S.Content title={content}>
          <S.IconWrapper>{iconByType[type]}</S.IconWrapper>
          {content}
        </S.Content>
        {dismissible && (
          <S.Close aria-label="close">
            <X />
          </S.Close>
        )}
      </S.Wrapper>
      <S.Viewport position={position} />
    </>
  )
}
