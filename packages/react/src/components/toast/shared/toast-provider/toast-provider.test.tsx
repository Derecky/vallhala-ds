import { fireEvent, render, screen } from '@testing-library/react'
import { ToastProps } from '../../toast.types'
import { ToastProvider, useToast } from './toast-provider'

const mockToast = jest.fn()

const props: ToastProps = {
  content: 'content',
  background: 'on',
  dismissible: true,
  type: 'positive',
  position: 'top-center',
}

jest.mock('../../toast', () => ({
  __esModule: true,
  Toast: (props: any) => {
    mockToast(props)
    return <div />
  },
}))

const openToast = (trigger: RegExp) => {
  const triggerElement = screen.getByText(trigger)
  fireEvent.click(triggerElement)
}

describe('toast provider', () => {
  const Trigger = () => {
    const { handleOpen } = useToast()
    return <button onClick={() => handleOpen(props)}>open</button>
  }

  beforeEach(() => {
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    )
  })

  test('should render toast with correct props', () => {
    openToast(/open/i)
    expect(mockToast).toBeCalledWith(expect.objectContaining(props))
  })
})

describe('toast provider pass default props to toast', () => {
  const Trigger = () => {
    const { handleOpen } = useToast()
    return (
      <button onClick={() => handleOpen({ content: props.content })}>
        open
      </button>
    )
  }
  beforeEach(() => {
    render(
      <ToastProvider>
        <Trigger />
      </ToastProvider>,
    )
  })

  test('should render toast with default type', () => {
    openToast(/open/i)
    expect(mockToast).toBeCalledWith(
      expect.objectContaining({ type: 'primary' }),
    )
  })

  test('should render toast with default background', () => {
    openToast(/open/i)
    expect(mockToast).toBeCalledWith(
      expect.objectContaining({ background: 'on' }),
    )
  })

  test('should render toast with default dismissible', () => {
    openToast(/open/i)
    expect(mockToast).toBeCalledWith(
      expect.objectContaining({ dismissible: true }),
    )
  })
})
