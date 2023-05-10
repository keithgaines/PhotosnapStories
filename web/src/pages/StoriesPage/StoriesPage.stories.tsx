import type { ComponentMeta } from '@storybook/react'

import StoriesPage from './StoriesPage'

export const generated = () => {
  return <StoriesPage />
}

export default {
  title: 'Pages/StoriesPage',
  component: StoriesPage,
} as ComponentMeta<typeof StoriesPage>
