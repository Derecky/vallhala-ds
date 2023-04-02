import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonProps, Text } from '@devna-ds/react'
import { FunctionComponent } from 'react'

export default {
	title: 'Feedback/Skeleton',
	component: Skeleton,
	args: {
		height: 20,
		width: 200,
		radius: 'standard'
	},
	argTypes: {
		height: { type: 'number'},
		width: { type: 'number'},
		radius: {
      control: { type: null },
		}
  },
} as Meta<SkeletonProps>

export const Primary: StoryObj<SkeletonProps> = {
	name: 'Line',
}

export const Circle: StoryObj<SkeletonProps> = {
	args: {
		radius: 'full',
	}
}

export const Retangle: StoryObj<SkeletonProps> = {
	args: {
		radius: 'standard',
		height: 100,
		width: 400,
	}
}

export const Compound: FunctionComponent = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: 12, maxWidth: 300}}>
				<Skeleton width={75} height={75} radius='full'/>
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', }}>
					<Skeleton height={18}/>
					<Skeleton height={18}/>
					<Skeleton height={18}/>
				</div>
			</div>
			<div style={{ display: 'flex', gap: 12, flexDirection: 'column', marginTop: 12, maxWidth: 300}}>
				<Skeleton height={100}/>
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</div>
		</>
	)
}


