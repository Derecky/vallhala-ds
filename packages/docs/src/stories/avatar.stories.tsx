import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@vallhala/react'

export default {
	title: 'Data Display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/Devna-Team.png',
		alt: 'Devna Team'
	}
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	}
}
