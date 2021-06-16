import React from 'react'
import { render, act, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders Renders Login Page on initial load', async () => {
    let container
    act(() => {
      container = render(<App />)
    })

    await waitFor(() => {})

    expect(container.getByText('Hey there')).toBeInTheDocument()
  })
})
