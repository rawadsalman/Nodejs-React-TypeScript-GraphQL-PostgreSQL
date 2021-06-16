import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import NotFound from '../index'

describe('<Notfound />', () => {
  it('matches snapshot', () => {
    const wrapper = render(
      <Router>
        <NotFound location={{ pathname: 'yas' }} />
      </Router>
    )

    const { getByText } = wrapper
    const notFoundText = getByText(/Not Found/i)

    expect(notFoundText).toBeInTheDocument()
  })
})
