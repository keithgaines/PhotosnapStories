import type { ComponentMeta, ComponentStory } from '@storybook/react'

import StoryLayout from './StoriesLayout'

export const generated: ComponentStory<typeof StoryLayout> = (args) => {
  return <StoryLayout {...args} />
}

export default {
  title: 'Layouts/StoryLayout',
  component: StoryLayout,
} as ComponentMeta<typeof StoryLayout>
