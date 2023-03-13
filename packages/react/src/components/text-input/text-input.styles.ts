import { styled } from '../../lib/stitches'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$yellow100',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    error: {
      true: {
        borderColor: '$danger',
        color: '$danger',
        input: {
          color: '$danger',
        },
      },
    },
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const InputWrapper = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ErrorContainer = styled('span', {
  fontFamily: '$default',
  fontSize: '$xs',
  color: '$danger',
  fontWeight: '$regular',
  height: '$4',

  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  textAlign: 'left',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
