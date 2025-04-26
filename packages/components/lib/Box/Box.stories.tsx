import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Box } from './Box'

const meta = {
	title: 'Components/Box',
	component: Box,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {
		children: 'Box',
	},
}

export const InternalPlayground: Story = {
	render: () => {
		return (
			<Box padding={[100]} margin={[100]} display="flex">
				Something
			</Box>
		)
	},
}
