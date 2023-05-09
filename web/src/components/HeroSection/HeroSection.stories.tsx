// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeroSection> = (args) => {
//   return <HeroSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HeroSection from './HeroSection'

export const generated = () => {
  return <HeroSection />
}

export default {
  title: 'Components/HeroSection',
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>
