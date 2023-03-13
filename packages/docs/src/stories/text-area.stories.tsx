import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@devna-ds/react'

export default {
	title: 'Form/Text Area',
	component: TextArea,
	
	decorators: [
		(Story) => {
			return (
				<Box as="label" css={{ display: 'flex', flexDirection: "column", gap: '$1' }}>
					<Text size='sm'>Biography:</Text>
					{Story()}
				</Box>
			)
		}
	],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: 'Tell more about you!'
	}
}

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true,
	}
}



