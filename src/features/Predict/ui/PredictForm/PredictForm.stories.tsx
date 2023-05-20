import type {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react'
import { PredictForm } from './PredictForm'

export default {
  title: 'features/PredictForm',
  component: PredictForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PredictForm>

const Template: ComponentStory<typeof PredictForm> = (
  args
) => <PredictForm {...args} />

export const Light = Template.bind({})
Light.args = {}
