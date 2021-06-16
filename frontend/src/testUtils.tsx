/* istanbul ignore file */
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import apClient from './config/apollo'
import { defaultTheme } from './layouts/theme/index'

export const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={apClient}>
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </ApolloProvider>
  )
}
