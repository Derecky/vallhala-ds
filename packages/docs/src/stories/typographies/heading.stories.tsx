import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@devna-ds/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Custom title'
	}
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const customTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
		size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
	},
	parameters: {
		docs: {
			description: {
				story: 'By default the Heading is always an `h2`, but can change this with `as` attribute'
			}
		}
	}
}
