import { render } from '@testing-library/react'
import React from 'react'
import IndexView from '../index'

describe('Index View', () => {
  it('runs handleClick', async () => {
    const wrapper = render(<IndexView />)
    const { getByText } = wrapper
    const foundText = getByText(/Hey there/i)

    expect(foundText).toBeInTheDocument()
  })
})
