import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './checkbox.styles'
import { CheckboxProps } from './checkbox.types'

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
