// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Pricecard> = (args) => {
//   return <Pricecard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Pricecard from './Pricecard'

export const generated = () => {
  return <Pricecard />
}

export default {
  title: 'Components/Pricecard',
  component: Pricecard,
} as ComponentMeta<typeof Pricecard>
