import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@devna-ds/react'

export default {
	title: 'Form/Text Input',
	component: TextInput,
	
	decorators: [
		(Story) => {
			return (
				<Box as="label" css={{ display: 'flex', flexDirection: "column", gap: '$1' }}>
					<Text size='sm'>Name:</Text>
					{Story()}
				</Box>
			)
		}
	],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: 'Whats your name?'
	}
}

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
	}
}

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'test.com/',
		placeholder: 'your-name'
	}
}

export const WithError: StoryObj<TextInputProps> = {
	args: {
		error: 'Insert a valid Name'
	}
}

