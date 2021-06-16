import { render } from '@testing-library/react'
import React from 'react'
import CustomPageHeader from '../index'
import { ThemeProvider } from '@emotion/react'

describe('CustomPageHeader Component', () => {
  it('Renders correctly', async () => {
    const wrapper = render(
      <ThemeProvider theme={{ colors: { primary: 'red' } }}>
        <CustomPageHeader title="Yo" />
      </ThemeProvider>
    )

    expect(wrapper.getByText('Yo')).not.toBeUndefined()
  })
})
