import { render } from '@testing-library/react'
import React from 'react'
import CompanyList from '../CompanyList'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../../../../layouts/theme'
import company from '../../../../../mockdata/company.json'

describe('Company ListView', () => {
  it('matches snapshot', () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <MemoryRouter>
          {/* <CompanyList companies={[company]} /> */}  
        </MemoryRouter>
      </ThemeProvider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
