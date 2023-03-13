import { ElementRef, forwardRef } from 'react'
import * as S from './text-input.styles'
import { TextInputProps } from './text-input.types'

export const TextInput = forwardRef<ElementRef<typeof S.Input>, TextInputProps>(
  ({ prefix, error, ...props }: TextInputProps, ref) => {
    return (
      <S.InputWrapper>
        <S.TextInputContainer error={!!error}>
          {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
          <S.Input ref={ref} {...props} />
        </S.TextInputContainer>
        <S.ErrorContainer>{error ?? ' '}</S.ErrorContainer>
      </S.InputWrapper>
    )
  },
)

TextInput.displayName = 'TextInput'
