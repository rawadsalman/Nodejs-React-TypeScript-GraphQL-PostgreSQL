import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import Forbidden from '../index'

describe('<Forbidden />', () => {
  it('matches snapshot', () => {
    const wrapper = render(
      <Router>
        <Forbidden location={{ pathname: 'yas' }} />
      </Router>
    )

    const { getByText } = wrapper
    const notFoundText = getByText(/Forbidden/i)

    expect(notFoundText).toBeInTheDocument()
  })
})
