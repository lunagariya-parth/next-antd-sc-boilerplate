import { Button } from '.'
import { Meta, StoryObj } from '@storybook/react'
const meta: Meta<typeof Button> = {
  title: 'Ant Design/Button',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'text', 'default']
    },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    icon: { control: HTMLElement }
  },
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Demo: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'large',
    disabled: false
  }
}
