import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    width: '100%',
    height: '13rem',
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (
  args
) => <Skeleton {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Circle = Template.bind({})
Circle.args = {
  width: '7rem',
  height: '7rem',
  borderRadius: '50%',
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkCircle = Template.bind({})
DarkCircle.args = {
  width: '7rem',
  height: '7rem',
  borderRadius: '50%',
}
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)]
