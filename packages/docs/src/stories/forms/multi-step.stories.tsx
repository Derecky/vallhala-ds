import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, MultiStep, MultiStepProps } from '@devna-ds/react'

export default {
	title: 'Form/Multi Step',
	component: MultiStep,
	args: {
		size: 7,
		currentStep: 3
	},
	decorators: [
		(Story) => {
			return (
				<Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
					{Story()}
				</Box>
			)
		}
	],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}


