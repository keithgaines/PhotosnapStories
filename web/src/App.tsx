// web/src/App.tsx
import React from 'react'
import './index.css'
import './navbar.css'
import './features.css'
import './imagecard.css'
import './pricing.css'
import './stories.css'
import './footer.css'
import { RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import Routes from 'src/Routes'

const App = () => (
  <RedwoodProvider
    titleTemplate="%PageTitle"
    children={
      <RedwoodApolloProvider
        graphQLClientConfig={{
          uri: '/.redwood/functions/graphql',
        }}
      >
        <Routes />
      </RedwoodApolloProvider>
    }
  />
)

export default App
