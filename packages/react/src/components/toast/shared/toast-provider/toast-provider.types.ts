import { PropsWithChildren } from 'react'
import { ToastProps } from '../../toast.types'

export type ToastPropsWithId = ToastProps & { id: string }

export type ToastContextProps = {
  handleOpen: (
    params: Partial<ToastProps> & Pick<ToastProps, 'content'>,
  ) => void
}

export type ToastProviderProps = {} & PropsWithChildren
