/* eslint-disable no-unused-vars */
import { ReactElement } from 'react'
import { CSS } from '@stitches/react/types/css-util'

export type ToastType =
  | 'primary'
  | 'informative'
  | 'positive'
  | 'notice'
  | 'negative'

export type ToastBackground = 'on' | 'off'
export type ToastPosition =
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'top-left'
  | 'top-center'
  | 'top-right'

export type ToastVariants = {
  type: { [k in ToastType]: CSS }
}

export type ViewportVariants = {
  position: { [k in ToastPosition]: CSS }
}

export type ToastProps = {
  type: ToastType
  background: ToastBackground
  dismissible: boolean
  content: string
  position: ToastPosition
}

export type IconByType = { [key in ToastType]: ReactElement<SVGElement> }
