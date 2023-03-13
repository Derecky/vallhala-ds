import { ComponentProps } from 'react'
import { Input } from './text-input.styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  error?: string
}
