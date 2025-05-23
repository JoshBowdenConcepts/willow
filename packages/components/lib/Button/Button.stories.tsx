import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		as: {
			control: 'radio',
			options: ['button', 'a'],
		},
	},
	args: {
		as: 'button',
	},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {
		children: 'Button Text',
	},
}

export const AsLink: Story = {
	render: () => {
		return (
			<Button as="a" href="#">
				Link Text
			</Button>
		)
	},
}
