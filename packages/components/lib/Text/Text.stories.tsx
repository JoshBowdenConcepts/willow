import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps, TextTags } from './Text'

const meta = {
	title: 'Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {
		children: 'Text',
	},
}

export const AllTypes: Story = {
	render: () => {
		const components = TextTags.map((tag) => (
			<Text as={tag as TextProps['as']}>{tag}</Text>
		))
		return <>{components}</>
	},
}
