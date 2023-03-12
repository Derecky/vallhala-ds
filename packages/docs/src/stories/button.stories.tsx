import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@vallhala/react'

export default {
	title: 'Inputs/Button',
	component: Button,
	args: {
		children: 'Send'
	}
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'Create new'
	}
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',

	}
}

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm'
	}
}