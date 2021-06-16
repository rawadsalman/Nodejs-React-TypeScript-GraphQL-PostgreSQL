import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import React from 'react'
import companyJson from '../../../../mockdata/company.json'
import { AllProviders } from '../../../testUtils'
import CompanyListView from '../CompanyListView'

describe('Company List View', () => {
  it('should render without error', async () => {
    global.server.use(rest.get('http://localhost:3001/companies', (req, res, ctx) => res(ctx.json([companyJson]))))

    render(
      <AllProviders>
        <CompanyListView />
      </AllProviders>
    )

    const successMessage = await screen.findByText(/My Good Looking Company/i)
    expect(successMessage).toBeInTheDocument()
  })

  it('should render an error if the api is not working', async () => {
    global.server.use(rest.get('http://localhost:3001/companies', (req, res, ctx) => res(ctx.status(500))))

    render(
      <AllProviders>
        <CompanyListView />
      </AllProviders>
    )

    const successMessage = await screen.findByText(/Error from the server/i)
    expect(successMessage).toBeInTheDocument()
  })
})
