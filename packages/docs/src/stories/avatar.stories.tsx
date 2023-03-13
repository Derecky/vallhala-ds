import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@devna-ds/react'

export default {
	title: 'Data Display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/Devna-Team.png',
		alt: 'Devna Team'
	},
	argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	}
}
