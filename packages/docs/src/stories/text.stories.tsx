import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@devna-ds/react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam voluptatum nesciunt odit itaque. Fugiat, laborum nihil rerum officia ipsam repellendus debitis ex in perspiciatis ut inventore soluta modi deleniti.'
	}
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const customTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong Heading',
		as: 'strong'
	}
}

