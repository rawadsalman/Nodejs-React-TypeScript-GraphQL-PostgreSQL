import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import apClient from './config/apollo'
import { defaultTheme } from './layouts/theme/index'
import RootRoutes from './routes/root'

const App: React.FC = () => {
  return (
    <ApolloProvider client={apClient}>
      <ThemeProvider theme={defaultTheme}>
        <RootRoutes />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
