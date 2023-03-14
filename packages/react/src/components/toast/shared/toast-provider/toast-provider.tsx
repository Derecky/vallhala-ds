import { createContext, FunctionComponent, useContext, useState } from 'react'
import {
  ToastContextProps,
  ToastPropsWithId,
  ToastProviderProps,
} from './toast-provider.types'
import { Provider } from '@radix-ui/react-toast'
import { Toast } from '../../toast'
import { generateUUID } from '../../../../utils/uuid'

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps)

export const ToastProvider: FunctionComponent<ToastProviderProps> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastPropsWithId[]>([])

  const handleOpen: ToastContextProps['handleOpen'] = ({
    type = 'primary',
    background = 'on',
    dismissible = true,
    position = 'bottom-right',
    content,
  }) => {
    setToasts((old) => {
      const newToast: ToastPropsWithId = {
        type,
        background,
        dismissible,
        content,
        position,
        id: generateUUID(),
      }
      return [...old.slice(-9), newToast]
    })
  }

  return (
    <ToastContext.Provider value={{ handleOpen }}>
      <Provider>
        {children}
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </Provider>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
