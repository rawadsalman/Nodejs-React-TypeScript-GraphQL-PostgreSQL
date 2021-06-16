import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import NavItem from '../index'
import { ThemeProvider } from '@emotion/react'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useRouteMatch: () => ({}),
}))

describe('NavItem', () => {
  it('matches Snapshot', async () => {
    const wrapper = render(
      <ThemeProvider theme={{ colors: { primary: 'red' } }}>
        <NavItem to="yolo">test</NavItem>
      </ThemeProvider>
    )

    const { getByText } = wrapper

    expect(wrapper).toMatchSnapshot()
    fireEvent.click(getByText('test'))
  })
})
