// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InfoSection> = (args) => {
//   return <InfoSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InfoSection from './InfoSection'

export const generated = () => {
  return <InfoSection />
}

export default {
  title: 'Components/InfoSection',
  component: InfoSection,
} as ComponentMeta<typeof InfoSection>
