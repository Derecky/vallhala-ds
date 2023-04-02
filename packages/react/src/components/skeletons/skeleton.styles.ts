import { styled, keyframes } from '../../lib/stitches'

const skeletonStripe = keyframes({
  '0%': {
    left: '-200px',
  },
  '100%': {
    left: 'calc(100% + 200px)',
  },
})

export const SkeletonContainer = styled('span', {
  display: 'inline-block',
  height: '$height',
  width: '$width',
  background: '$blue100',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '-200px',
    top: 0,
    width: '200px',
    height: '100%',
    background:
      'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
    animation: `${skeletonStripe} 1.5s linear 0s infinite`,
  },

  variants: {
    radius: {
      full: {
        borderRadius: '$full',
      },
      standard: {
        borderRadius: '$md',
      },
    },
  },
  defaultVariants: {
    radius: 'standard',
  },
})
