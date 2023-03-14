import {
  Root,
  Title as TitleLib,
  Close as CloseLib,
  Viewport as ViewportLib,
} from '@radix-ui/react-toast'
import { ToastVariants, ViewportVariants } from './toast.types'
import { keyframes } from '@stitches/react'
import { CSS } from '@stitches/react/types/css-util'
import { styled } from '../../lib/stitches'

const TOAST_Z_INDEX = 2147483647

const variants: ToastVariants = {
  type: {
    primary: {},
    informative: {
      borderLeftColor: '$blue100',
      backgroundColor: '$info-500',
      color: 'White',

      [`&[data-background="off"]`]: {
        backgroundColor: '$blue100',
        color: '$gray200',
      },
    },
    negative: {
      borderLeftColor: '$danger',
      backgroundColor: '$danger',
      color: '$white',

      [`&[data-background="off"]`]: {
        backgroundColor: '$danger',
        color: '$gray200',
      },
    },
    notice: {
      backgroundColor: '$blue300',
      borderLeftColor: '$blue300',

      [`&[data-background="off"]`]: {
        backgroundColor: '$danger',
      },
    },
    positive: {
      backgroundColor: '$success',
      borderLeftColor: '$success',
      color: '$white',

      [`&[data-background="off"]`]: {
        backgroundColor: '$success',
        color: '$gray200',
      },
    },
  },
}

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const Wrapper = styled(Root, {
  backgroundColor: '$yellow100',
  borderRadius: '$md',
  borderLeftStyle: 'solid',
  borderLeftWidth: 8,
  borderLeftColor: '$yellow100',
  padding: '$5',
  paddingLeft: 'calc($5 - 8px)',
  width: 402,
  color: '$gray200',

  display: 'grid',
  gridTemplateAreas: "'content close'",
  gridTemplateColumns: 'auto min-content',
  columnGap: 15,
  alignItems: 'center',

  [`&[data-background="off"]`]: {
    backgroundColor: '$yellow100',
  },
  [`&[data-state='open']:last-child`]: {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  [`&[data-state='closed']`]: {
    animation: `${hide} 100ms ease-in`,
  },
  [`&[data-swipe='move']`]: {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  [`&[data-swipe='cancel']`]: {
    transform: 'translateX(0)',
    transition: 'transform, 200ms ease-out',
  },
  [`&[data-swipe='end']`]: {
    animation: `${swipeOut} 100ms ease-out`,
  },

  variants,
})

export const Content = styled(TitleLib, {
  gridArea: 'content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  svg: {
    minWidth: 24,
  },

  gap: '$4',
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const Close = styled(CloseLib, {
  gridArea: 'close',
  all: 'unset',
  width: 20,
  height: 20,
  cursor: 'pointer',

  svg: {
    width: 12,
    height: 12,
  },
})

const center: CSS = { left: '50%', transform: 'translateX(-50%)' }
const top: CSS = { top: 0 }
const bottom: CSS = { bottom: 0 }
const left: CSS = { left: 0 }
const right: CSS = { right: 0 }

const viewportVariants: ViewportVariants = {
  position: {
    'bottom-right': { ...bottom, ...right },
    'bottom-center': { ...bottom, ...center },
    'bottom-left': { ...bottom, ...left },
    'top-right': { ...top, ...right },
    'top-center': { ...top, ...center },
    'top-left': { ...top, ...left },
  },
}

export const Viewport = styled(ViewportLib, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: 10,
  width: 'fit-content',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: TOAST_Z_INDEX,
  outline: 'none',

  variants: viewportVariants,
})

export const IconWrapper = styled('div', {
  width: 20,
  height: 20,

  svg: {
    width: 20,
    height: 20,
  },
})
