import type { Meta, StoryObj } from '@storybook/react'

import { ColorSwatch } from './ColorSwatch'
import { tokens } from 'tokens'

const meta = {
	title: 'Doc Blocks/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		color: {
			control: 'select',
			options: Object.keys(tokens.color),
		},
	},
	args: {
		color: 'fgDefault',
	},
} satisfies Meta<typeof ColorSwatch>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {
		color: 'fgDefault',
	},
}
