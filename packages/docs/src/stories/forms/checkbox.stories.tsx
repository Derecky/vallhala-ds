import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@devna-ds/react'

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	
	decorators: [
		(Story) => {
			return (
				<Box as="label" css={{ display: 'flex', flexDirection: "row", gap: '$2', alignItems: 'center' }}>
					{Story()}
					<Text size='sm'>Accept terms of use</Text>
				</Box>
			)
		}
	],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
	args: {
		disabled: true,
	}
}

