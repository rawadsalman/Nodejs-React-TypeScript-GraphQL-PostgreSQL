import { PlusOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'
import { Button, Empty, Result, Row } from 'antd'
import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import LoadingSpinner from '../../components/Basic/LoadingSpinner'
import { ScrollWrapper } from '../../components/Layout/ContentWrapper'
import CustomPageHeader from '../../components/Layout/CustomPageHeader'
import { ShowCompanyViewModel } from '../../generated/api'
import { GET_ALL_COMPANIES } from '../../gqlQueries/companies/getAll'
import { StyledContent } from '../styles'
import CompanyList from './components/CompanyList'

const CompanyListView: React.FC<RouteComponentProps> = ({ match }) => {
  const { loading, error, data} = useQuery<{ companies: ShowCompanyViewModel[] }>(GET_ALL_COMPANIES)
  const companies = data?.companies
  if (loading) {
    return <LoadingSpinner data-testid="spinner" />
  }

  if (error || companies === null || companies === undefined) {
    return (
      <Row justify="center">
        <Result status={'500' as any} title="500" subTitle="Error from the server" />
      </Row>
    )
  }

  if (companies?.length === 0) {
    return (
      <>
        <Row justify="center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Row>
      </>
    )
  }
  
  return (
    <ScrollWrapper>
      <CustomPageHeader title={'Companies'} />
      <StyledContent>
        <CompanyList companies={companies} />
        {/* <CompanyDetailList companies={companies} /> */}

      </StyledContent>
    </ScrollWrapper>
  )
}

export default CompanyListView
